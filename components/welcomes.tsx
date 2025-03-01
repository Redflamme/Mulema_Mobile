import Colors from "@/assets/fonts/color";
import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Image,
  Text,
} from "react-native";

const load = () => {
  // Valeur animée pour l'animation de la hauteur
  const animatedHeight = useRef(new Animated.Value(0)).current;

  // Valeurs animées pour l'effet de vague et d'apparition sur le texte
  const animatedValues = useRef([]).current;

  const text = "muléma".split(""); // Séparation du texte en lettres
  if (animatedValues.length === 0) {
    text.forEach(() => {
      animatedValues.push({
        opacity: new Animated.Value(0), // Opacité initiale à 0
        translateY: new Animated.Value(0), // Position verticale initiale
      });
    });
  }

  // Animation de la hauteur
  useEffect(() => {
    // Nombre d'étapes
    const steps = 5; // Par exemple, 5 étapes
    const totalDuration = 3000; // Durée totale de l'animation (3 secondes)
    const stepDuration = totalDuration / steps; // Durée par étape
  
    // Création des valeurs pour chaque étape
    const stepValues = Array.from({ length: steps }, (_, i) => i / (steps - 1)); // Génère des valeurs entre 0 et 1
  
    // Création des animations pour chaque étape
    const animations = stepValues.map((toValue) =>
      Animated.timing(animatedHeight, {
        toValue, // La valeur cible pour cette étape
        duration: stepDuration, // Durée de l'étape
        useNativeDriver: false, // Nécessaire pour la propriété "height"
      })
    );
  
    // Lancer les animations en séquence
    Animated.sequence(animations).start();
  }, [animatedHeight]);
  // Animation des lettdfres (apparition et saut)
  useEffect(() => {
    const animations = animatedValues.map(({ opacity, translateY }, index) =>
      Animated.sequence([
        Animated.delay(index * 300), // Délai pour chaque lettre
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1, // Rendre visible
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.sequence([
            Animated.timing(translateY, {
              toValue: -20, // Monter la lettre
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(translateY, {
              toValue: 0, // Redescendre
              duration: 300,
              useNativeDriver: true,
            }),
          ]),
        ]),
      ])
    );

    Animated.stagger(200, animations).start(); // Démarre l'animation des lettres avec un intervalle
  }, [animatedValues]);

  return (
    <View style={styles.loadingContainer}>
      <View style={styles.case}>
        <View style={styles.img}>
          <Image
            source={require('@/assets/images/noix.png')}
            style={styles.image}
          />
        </View>
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              height: animatedHeight.interpolate({
                inputRange: [0, 1], // De 0% à 100%
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
          id="dd"
        >
          <Image
            source={require('@/assets/images/fisure2.png')}
            style={styles.images}
          />
        </Animated.View>
      </View>
      <View style={{ top: -30, flexDirection: "row" }}>
        {text.map((letter, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.textload,
              {
                opacity: animatedValues[index]?.opacity,
                transform: [{ translateY: animatedValues[index]?.translateY }],
              },
            ]}
          >
            {letter}
          </Animated.Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  case: {
    overflow: "hidden",
    width: 95,
    height: 140,
    position: "relative",
  },
  img: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    position: "fixed",
    width: "50%",
    height: "50%",
  },
  animatedContainer: {
    overflow: "hidden",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  images: {
    position: "fixed",
    width: 20,
    height: "50%",
  },
  textload: {
    fontSize: 30,
    color: "rgb(199, 46, 51)",
    fontWeight: "700",
    fontFamily: "Nunito-Regular", // Assurez-vous que cette police est bien configurée
  },
});

export default load;
