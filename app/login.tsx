import Colors from "@/assets/fonts/color";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Checkbox } from "react-native-paper";
import Wel from "@/components/welcomes";
import Bienvenue from "@/app/welcome";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";

const API_URL = "http://localhost:5000"; // Remplace par ton IP locale

const LogIn = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldShowForm, setShouldShowForm] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const hasSeenWelcome = await AsyncStorage.getItem("hasSeenWelcome");
        if (!hasSeenWelcome) {
          setVisible(true);
          await AsyncStorage.setItem("hasSeenWelcome", "true"); // Enregistrer que l'utilisateur a vu l'écran
        }
      } catch (error) {
        console.error("Erreur lors de la vérification du stockage :", error);
      }
    };

    checkFirstTime();
  }, []);


  // Vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    const checkStoredCredentials = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("user_token");

        if (storedToken) {
          router.push("/login"); // Redirection immédiate
        } else {
          setShouldShowForm(true);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    checkStoredCredentials();
  }, []);

  // Afficher l'écran de bienvenue temporaire
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Gestion de la connexion
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            console.log("✅ Connexion réussie ! Token reçu :", result.token);

            if (result.token) {
                await AsyncStorage.setItem("user_token", result.token);
                console.log("✅ Token stocké avec succès !");
            } else {
                console.warn("⚠️ Aucun token reçu !");
            }

            // Vérification de id_langue
            if (result.user.id_langue_vide === "oui") {
                router.push("/language-choice");
            } else {
                router.push("/home");
            }
        } else {
            alert(result.message || "Identifiant ou mot de passe incorrect");
        }
    } catch (error) {
        console.error("❌ Erreur de requête :", error);
        alert("Impossible de se connecter. Vérifie ta connexion réseau.");
    } finally {
        setIsLoading(false);
    }
  };

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("user_token");
    console.log("🔍 Token stocké :", token);
  };

  useEffect(() => {
      checkToken();
  }, []);



  if (showWelcome) {
    return (
      <View style={{ height: "100%" }}>
        <Wel />
      </View>
    );
  }
  
  

  return (
    <>
    
        {visible && (
        <View style={styles.absolute}>
          <Bienvenue />
          <View style={styles.zonenext}>
            <Pressable style={styles.btnnext} onPress={() => setVisible(false)}>
              <Text style={styles.textnext}>Suivants</Text>
            </Pressable>
          </View>
        </View>
        )}

      <View style={styles.container}>
        <View style={{ width: 90, height: 90 }}>
          <Image source={require("@/assets/images/logo.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <Text style={styles.title}>Se Connecter</Text>

        {shouldShowForm && (
          <>
            <View style={{ width: "80%" }}>
              <Text>Adresse Email</Text>
              <Controller
                control={control}
                rules={{ required: "Email requis" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
              {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

              <Text>Mot de passe</Text>
              <Controller
                control={control}
                rules={{ required: "Mot de passe requis" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="password"
              />
              {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            </View>

            <Text>Pas encore de compte ?</Text>
            <Pressable onPress={() => router.push("/sign-in")}>
              <Text style={{ color: "red" }}>Inscrivez-vous ici !</Text>
            </Pressable>

            <View style={styles.checkboxContainer}>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    status={value ? "checked" : "unchecked"}
                    onPress={() => onChange(!value)}
                  />
                )}
                name="rememberMe"
              />
              <Text>Se souvenir de moi</Text>
            </View>

            <Pressable
              style={styles.loginButton}
              onPress={handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "#fff" }}>Connexion</Text>}
            </Pressable>
          </>
        )}
      </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  btnnext:{
    backgroundColor: Colors.black,
    width: "50%",
    borderRadius: 5,
    paddingVertical: 8,
    marginVertical: "auto",
    justifyContent:'center',
    position:'absolute',
    top:-110,
    left:'25%',
    flexDirection:'row'
  },
  textnext:{
    color:Colors.logo
  },
  zonenext:{
    justifyContent:'center',
    position:'relative'
  },
  absolute:{
    position:'fixed',
    width:'100%',
    height:'100%',
    top:0,
    zIndex:100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gris2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  input: {
    height: 45,
    width: "100%",
    backgroundColor: Colors.gris,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "red",
    borderRadius: 5,
    marginTop: 20,
  },
});

export default LogIn;
