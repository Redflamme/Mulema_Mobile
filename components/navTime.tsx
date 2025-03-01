import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '@/assets/fonts/color.js';

const NavTime = () => {
    const [progress, setProgress] = useState(50); // Progress value (0 to 100)

    const increaseProgress = () => {
        if (progress < 100) setProgress(progress + 10);
    };

    const decreaseProgress = () => {
        if (progress > 0) setProgress(progress - 10);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={decreaseProgress} style={styles.iconContainer}>
                <Text style={styles.iconText}>✖</Text>
            </TouchableOpacity>
            <View style={styles.NavTime}>
                <View style={[styles.progress, { width: `${progress}%` }]} />
            </View>
            <TouchableOpacity onPress={increaseProgress} style={styles.iconContainer}>
                <View style={styles.icon}>
                    <Image
                        source={require('@/assets/images/kori.png')}
                        style={styles.imgd}
                    />
                </View>
                <Text style={styles.text}>
                    4            
                </Text>
            </TouchableOpacity>
                  
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Colors.padding,
        height: 50,
        top:28,
        zIndex:10,
        width: '100%',
        backgroundColor:Colors.white,
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    text: {
        color: Colors.logo,
        position:'relative',
        top:-2,
        fontFamily: Colors.font, // Appliquer la police ici
    },
    icon: {
        width: 20,
        height: 20,
    },
    imgd: {
        width: 25,
        height: 14,
        transform:[
            { rotate: '90deg' }, // Rotation de 45 degrés
          ],
    },
    iconText: {
        top:-4,
        fontSize: 18,
        color: '#333',
        fontFamily: Colors.font, // Appliquer la police ici
    },
    NavTime: {
        flex: 1,
        height: 8,
        backgroundColor: Colors.gris,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    progress: {
        borderRadius: 10,
        height: '100%',
        backgroundColor: Colors.logo,
    },
});


export default NavTime;
