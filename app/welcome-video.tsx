import { Video } from "expo-av";
import Colors from "@/assets/fonts/color";
import { CustomButton } from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { Dimensions } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { useRef } from "react";

const WelcomeVideo = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const router = useRouter();
  const videoRef = useRef(null); // Référence pour contrôler la vidéo

  const next = () => {
    router.push(`/lessons`);
  };

  return (
    <View style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
      <View
        style={{
          width: 80,
          height: 80,
          marginTop: 40,
          padding: 15,
          alignItems: "flex-start",
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginVertical: "5%",
            padding: 0,
            textAlign: "center",
          }}
        >
          Écouter l'histoire qui relate l'origine des populations qui ont rendu
          populaire cette langue
        </Text>
        <Text>{name}</Text>

        {/* 🟢 Ajout de la vidéo */}
        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={{ require: "https://www.example.com/video.mp4" }} // Remplace par l'URL de ta vidéo
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            isLooping
          />
        </View>

        <CustomButton
          titleStyle={{ color: Colors.white }}
          pressStyle={{
            backgroundColor: Colors.black,
            width: "50%",
            borderRadius: 5,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
          title="Suivant"
          onPress={next}
        />
      </View>
    </View>
  );
};

export default WelcomeVideo;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: 'rgb(230, 230, 230)',
  },
  videoContainer: {
    width: "80%",
    height: 250, // Ajuste la hauteur selon tes besoins
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Fond noir pour la vidéo
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
