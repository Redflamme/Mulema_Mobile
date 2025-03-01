import React, { useState } from 'react';
import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

import NavTime from '@/components/navTime';
import Colors from '@/assets/fonts/color.js';
import Nav from '@/components/Nav';

export default function Theme1() {

  const router = useRouter();
  
    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
      <>
        
        {/* LA barre des des notifications */}
        <View>
          <Nav />
        </View>
        <View style={styles.background}>
          <Image
            source={require('@/assets/images/Fonden-degrade1.png')}
            style={styles.img}
          />
        </View>

        <ScrollView style={styles.contain}>
            
            <View style={styles.top}>
                <View>
                    <Text style={styles.titre}>
                        Niveau 1
                    </Text>
                </View>
                <View>
                    <Text style={styles.text}>
                        Débloquez les niveaux suivant en resolvant les ewercices de ceux précedent
                    </Text>
                </View>
                <View>
                <TouchableOpacity style={styles.start}>
                    <Image
                        source={require('@/assets/images/start.png')}
                        style={styles.img}
                    />
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containt}>
                <View style={styles.containt}>
                    <View style={styles.river}>
                        <Image
                            source={require('@/assets/images/Forme1.png')}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.grad}>
                        <View style={[styles.el, styles.flexstar]}>
                            <TouchableOpacity style={[styles.btn]} onPress={() => router.push("/home2")}>
                                <View style={styles.part}>
                                    <Image
                                        source={require('@/assets/images/objA1.png')}
                                        style={styles.img}
                                    />
                                </View>
                                
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.el, styles.flexcenter]}>
                            <TouchableOpacity style={[styles.btn]}>
                                <View style={styles.part}>
                                    <Image
                                        source={require('@/assets/images/objA2.png')}
                                        style={styles.img}
                                    />
                                </View>
                                <View style={styles.lock} id='lock'>
                                    <Image
                                        source={require('@/assets/images/cardenaas.png')}
                                        style={styles.img}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.el, styles.flexend]}>
                            <TouchableOpacity style={[styles.btn]}>
                                <View style={styles.part}>
                                    <Image
                                        source={require('@/assets/images/objA3.png')}
                                        style={styles.img}
                                    />
                                </View>
                                <View style={styles.lock} id='lock'>
                                    <Image
                                        source={require('@/assets/images/cardenaas.png')}
                                        style={styles.img}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        
                    </View>

                            
                </View>
            </View>
            
        </ScrollView>

        

        

      </>

    );
}

const styles = StyleSheet.create({
  background:{
    width:'100%',
    height:'200%',
    position:'absolute',
    zIndex:-1,
    backgroundColor:Colors.white,
  },
  img:{
    width:'100%',
    height:'100%',
  },
  el:{
    width:'100%',
    height:60,
    overflow:'hidden',
    flexDirection:'row',

  },
  btn:{
    width:100,
    height:'100%',
    overflow:'hidden',
  },
  part:{
    width:'100%',
    height:'100%',
  },
  lock:{
    width:30,
    height:30,
    position:'absolute',
    right:40,
    top:20,

  },
  flexstar:{
    justifyContent:'flex-start',
  },
  flexend:{
    justifyContent:'flex-end',
  },
  flexcenter:{
    justifyContent:'center',
  },
  grad:{
    width:'100%',
    height:'100%',
    padding:Colors.padding,
    flexDirection:'column',
    justifyContent:'space-between',
    position:'relative',
    top:-73,
  },
  titre:{
    fontSize:22,
    fontWeight:700,
    color:Colors.logo,
  },
  text:{
    color:Colors.black,
    textAlign:'center',
  },
  start:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:50,
    height:50,
  },
  top:{
    padding:Colors.padding,
    alignItems:'center',
    gap:10,
  },
  containt: {
    position: 'relative',
    height: '100%',
    marginTop:30,
    paddingBottom:30,
  },
  river: {
    position: 'absolute',
    height: '100%',
    width:'100%',
    zIndex:-1,
  },
  contain: {
    position: 'fixed',
    height:'100%',
    marginTop: 60,
    paddingBottom: 20,
    paddingTop:12,
    elevation: 5,
    zIndex:100,
    width:'100%'
  },
})
