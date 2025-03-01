import { useRouter } from "expo-router";
import React from 'react';
import { Pressable, StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import Colors from '@/assets/fonts/color.js';
import { useFonts } from 'expo-font';
import Nav from '@/components/nav2';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Ionicons } from '@expo/vector-icons';

const profil = () =>  {
  const router = useRouter();
  
  const [fontsLoaded] = useFonts({
      'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!fontsLoaded) {
      return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <>
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
                <Ionicons name="person" size={20} color={Colors.logo} />
                <Text style={[{ fontSize: 12, color: Colors.gris3, fontWeight: "400" }, styles.pselect]}>
                    Profil
                </Text>
            </Pressable>
        
          </View>
      </View>

      {/* Cette nav contien le profil */}
      <View style={{ flex: 1}}>
        <Nav />
      </View>
      
      
    </>
  );
};

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
  // 
  content:{position:'relative',marginTop:60,height:'100%',paddingBottom:80,backgroundColor:Colors.white,flexDirection:'column',gap:'3%',justifyContent:'center'},
  zprofil:{gap:10},
  mod:{flexDirection:'row',borderColor:Colors.white,borderWidth:2,borderRadius:Colors.radius2,height:50,padding:Colors.padding,width:'49%',
  backgroundColor:Colors.logo,gap:Colors.padding,alignItems:'center',outline:'none'},

  sms:{flexDirection:'row',borderColor:Colors.logo,borderWidth:2,borderRadius:Colors.radius2,height:50,padding:Colors.padding,width:'49%',
    backgroundColor:Colors.white,gap:Colors.padding,alignItems:'center',outline:'none'},
  
  img:{width:'100%',height:'100%',},
  imgs:{width:'60%',height:'60%',},
  imgh:{width:30,height:30,},
  imgt:{width:20,height:20,},
  imgX:{width:30,height:30,marginHorizontal:10},
  
  pic:{flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:'50%',overflow:'hidden'},
  pica:{border:4,borderRadius:'50%',overflow:'hidden',borderWidth:2,width:80,height:80,backgroundColor:Colors.gris2,borderColor:Colors.gris},
  pen:{width:30,height:30,backgroundColor:Colors.logo,borderRadius:8,justifyContent:'center',alignItems:'center',position:'relative',left:-25,top:25,outline:'none'},
  tex:{alignItems:'center',gap:'6px'},    
  text1:{fontFamily: Colors.font,fontSize:Colors.tsize,color:Colors.black,fontWeight:'600',},
  text2:{color:Colors.black,opacity:0.5,textAlign:'center',fontSize:11},
  text3:{color:Colors.white,opacity:1,textAlign:'center',fontSize:11,fontWeight:509},
  text4:{color:Colors.logo,opacity:1,textAlign:'center',fontSize:11,fontWeight:509},
  follow:{flexDirection:'row',justifyContent:'space-around',marginTop:20},
  count_text:{textAlign:'center',},
  stat:{marginTop:20,paddingHorizontal:Colors.padding,gap:20},
  stats:{marginTop:20,paddingHorizontal:Colors.padding,gap:20},
  uml:{width:20,height:20},
  group:{flexDirection:'row',justifyContent:'space-between',gap:10},
  bx:{flexDirection:'row',borderColor:Colors.gris,borderWidth:2,borderRadius:Colors.radius2,padding:Colors.padding,width:'49%',backgroundColor:Colors.white,gap:5,overflow:'hidden'},
});

export default profil;