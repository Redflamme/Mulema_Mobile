import Colors from "@/assets/fonts/color";
import { CustomButton } from "@/components/CustomButton";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const LanguageChoice = () => {
  const router = useRouter();
  const next = () => {
    router.push("/welcome-video");
  };
  console.log("next");
  return (
    <View style={{ backgroundColor: Colors.gris2 }}>
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
            paddingVertical: 15,
            textAlign: "center",
          }}
        >
          Choississez la langue que vous souhaitez apprendre{" "}
        </Text>
        <View
          style={{ width: "80%", height: 200, flexDirection: "column", gap: 10 }}
        >
          <Pressable
            onPress={() => {
              router.push("/welcome-video?name=Duálá&description=description&videolink=link");
            }}
            style={({ pressed }) => [
              {
                width: '100%',
                height: 60,
                borderRadius:12,
                justifyContent: "center",
              },
              pressed
                ? { backgroundColor: "green" }
                : { backgroundColor: Colors.gris },
            ]}
          >
            <Text style={{ textAlign: "center" }}>Duálá</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              router.push("/welcome-video?name=Bassa&description=description&videolink=link");
            }}
            style={({ pressed }) => [
              {
                width: '100%',
                height: 60,
                borderRadius:12,
                justifyContent: "center",
              },
              pressed
                ? { backgroundColor: "green" }
                : { backgroundColor: Colors.gris },
            ]}
          >
            <Text style={{ textAlign: "center" }}>Bassa</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              router.push("/welcome-video?name=Ghomálá&description=description&videolink=link");
            }}
            style={({ pressed }) => [
              {
                width: '100%',
                height: 60,
                borderRadius:12,
                justifyContent: "center",
              },
              pressed
                ? { backgroundColor: "green" }
                : { backgroundColor: Colors.gris },
            ]}
          >
            <Text style={{ textAlign: "center" }}>Ghomálá</Text>
          </Pressable>
          
          
        </View>
        {/* <CustomButton
          titleStyle={{ color: Colors.white }}
          pressStyle={{
            backgroundColor: Colors.black,
            width: "50%",
            borderRadius: 5,
            paddingVertical: 8,
            paddingHorizontal: 5,
            marginVertical: "auto",
          }}
          title="Suivant"
          onPress={next}
        /> */}
      </View>
    </View>
  );
};
export default LanguageChoice;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.gris2,
  },
});
