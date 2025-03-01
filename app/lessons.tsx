import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import NavTime from '@/components/navTime';
import { useRouter } from "expo-router";
import Sage from '@/components/sage';import Colors from '@/assets/fonts/color.js';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Ionicons } from '@expo/vector-icons';


export default function lessons() {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return(
          <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}}>
            <ActivityIndicator size="large" color="#0000ff" />;
          </View>
        );
    }

    return (
      <>



        <View>
          <Sage />
        </View>

        {/* TABS */}
        <View style={{position:'absolute',zIndex:122,bottom:0,width:'100%'}}>
          <View style={styles.tabs}>
            <Pressable style={styles.pres} onPress={() => router.push("/lessons")}>
                <Ionicons name="book" size={20} color={Colors.logo} />
                <Text style={[{ fontSize: 12, color: Colors.gris3, fontWeight: "400" }, styles.pselect]}>
                    Lessons
                </Text>
            </Pressable>

            <Pressable style={styles.pres} onPress={() => router.push("/community")}>
                <Ionicons name="people-outline" size={20} color={Colors.gris3} />
                <Text style={[{ fontSize: 12, color: Colors.gris3, fontWeight: "400",width:100,textAlign:'center'}]}>
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

})