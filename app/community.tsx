import React from 'react';
import { useRouter } from "expo-router";
import { Pressable, View, StyleSheet, ScrollView, Text } from 'react-native';
import Colors from '@/assets/fonts/color.js';
import Nav3 from '@/components/nav3';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Ionicons } from '@expo/vector-icons';

export default function Staircase() {
    const router = useRouter();

    return (
        <>

            <View>
                <Nav3/>
            </View>

            {/* TABS */}
            <View style={{position:'absolute',zIndex:122,bottom:0,width:'100%'}}>
            <View style={styles.tabs}>
                <Pressable style={styles.pres} onPress={() => router.push("/lessons")}>
                    <Ionicons name="book" size={20} color={Colors.gris3} />
                    <Text style={[{ fontSize: 12, color: Colors.gris3, fontWeight: "400" }]}>
                        Lessons
                    </Text>
                </Pressable>

                <Pressable style={styles.pres} onPress={() => router.push("/community")}>
                    <Ionicons name="people-outline" size={20} color={Colors.logo} />
                    <Text style={[{ fontSize: 12, color: Colors.gris3, fontWeight: "400",width:100,textAlign:'center'}, styles.pselect]}>
                        Community
                    </Text>
                </Pressable>

                <Pressable style={styles.pres} onPress={() => router.push("/home")}>
                    <IconSymbol size={20} name="house.fill" color={Colors.gris3} />
                    <Text style={[{ fontSize: 12, color: Colors.gris3, fontWeight: "400" }]}>
                        Home
                    </Text>
                </Pressable>

                <Pressable style={styles.pres} onPress={() => router.push("/profil")}>
                    <Ionicons name="person" size={20} color={Colors.gris3} />
                    <Text style={[{ fontSize: 12, color: Colors.gris3, fontWeight: "400" }]}>
                        Profil
                    </Text>
                </Pressable>
            
            </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
   // TABS
  tabs:{
    backgroundColor:Colors.white,
    width:'100%',
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    gap:10,
  },
  pres:{
      width:50,
      height:50,
      justifyContent:'center',
      flexDirection:'column',
      borderRadius:50,
      alignItems:'center',
      gap:2,
  },

  pselect:{
      color:Colors.logo,
      fontWeight:700,
  },
});