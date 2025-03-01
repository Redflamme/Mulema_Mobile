import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '@/assets/fonts/color.js';
import Profil from '@/components/profile';
import Setting from '@/components/setting';

export default function Nav2() {
    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    const [isViewSetVisible, setIsViewSetVisible] = useState(false);

    if (!fontsLoaded) {
        return null; // Vous pouvez ajouter un indicateur de chargement ici si nécessaire
    }

    return (
        <>
            {/* Barre de navigation */}
            <View style={styles.nav}>
                <View>
                    <Text style={styles.text}>Profil</Text>
                </View>
                <View style={styles.align}>
                    <TouchableOpacity
                        style={styles.el}
                        onPress={() => setIsViewSetVisible(true)}
                    >
                        <View style={styles.icon}>
                            <Image
                                source={require('@/assets/images/set.png')}
                                style={styles.img}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Profil */}
            <View id="profil">
                <Profil />
            </View>

            {/* Vue des paramètres */}
            {isViewSetVisible && (
                <View style={styles.view_not}>
                    <View style={styles.navigation}>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <View style={styles.icon}>
                                <Image
                                    source={require('@/assets/images/set.png')}
                                    style={styles.img}
                                />
                            </View>
                            <Text style={styles.text}>Paramètre</Text>
                        </View>
                        <TouchableOpacity onPress={() => setIsViewSetVisible(false)}>
                            <Text style={styles.text}>✖</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Setting />
                    </View>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    view_not: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: Colors.gris2,
        zIndex: 10,
        top: 28,
    },
    navigation: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 60,
        paddingHorizontal: Colors.padding,
        width: '100%',
        backgroundColor: Colors.white,
    },
    nav: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 3,
        top: 28,
        backgroundColor: '#fff',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    align: {
        gap: 16,
        flexDirection: 'row',
    },
    el: {
        flexDirection: 'row',
        gap: 4,
    },
    icon: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text: {
        fontSize: 16,
        fontFamily: Colors.font,
        color: Colors.black,
        fontWeight: 'bold',
    },
});