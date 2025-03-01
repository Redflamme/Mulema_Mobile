import Colors from "@/assets/fonts/color";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";

const API_URL = "http://localhost:5000"; // Remplace par l'IP locale de ton PC

const SignIn = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log("Données envoyées :", data);

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Réponse du serveur :", result);

      if (response.ok) {
        alert("Compte créé avec succès !");
        router.push("/login"); // Redirection automatique
      } else {
        alert(result.message || "Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Erreur de requête :", error);
      alert("Impossible de créer un compte. Vérifie ta connexion réseau.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = watch("email") && watch("password") && watch("username");

  return (
    <View style={styles.container}>
      <View style={{ width: 90, height: 90 }}>
        <Image source={require("@/assets/images/logo.png")} style={{ width: "100%", height: "100%" }} />
      </View>
      <Text style={styles.title}>Créez un compte.</Text>

      <View style={{ width: "80%" }}>
        <Text>Adresse Email</Text>
        <Controller
          control={control}
          rules={{ required: "L'email est requis" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

        <Text>Nom d'utilisateur</Text>
        <Controller
          control={control}
          rules={{ required: "Le nom d'utilisateur est requis" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Nom d'utilisateur"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

        <Text>Mot de passe</Text>
        <Controller
          control={control}
          rules={{ required: "Le mot de passe est requis" }}
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

      <Pressable
        style={[styles.button, !isFormValid && { backgroundColor: "gray" }]}
        onPress={handleSubmit(onSubmit)}
        disabled={!isFormValid || loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>S'inscrire</Text>}
      </Pressable>

      <Text>Deja un compte ?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={{ color: "red" }}>Se connecter ici !</Text>
          </Pressable>

    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gris2,
  },
  title: {
    fontSize: 20,
    fontFamily: Colors.font,
    fontWeight: "bold",
    marginVertical: 5,
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
  button: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: "red",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SignIn;
