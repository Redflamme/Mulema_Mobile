import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '@/assets/fonts/color.js';

export default function Nav2() {
    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Vous pouvez ajouter un indicateur de chargement si nécessaire
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.message}>
                <View>
                    <Text style={styles.text}>
                        Messages
                    </Text>
                </View>
                <View>
                    <Text style={styles.msg}>
                        Vous vLorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                </View>
                <View>
                    <Text style={[styles.text, styles.fend]}>
                        10:09    
                    </Text>                    
                </View>
            </View>

            <View style={styles.message}>
                <View>
                    <Text style={styles.text}>
                        Messages
                    </Text>
                </View>
                <View>
                    <Text style={styles.msg}>
                        Vous vLorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                </View>
                <View>
                    <Text style={[styles.text, styles.fend]}>
                        10:09    
                    </Text>                    
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll:{
        padding:Colors.padding,
    },
    message:{
        padding:Colors.padding,
        backgroundColor:Colors.white,
        borderRadius:Colors.radius2,
        gap:10,
        marginBottom:10,
    },  
    msg:{
        color:Colors.black,
        fontSize:15,
        opacity:0.5,
    },
    text:{
        color:Colors.black,
        fontSize:13,
        width:'auto'
    },
    fend:{
        textAlign:'right',
    },  
});
