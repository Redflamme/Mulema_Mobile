import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Nav from '@/components/Nav';
import Colors from '@/assets/fonts/color.js';

export default function Lessons() {
    const [selectedButton, setSelectedButton] = useState(null); // État pour le bouton sélectionné

    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View style={styles.loading}><ActivityIndicator size="large" color="#0000ff" /></View>;
    }

    // Fonction pour gérer la sélection du bouton
    const handleSelect = (index) => {
        setSelectedButton(index); // Mettre à jour l'état avec l'index du bouton cliqué
    };

    return (
        <>
            <View style={{ top: 0, position: 'fixed', width: '100%', zIndex: 20 }}>
                <Nav />
            </View>

            <ScrollView style={styles.scroll}>
                <View style={styles.line_btn}>
                    {[...Array(6)].map((_, index) => ( // Générer 6 boutons dynamiquement
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.btns,
                                selectedButton === index && styles.selectedBtn // Appliquer le style si sélectionné
                            ]}
                            onPress={() => handleSelect(index)} // Sélectionner le bouton
                        >
                            <View>
                                <Text style={styles.ptext}>Je Détache</Text>
                            </View>
                            <View>
                                <Text style={styles.gtext}>ME NTINIL</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.audio_list}>
                    <Text>Déposer l'objet audio ici!</Text>
                </View>
            </ScrollView>
        </>
    );
}

// Styles
const styles = StyleSheet.create({
    scroll: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.white,
        marginTop: 28,
        padding: Colors.padding,
    },
    line_btn: {
        paddingTop: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: -4,
        marginBottom: 20,
    },
    btns: {
        marginBottom: 15,
        width: '48%',
        padding: Colors.padding,
        backgroundColor: Colors.gris2,
        borderRadius: Colors.radius2,
        flexDirection: 'column',
        gap: 50,
    },
    selectedBtn: {
        backgroundColor: Colors.vert, // Appliquer le vert au bouton sélectionné
    },
    ptext: {
        textAlign: 'center',
        fontSize: 12,
        color: Colors.black,
        textTransform: 'uppercase',
    },
    gtext: {
        textAlign: 'center',
        fontSize: 15,
        color: Colors.black,
        textTransform: 'uppercase',
        fontWeight: '700',
    },
    audio_list: {
        width: '100%',
        height: 120,
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: Colors.radius2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%',
    },
});

