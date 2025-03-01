import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    Image,
    Pressable
} from 'react-native';
import { useFonts } from 'expo-font';
import Nav from '@/components/Nav';
import Colors from '@/assets/fonts/color.js';
import { Ionicons } from '@expo/vector-icons';

export default function Sage() {
    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <>
            {/* Barre de navigation */}
            <View style={{zIndex:100}}>
                <Nav />
            </View>

            {/* Fond d'écran */}
            <ImageBackground
                source={require('@/assets/images/Font.png')} // Image de fond
                style={styles.background}
                resizeMode="cover" // "cover" fonctionne mieux sur Android que "contain"
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.container}>
                        {/* Titre */}
                        <Text style={styles.title}>
                            <Text style={{color:Colors.vert,fontSize:25,textShadowColor: Colors.logo,
                            textShadowOffset: { width: 3, height: 3 },
                            textShadowRadius: 5,marginLeft:10}}>▶</Text> 
                            Thème 1: Vie social et familliale</Text> 
                        <Text style={styles.subtitle}>
                            Terminer complètement un exercice pour passer au suivant
                        </Text>

                        {/* Boutons */}
                        <View style={styles.dispBtn}>
                            
                            {/* Bouton 1 */}
                            <View style={{width:'100%',flexDirection:'row',justifyContent:'start',marginBottom:20}}>
                                <View style={styles.zonebtn}>
                                    <View>
                                        <Text style={{color:Colors.white,textAlign:'center',fontSize:15}}>
                                            Associez chaque élément à leurs Traductions en langue nationale
                                        </Text>
                                    </View>
                                    <View style={{width:80,height:80}}>
                                        <Pressable style={styles.button}>
                                            <View style={styles.btz}>
                                                <Text style={{color:Colors.white2,fontSize:25,fontWeight:700,textAlign:'center',
                                                    flexDirection:'row',alignItems:'center',justifyContent:'center'

                                                }}>
                                                    1
                                                </Text>
                                                {/* <View style={styles.lock} id='lock'>
                                                    <Image
                                                        source={require('@/assets/images/cardenaas.png')}
                                                        style={styles.img}
                                                    />
                                                </View> */}
                                            </View>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            
                            {/* Trait vert */}
                            <View style={[{width:'60%',height:10,backgroundColor:Colors.vert,transform: [{ rotate: "45deg" }],
                            top:20,left:80},styles.shadow]}>

                            </View>

                            {/* Bouton 2 */}
                            <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-end',marginBottom:20}}>
                                <View style={styles.zonebtn}>
                                    <View style={{paddingHorizontal:20}}>
                                        <Text style={{color:Colors.white,textAlign:'center',fontSize:15}}>
                                            écrire en langue nationale
                                        </Text>
                                    </View>
                                    <View style={{width:70,height:70}}>
                                        <Pressable style={styles.button}>
                                            <View style={styles.btz}>
                                                <Text style={{color:Colors.white2,fontSize:15,fontWeight:700,textAlign:'center',
                                                    flexDirection:'row',alignItems:'center',justifyContent:'center'

                                                }}>
                                                    2
                                                </Text>
                                                <View style={[{width:20,height:20,right:10,top:10},styles.lock]} id='lock1'>
                                                    <Image
                                                        source={require('@/assets/images/cardenaas.png')}
                                                        style={styles.img}
                                                    />
                                                </View>
                                            </View>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>

                            {/* Trait vert */}

                            <View style={[{width:'60%',height:10,backgroundColor:Colors.vert,transform: [{ rotate: "-45deg" }],
                            top:20,left:80},styles.shadow]}></View>

                            {/* Bouton3 */}
                            <View style={{width:'100%',flexDirection:'row',justifyContent:'start',marginBottom:20}}>
                                <View style={styles.zonebtn}>
                                    <View style={{paddingHorizontal:20}}>
                                        <Text style={{color:Colors.white,textAlign:'center',fontSize:15,}}>
                                            Sélectionner la bonne image
                                        </Text>
                                    </View>
                                    <View style={{width:90,height:90}}>
                                        <Pressable style={styles.button}>
                                            <View style={styles.btz}>
                                                <Text style={{color:Colors.white2,fontSize:25,fontWeight:700,textAlign:'center',
                                                    flexDirection:'row',alignItems:'center',justifyContent:'center'

                                                }}>
                                                    3
                                                </Text>
                                                <View style={[{width:30,height:30,right:15,top:12},styles.lock]} id='lock2'>
                                                    <Image
                                                        source={require('@/assets/images/cardenaas.png')}
                                                        style={styles.img}
                                                    />
                                                </View>
                                            </View>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        height:'110%',
        width:'100%',
    },
    scrollContent: {
        justifyContent: 'center',
        height:'110%',
        alignItems: 'center',
        paddingTop:100,
        backgroundColor:Colors.black2
    },
    container: {
        padding: Colors.padding,
        height:'100%',
        width:'100%',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
        gap:20,
        flexDirection:'row'
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "#000",
        paddingHorizontal: 50,
        fontSize:18,
        fontWeight:'bold'
    },
    lock:{
        position:'absolute',
    },
    img:{
        width:'100%',
        height:'100%',
    },
    dispBtn:{
        width:'100%',
        height:'100%',
        paddingTop:30,
    },
    zonebtn:{
        width:200,
        alignItems:'center',
        flexDirection:'column',
        gap:10,
    },
    button:{
        width:'100%',
        height:'100%',
        backgroundColor:Colors.vert2,
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        borderRadius:50,
        shadowColor: Colors.black,
        shadowOffset: { width: 18, height: 18 },
        shadowOpacity: 0.9, // Plus visible
        shadowRadius: 100, // Ombre plus floue

        // Ombre Android
        elevation: 10, // Ombre plus forte sur Android
        zIndex:20
    },
    shadow:{
        
        shadowColor: Colors.black,
        shadowOffset: { width: 18, height: 18 },
        shadowOpacity: 0.9, // Plus visible
        shadowRadius: 100, // Ombre plus floue

        // Ombre Android
        elevation: 10, // Ombre plus forte sur Android
    },
    btz:{
        width:'100%',
        borderWidth:5,
        borderColor:Colors.white,
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        borderRadius:'50%',  
        position:'relative'
    }

});
