import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Colors from '@/assets/fonts/color';
import NavTime from '@/components/navTime';

export default function Ex2() {
    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    // Gestion de la sélection unique
    const [selectedIndex, setSelectedIndex] = useState(null); // `null` signifie aucun bouton sélectionné

    // Gérer la sélection d'un bouton
    const handleSelection = (index) => {
        setSelectedIndex(index);
    };

    const [progress, setProgress] = useState(50); // Progress value (0 to 100)

    const increaseProgress = () => {
        if (progress < 100) setProgress(progress + 10);
    };

    const decreaseProgress = () => {
        if (progress > 0) setProgress(progress - 10);
    };


    return (
      <>
        {/* Nav Time */}
        <NavTime />

        {/* Containt */}
        <ScrollView style={styles.contain}>
          <View>
            <Text style={styles.text1}>
                soutiens ce que tu entends
            </Text>
          </View>

          <View style={styles.prog}>
            {/* Première ligne */}
            <View style={styles.flex}>
                <View style={styles.fle}>
                    <View style={styles.che}></View>
                </View>
                <View style={styles.msg}>
                    <View style={[styles.caf]}>
                        <Image
                            source={require('@/assets/images/audio.png')}
                            style={styles.img}
                        />
                    </View>
                    <Text>
                        Contenu audible ici
                    </Text>
                </View>
            </View>
            <View style={styles.btk}>
                <TouchableOpacity
                  style={[styles.btx, selectedIndex === 1 && styles.selectedBox]}
                  onPress={() => handleSelection(1)}
                >
                    <Text>
                      bonjour
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btx, selectedIndex === 2 && styles.selectedBox]}
                  onPress={() => handleSelection(2)}
                >
                  <Text>
                    Buy
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.btx, selectedIndex === 3 && styles.selectedBox]}
                  onPress={() => handleSelection(3)}
                >
                  <Text>
                    salut
                  </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.prog}>
            {/* Première ligne */}
            <View style={styles.flex}>
                <View style={styles.fle}>
                    <View style={styles.che}></View>
                </View>
                <View style={styles.msg}>
                    <View style={[styles.caf]}>
                        <Image
                            source={require('@/assets/images/audio.png')}
                            style={styles.img}
                        />
                    </View>
                    <Text>
                        Contenu audible ici
                    </Text>
                </View>
            </View>
            <View style={styles.btk}>
                <TouchableOpacity
                  style={[styles.btx, selectedIndex === 4 && styles.selectedBox]}
                  onPress={() => handleSelection(4)}
                >
                    <Text>
                      bonjour
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btx, selectedIndex === 5 && styles.selectedBox]}
                  onPress={() => handleSelection(5)}
                >
                  <Text>
                    Holla
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.btx, selectedIndex === 6 && styles.selectedBox]}
                  onPress={() => handleSelection(6)}
                >
                  <Text>
                    salut
                  </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.prog}>
            {/* Première ligne */}
            <View style={styles.flex}>
                <View style={styles.fle}>
                    <View style={styles.che}></View>
                </View>
                <View style={styles.msg}>
                    <View style={[styles.caf]}>
                        <Image
                            source={require('@/assets/images/audio.png')}
                            style={styles.img}
                        />
                    </View>
                    <Text>
                        Contenu audible ici
                    </Text>
                </View>
            </View>
            <View style={styles.btk}>
                <TouchableOpacity
                  style={[styles.btx, selectedIndex === 7 && styles.selectedBox]}
                  onPress={() => handleSelection(7)}
                >
                    <Text>
                      bonjour
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btx, selectedIndex === 8 && styles.selectedBox]}
                  onPress={() => handleSelection(8)}
                >
                  <Text>
                    Holla
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.btx, selectedIndex === 9 && styles.selectedBox]}
                  onPress={() => handleSelection(9)}
                >
                  <Text>
                    salut
                  </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* BUTTON */}

          <View style={styles.btn}>
                {/* Inverse Button */}
                <TouchableOpacity
                    style={[styles.button, styles.inverse]}
                >
                    <Text style={[styles.buttonText, styles.inverseText]}>Suivant</Text>
                </TouchableOpacity>
          </View>
        </ScrollView>

        
      </>
    );
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: Colors.white,
    marginTop: 29,
    height: '100%',
  },
  prog: {
    position: 'relative',
    padding:Colors.padding,
    gap:10,
    height:150,
  },
  flex: {
    flexDirection:'row',
  },
  
  img: {
    width:'100%',
    height:'100%',
  },
  caf: {
    width:20,
    height:20,
  },
  fle: {
    width:20,
    height:'100%',
    justifyContent:'center',
  },
  che: {
    width:14,
    height:14,
    backgroundColor:Colors.white,
    alignItems:'center',
    borderTopWidth:3,
    borderLeftWidth:3,
    borderColor:Colors.gris,
    zIndex:8,
    transform:[
        { rotate: '316deg' }, // Rotation de 45 degrés
        { translateX: 19}, // Translation de 100 pixels sur l’axe X
        { translateY: 1 }, // Translation de 100 pixels sur l’axe X
      ],
  },
  msg: {
    width:'80%',
    borderRadius:Colors.radius2,
    height:50,
    zIndex:-1,
    borderWidth:3,
    backgroundColor:Colors.white,
    borderColor:Colors.gris,
    padding:12,
    flexDirection:'row',
    gap:10,
    alignItems:'center',
  },
  btk: {
    flexDirection:'row',
    gap:10,
    flexWrap:'wrap',
  },
  btx: {
    padding:10,
    borderWidth:3,
    backgroundColor:Colors.white,
    borderColor:Colors.gris,
    borderRadius:Colors.radius2,
    fontFamily: 'arial',
    
  },
  text1: {
    fontFamily: Colors.font,
    fontWeight: '700',
    fontSize: 15,
    paddingHorizontal: Colors.padding,
    marginBottom: 30,
  },
  btn: {
    padding:Colors.padding,
    bottom:0,
    width:'100%',
    height:300,
    backgroundColor:Colors.white,
  },

  button: {
    width: '100%',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: 'solid',
    textAlign: 'center',
    marginBottom: 20,
    alignItems: 'center',
  },
  button19: {
    backgroundColor: Colors.logo, // Replace with var(--orange2)
    borderColor: Colors.logo2,
    borderBottomWidth: 4,
  },
  button19Active: {
    borderTopWidth: 4,
    borderBottomWidth: 0,
  },
  inverse: {
    outline:'none',
    backgroundColor: Colors.logo2,
    borderColor: Colors.logo, // Replace with var(--gris)
    borderBottomWidth: 4,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    lineHeight: 20,
    fontFamily: 'sans-serif', // Replace with "din-round" if installed
    color: '#fff', // Default text color
  },
  inverseText: {
    color: '#fff', // Replace with var(--gris)
  },

  selectedBox: {
    backgroundColor: Colors.vert, // Couleur lorsque sélectionné
    color: '#fff', // Couleur lorsque sélectionné
  },
});
