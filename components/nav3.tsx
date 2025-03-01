import React, { useState } from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Exemple avec FontAwesome
import Colors from '@/assets/fonts/color.js';
import Vsemaine from '@/components/vsemaine';

export default function Nav3() {

    const [activeButton, setActiveButton] = useState('Semaine'); // "Semaine" sélectionné par défaut

    const handlePress = (button) => {
        setActiveButton(button);
    };

    return (
        <>
            <View style={styles.nav}>
                <View style={styles.ep1}>
                    <Text style={styles.text}>
                        Tableau des leaders
                    </Text>
                    <TouchableOpacity style={styles.icon}>
                        {/* Remplacement de l'image par une icône */}
                        <Icon name="search" size={24} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ep1}>
                    <TouchableOpacity
                        style={[
                            styles.btn,
                            activeButton === 'Semaine' && styles.activeBtn,
                        ]}
                        onPress={() => handlePress('Semaine')}
                    >
                        <Text
                            style={[
                                styles.text,
                                activeButton === 'Semaine' && styles.activeText,
                            ]}
                        >
                            Semaine
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.btn,
                            activeButton === 'Mois' && styles.activeBtn,
                        ]}
                        onPress={() => handlePress('Mois')}
                    >
                        <Text
                            style={[
                                styles.text,
                                activeButton === 'Mois' && styles.activeText,
                            ]}
                        >
                            Mois
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.btn,
                            activeButton === 'Année' && styles.activeBtn,
                        ]}
                        onPress={() => handlePress('Année')}
                    >
                        <Text
                            style={[
                                styles.text,
                                activeButton === 'Année' && styles.activeText,
                            ]}
                        >
                            Année
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Vue pour la semaine */}
            <View id='vue1'>
                <Vsemaine/>
            </View>

            {/* Vue pour le mois */}
            {/* <View id='vue2'>
                <Vsemaine/>
            </View> */}

            {/* Vue pour annee */}
            {/* <View id='vue3'>
                <Vsemaine/>
            </View> */}
        </>
    );
}

const styles = StyleSheet.create({
    liste:{
        padding:Colors.padding,
        width:'100%',
        gap:29
    },
    nth:{
        flexDirection:'row',
        alignItems:'center',
        gap:20,
    },
    info: {
        gap: 5,
        alignItems: 'center',
        top: 15,
        zIndex: 4,
    },
    prof: {
        width: 40,
        height: 40,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: Colors.gris2,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    vue: {
        backgroundColor: Colors.white,
        height: '100%',
        width:'100%',
        overflow:'hidden'
    },
    com: {
        backgroundColor: Colors.logo2,
        height: 330,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    box: {
        width: '100%',
    },
    pos: {
        justifyContent: 'flex-end',
        height: '100%',
        width: '33.33%',
    },
    nav: {
        width: '100%',
        height: 150,
        flexDirection: 'column',
        backgroundColor: Colors.logo2,
        paddingHorizontal: Colors.padding,
        paddingTop: 28,
    },
    ep1: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontFamily: Colors.font,
        color: Colors.white,
        fontWeight: 'bold',
    },
    icon: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        height: 40,
        width: 100,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: Colors.radius1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    activeBtn: {
        backgroundColor: '#fff',
    },
    activeText: {
        color: 'red',
    },
});