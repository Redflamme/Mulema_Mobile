import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { useRouter } from "expo-router";
import { useFonts } from 'expo-font';
import Nav from '@/components/Nav';
import Colors from '@/assets/fonts/color.js';

export default function Sage() {

    const router = useRouter();
    
    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <>
            {/* Barre de navigation */}
            <View style={{position:'fixed',width:'100%',zIndex:120}}>
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
                        <View style={styles.center}>
                            <View>
                                <Text style={styles.text}>
                                    Finnisez d'apprendre une leçon afin de debloquer les autres leçons
                                </Text>
                            </View>
                            <View style={styles.sage}>
                                <Image
                                    source={require('@/assets/images/sage.png')}
                                    style={styles.img} 
                                />
                            </View>
                            <View style={styles.escaliers}>
                                <View style={[styles.escalier,{ width: '65%' }]}>
                                    <View style={styles.marche1}>
                                        <Image
                                            source={require('@/assets/images/escalier.png')}
                                            style={styles.imgs} 
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.marche2} onPress={() => router.push("/lesson_play")}>
                                        <Text style={styles.textbtn}>
                                            Conjugaison du verbe avoir au present
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.escalier,{ width: '79%' }]}>
                                    <View style={styles.marche1}>
                                        <Image
                                            source={require('@/assets/images/escalier.png')}
                                            style={styles.imgs} 
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.marche2} onPress={() => router.push("/lesson_play")}>
                                        <Text style={styles.textbtn}>
                                            Conjugaison du verbe être au present
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.escalier,{ width: '89%' }]}>
                                    <View style={styles.marche1}>
                                        <Image
                                            source={require('@/assets/images/escalier.png')}
                                            style={styles.imgs} 
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.marche2} onPress={() => router.push("/lesson_play")}>
                                        <Text style={styles.textbtn}>
                                            Chiffres de 1-9 en langue
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.escalier,{ width: '98%' }]}>
                                    <View style={styles.marche1}>
                                        <Image
                                            source={require('@/assets/images/escalier.png')}
                                            style={styles.imgs} 
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.marche2} onPress={() => router.push("/lesson_play")}>
                                        <Text style={styles.textbtn}>
                                            Les couleurs
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.escalier,{ width: '110%' }]}>
                                    <View style={styles.marche1}>
                                        <Image
                                            source={require('@/assets/images/escalier.png')}
                                            style={styles.imgs} 
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.marche2} onPress={() => router.push("/lesson_play")}>
                                        <Text style={styles.textbtn}>
                                            Les prenoms personnels
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.escalier,{ width: '130%' }]}>
                                    <View style={styles.marche1}>
                                        <Image
                                            source={require('@/assets/images/escalier.png')}
                                            style={styles.imgs} 
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.marche2} onPress={() => router.push("/lesson_play")}>
                                        <Text style={styles.textbtn}>
                                            Les septs jours de la semaines
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* <View style={[styles.escalier,{ width: '130%' }]}>
                                    <View style={styles.marche1}>
                                        <Image
                                            source={require('@/assets/images/escalier.png')}
                                            style={styles.imgs} 
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.marche2}>
                                        <Text style={styles.textbtn}>
                                            Leçon 6
                                        </Text>
                                    </TouchableOpacity>
                                </View> */}
                                <View style={[styles.escalier,{ width: '140%' }]}>
                                    <View style={styles.marche1}>
                                        <Image
                                            source={require('@/assets/images/escalier.png')}
                                            style={styles.imgs} 
                                        />
                                    </View>
                                    <View style={styles.marche2}>
                                        
                                    </View>
                                </View>
                                <View style={[styles.escalier,{ width: '160%' }]}>
                                    <View style={styles.marche1}>
                                        <Image
                                            source={require('@/assets/images/escalier.png')}
                                            style={styles.imgs} 
                                        />
                                    </View>
                                    <View style={styles.marche2}>
                                        
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
        height:'100%',
        width:'100%',
    },
    scrollContent: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:29,
        height:'100%',
        top:46,
        // width:'100%',
        // zIndex:100,
    },
    container: {
        padding: Colors.padding,
        height:'100%',
        width:'100%',
    },
    center:{
        alignItems:'center',
    },
    sage:{
        width:150,
        height:150,
        overflow:'hidden',
        position:'relative',
        bottom:-30,
        zIndex:3,
    },
    img:{
        width:'100%',
        height:'100%',
    },
    imgs:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        width:'100%',
        height:'100%',
    },
    escaliers:{
        width:'100%',
        padding:Colors.padding,
        alignItems:'center',
        // paddingBottom:200,
        gap:-50,
    },
    escalier:{
        backgroundColor:Colors.vide
    },
    marche1:{
        alignItems:'center',
        height:17,
    },
    marche2:{
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        width:'100%',
        backgroundColor:'rgb(135, 11, 13)',
        borderWidth:2,
        borderColor:'black',
        padding:10,

    },
    textbtn:{
        color:Colors.white,
        fontWeight:600,
        textAlign:'center'
    },
    text:{
        color:'black',
        fontWeight:600,
        textAlign:'center',
        paddingHorizontal:50,
        fontSize:17
    }

    
});
