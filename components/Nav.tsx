import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Colors from '@/assets/fonts/color.js';
import Notification from '@/components/notification';
import Setting from '@/components/setting';

export default function Nav1() {
    const [isViewNotVisible, setIsViewNotVisible] = useState(false); // État pour afficher Notifications
    const [isViewSetVisible, setIsViewSetVisible] = useState(false); // État pour afficher Paramètres

    return (
        <>
            <View style={styles.nav}>
                <View style={styles.logo}>
                    <Image
                        source={require('@/assets/images/logo.png')}
                        style={styles.img}
                    />
                </View>
                <View style={styles.align}>
                    <TouchableOpacity style={styles.el}>
                        <View style={styles.icon}>
                            <Image
                                source={require('@/assets/images/kori.png')}
                                style={styles.imgd}
                            />
                        </View>
                        <View style={styles.text}>
                            <Text>9999</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.el}
                        onPress={() => {
                            setIsViewNotVisible(true);
                            setIsViewSetVisible(false);
                        }}
                    >
                        <View style={styles.icon}>
                            <Image
                                source={require('@/assets/images/not.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.text}>
                            <Text>1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.el}
                        onPress={() => {
                            setIsViewSetVisible(true);
                            setIsViewNotVisible(false);
                        }}
                    >
                        <View style={styles.icon}>
                            <Image
                                source={require('@/assets/images/set.png')}
                                style={styles.imgs}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Vue des Notifications */}
            {isViewNotVisible && (
                <View style={styles.view_not}>
                    <View style={styles.navigation}>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <View style={styles.iconx}>
                                <Image
                                    source={require('@/assets/images/not.png')}
                                    style={styles.img}
                                />
                            </View>
                            <Text style={styles.textx}>Notification</Text>
                        </View>
                        <TouchableOpacity onPress={() => setIsViewNotVisible(false)}>
                            <Text style={styles.textn}>✖</Text>
                        </TouchableOpacity>
                    </View>
                    <Notification />
                </View>
            )}

            {/* Vue des Paramètres */}
            {isViewSetVisible && (
                <View style={styles.view_not}>
                    <View style={styles.navigation}>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <View style={styles.iconx}>
                                <Image
                                    source={require('@/assets/images/set.png')}
                                    style={styles.img}
                                />
                            </View>
                            <Text style={styles.textx}>Paramètre</Text>
                        </View>
                        <TouchableOpacity onPress={() => setIsViewSetVisible(false)}>
                            <Text style={styles.textx}>✖</Text>
                        </TouchableOpacity>
                    </View>
                    <Setting />
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    view_not: {
        height: '100%',
        width: '100%',
        position: 'fixed',
        backgroundColor: Colors.gris2,
        zIndex: 100,
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
        backgroundColor: 'rgb(230, 230, 230)',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        position: 'absolute',
        top: 28,
        zIndex: 10,
    },
    logo: {
        width: 50,
        height: 50,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    align: {
        gap: 5,
        flexDirection: 'row',
    },
    el: {
        flexDirection: 'row',
        gap: 4,
        borderWidth: 2,
        borderColor: Colors.gris,
        borderRadius: 50,
        padding: 3,
        height: 30,
        backgroundColor: Colors.gris2,
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        justifyContent: 'center',
        fontFamily: Colors.font,
        fontWeight: '600',
    },
    textn: {
        fontSize: 16,
        fontFamily: Colors.font,
        color: Colors.black,
        fontWeight: 'bold',
    },
    imgs: {
        width: '100%',
        height: '100%',
    },
    imgd: {
        width: 25,
        height: 14,
        transform: [{ rotate: '90deg' }],
    },
    iconx: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    textx: {
        fontSize: 16,
        fontFamily: Colors.font,
        color: Colors.black,
        fontWeight: 'bold',
    },
});
