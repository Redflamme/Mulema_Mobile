import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Share } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '@/assets/fonts/color.js';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Setting() {
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await AsyncStorage.clear(); // Efface toutes les données stockées
            alert("Déconnexion réussie !");
            router.push("/login"); // Redirection vers la page de connexion
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
        }
    };

    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    const [language, setLanguage] = useState('fr'); // Langue par défaut (Français)
    const [aboutVisible, setAboutVisible] = useState(false); // État pour afficher/cacher le texte "À propos"

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'Découvrez cette incroyable application Mulema ! Téléchargez-la maintenant et apprenez facilement.',
            });

            if (result.action === Share.sharedAction) {
                console.log('Partage effectué avec succès !');
            } else if (result.action === Share.dismissedAction) {
                console.log('Partage annulé.');
            }
        } catch (error) {
            console.error('Erreur lors du partage :', error);
        }
    };

    const toggleAbout = () => {
        setAboutVisible(!aboutVisible);
    };

    if (!fontsLoaded) {
        return null; // Vous pouvez ajouter un indicateur de chargement si nécessaire
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.view}>
                <View style={styles.prof}>
                    <Image
                        source={require('@/assets/images/user.png')}
                        style={styles.img}
                    />
                </View>
                <View style={{ gap: 6 }}>
                    <Text style={styles.text}>
                        User_Mulema
                    </Text>
                    <Text style={styles.msg}>
                        User_Mulema@gmail.com
                    </Text>
                </View>
            </View>

            {/* Langue */}
            <View style={[styles.view, styles.sp]}>
                <View style={styles.row}>
                    <Icon name="language" size={20} color={Colors.black} />
                    <Text style={styles.label}>
                        Langue
                    </Text>
                </View>
                <View>
                    <Picker
                        selectedValue={language}
                        onValueChange={(itemValue) => setLanguage(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Français" value="fr" />
                        <Picker.Item label="English" value="en" />
                        <Picker.Item label="Español" value="es" />
                        <Picker.Item label="Deutsch" value="de" />
                    </Picker>
                </View>
            </View>

            {/* Partager l'application */}
            <View style={[styles.view, styles.sp]}>
                <View style={styles.row}>
                    <Icon name="share-alt" size={20} color={Colors.black} />
                    <Text style={styles.label}>
                        Partager l'application
                    </Text>
                </View>
                <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                    <Text style={styles.shareText}>Partager</Text>
                </TouchableOpacity>
            </View>

            {/* À propos de nous */}
            <View style={[styles.view, styles.sp]}>
                <View style={styles.row}>
                    <Icon name="info-circle" size={20} color={Colors.black} />
                    <Text style={styles.label}>
                        À propos de nous
                    </Text>
                </View>
                <TouchableOpacity onPress={toggleAbout} style={styles.aboutButton}>
                    <Text style={styles.aboutButtonText}>Voir</Text>
                </TouchableOpacity>
            </View>

            {aboutVisible && (
                <View style={styles.view}>
                    <Text style={styles.aboutText}>
                        Mulema est une application conçue pour aider les utilisateurs à apprendre et à se connecter avec
                        leur culture à travers leur langue maternelle. Nous sommes passionnés par la préservation de nos
                        racines et croyons que la langue est un outil puissant pour le faire.
                    </Text>
                </View>
            )}

            <TouchableOpacity style={styles.dex}>
                <Text style={styles.texts} onPress={handleLogout}>Déconnexion</Text>
            </TouchableOpacity>

            

            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        padding: Colors.padding,
    },
    view: {
        padding: Colors.padding,
        backgroundColor: Colors.white,
        borderRadius: Colors.radius2,
        gap: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    msg: {
        color: Colors.black,
        fontSize: 15,
        opacity: 0.5,
    },
    prof: {
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 2,
        width: 50,
        height: 50,
        backgroundColor: Colors.gris2,
        borderColor: Colors.gris,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: '500',
        width: 'auto',
    },
    texts: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '500',
        width: 'auto',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black,
    },
    sp: {
        justifyContent: 'space-between',
    },
    picker: {
        width: 150,
        height: 50,
        backgroundColor: Colors.white,
        borderRadius: Colors.radius1,
    },
    shareButton: {
        backgroundColor: Colors.logo,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    shareText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    aboutButton: {
        backgroundColor: Colors.logo,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    aboutButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    aboutContainer: {
        padding: Colors.padding,
        backgroundColor: Colors.gris2,
        borderRadius: Colors.radius2,
        marginVertical: 10,
    },
    aboutText: {
        color: Colors.black,
        fontSize: 14,
        textAlign: 'justify',
    },
    dex: {
        backgroundColor:Colors.logo,
        height:60,
        borderRadius:Colors.radius2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:Colors.padding
    },
});
