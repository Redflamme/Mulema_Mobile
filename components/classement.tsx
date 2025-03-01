import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, Animated } from 'react-native';
import Colors from '@/assets/fonts/color.js';

export default function ClassS() {
    // Initialiser les valeurs animées pour chaque rang
    const rank1Height = useState(new Animated.Value(0))[0]; // Rank 1
    const rank2Height = useState(new Animated.Value(0))[0]; // Rank 2
    const rank3Height = useState(new Animated.Value(0))[0]; // Rank 3

    // Lancer les animations au chargement de la page
    useEffect(() => {
        // Animer chaque rang avec sa hauteur cible
        Animated.timing(rank1Height, {
            toValue: 200, // Hauteur cible pour Rank 1
            duration: 1000,
            useNativeDriver: false, // Obligatoire pour height
        }).start();

        Animated.timing(rank2Height, {
            toValue: 150, // Hauteur cible pour Rank 2
            duration: 1000,
            useNativeDriver: false,
        }).start();

        Animated.timing(rank3Height, {
            toValue: 100, // Hauteur cible pour Rank 3
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, []);

    return (
        <>
            {/* Classement */}
            <View style={styles.com}>
                {/* Rank 2 */}
                <View style={[styles.pos]}>
                    <View style={styles.box}>
                        <View style={styles.info}>
                            <View style={styles.prof}>
                                <Image
                                    source={require('@/assets/images/user.png')}
                                    style={styles.img}
                                />
                            </View>
                            <Text style={styles.username}>NomUser</Text>
                            <View style={styles.xpBox}>
                                <Text style={styles.xpText}>9999 XP</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <Animated.View
                            style={[
                                styles.rank,
                                { height: rank2Height},
                            ]}
                        >
                            <Text style={styles.rankText}>2</Text>
                        </Animated.View>
                    </View>
                </View>
                {/* Rank 1 */}
                <View style={[styles.pos]}>
                    <View style={styles.box}>
                        <View style={styles.info}>
                            <View style={styles.prof}>
                                <Image
                                    source={require('@/assets/images/user.png')}
                                    style={styles.img}
                                />
                            </View>
                            <Text style={styles.username}>NomUser</Text>
                            <View style={styles.xpBox}>
                                <Text style={styles.xpText}>9999 XP</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <Animated.View
                            style={[
                                styles.rank,
                                { height: rank1Height},
                            ]}
                        >
                            <Text style={styles.rankText}>1</Text>
                        </Animated.View>
                    </View>
                </View>
                {/* Rank 3 */}
                <View style={[styles.pos]}>
                    <View style={styles.box}>
                        <View style={styles.info}>
                            <View style={styles.prof}>
                                <Image
                                    source={require('@/assets/images/user.png')}
                                    style={styles.img}
                                />
                            </View>
                            <Text style={styles.username}>NomUser</Text>
                            <View style={styles.xpBox}>
                                <Text style={styles.xpText}>9999 XP</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <Animated.View
                            style={[
                                styles.rank,
                                { height: rank3Height},
                            ]}
                        >
                            <Text style={styles.rankText}>3</Text>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    com: {
        backgroundColor: Colors.logo2,
        height: 330,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    pos: {
        justifyContent: 'flex-end',
        height: '100%',
        width: '33.33%',
    },
    box: {
        width: '100%',
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
    username: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
    },
    xpBox: {
        backgroundColor: '#fff',
        width: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: Colors.radius1,
    },
    xpText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '700',
    },
    divider: {
        width: '100%',
        height: 30,
        backgroundColor: Colors.logo,
        borderTopColor: Colors.logo,
        borderTopWidth: 1,
    },
    rank: {
        borderTopColor: Colors.logo3,
        borderLeftColor: Colors.logo3,
        borderRightColor: Colors.logo3,
        backgroundColor: Colors.logo2,
        borderLeftWidth: 1,
        borderRightWidth: 0.2,
        justifyContent: 'center',
    },
    rankText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 50,
    },
});
