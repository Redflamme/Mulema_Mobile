import Colors from "@/assets/fonts/color";
import { CustomButton } from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View, Pressable } from "react-native";

const WelcomePage = () => {
  const router = useRouter();
  const next = () => {
    router.push("/language-choice");
    console.log("next");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginVertical: "15%" }}>BIENVENUE</Text>
      <View style={{ width: 200, height: 200 }}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <Text style={{ fontSize: 16 }}>The future is in our origin</Text>
      
    </View>
  );
};
export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.gris2,
  },
});
