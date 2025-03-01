const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connexion MySQL sécurisée
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mulemaap_db",
    multipleStatements: false, // Sécurité contre les injections SQL
});

db.connect((err) => {
    if (err) {
        console.error("❌ Erreur de connexion MySQL:", err);
        process.exit(1);
    }
    console.log("✅ Connecté à la base de données MySQL.");
});

// Debugging : Voir les requêtes reçues
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url} - Body:`, req.body);
    next();
});

// ✅ ROUTE REGISTER
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Tous les champs sont requis." });
    }

    // Vérifier si l'email existe déjà
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) {
            console.error("❌ Erreur de vérification d'email:", err);
            return res.status(500).json({ message: "Erreur serveur." });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: "Cet email est déjà utilisé." });
        }

        // Hacher le mot de passe et insérer l'utilisateur
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error("❌ Erreur de hachage du mot de passe:", err);
                return res.status(500).json({ message: "Erreur serveur." });
            }

            const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            db.query(sql, [username, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error("❌ Erreur d'insertion:", err);
                    return res.status(500).json({ message: "Erreur serveur." });
                }
                res.status(201).json({ message: "Utilisateur créé avec succès !" });
            });
        });
    });
});

// ✅ ROUTE LOGIN
SECRET_KEY='your_secret_key';

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email et mot de passe requis" });
    }

    try {
        // Vérifier si l'utilisateur existe
        const query = "SELECT * FROM users WHERE email = ?";
        db.query(query, [email], async (err, results) => {
            if (err) {
                console.error("❌ Erreur SQL :", err);
                return res.status(500).json({ message: "Erreur interne du serveur" });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: "Identifiants incorrects" });
            }

            const user = results[0];

            // Vérifier le mot de passe
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: "Mot de passe incorrect" });
            }

            // Générer un token JWT
            console.log("User object:", user);

            const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "7d" });

            // Vérifier si id_langue est vide
            const idLangueVide = !user.id_langue ? "oui" : "non";

            res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    id_langue: user.id_langue,
                    id_langue_vide: idLangueVide
                }
            });
        });
    } catch (error) {
        console.error("❌ Erreur lors de la connexion :", error);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
});


// ✅ Lancement du serveur
app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
