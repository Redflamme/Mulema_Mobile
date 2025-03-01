import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '@/assets/fonts/color';
import NavTime from '@/components/navTime';

export default function Ex4() {
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
        <NavTime />
        <ScrollView style={styles.contain}>
          <View>
            <Text style={styles.text1}>
                Sélectionnez la bonne image
            </Text>
          </View>

          <View style={styles.prog}>
            <View style={styles.flex}>
              <View style={styles.msg}>
                <View style={[styles.caf]}>
                  <Image
                    source={require('@/assets/images/audio.png')}
                    style={styles.img}
                  />
                </View>
                <Text>Contenu audible ici</Text>
              </View>
            </View>

            <View style={styles.grid}>
                
                <TouchableOpacity 
                    style={[styles.box, selectedIndex === 0 && styles.selectedBox]}
                    onPress={() => handleSelection(0)}
                >
                    <Image
                        source={require('@/assets/images/vide.png')}
                        style={styles.img}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.box, selectedIndex === 1 && styles.selectedBox]}
                    onPress={() => handleSelection(1)}
                >
                    <Image
                        source={require('@/assets/images/vide.png')}
                        style={styles.img}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.box, selectedIndex === 2 && styles.selectedBox]}
                    onPress={() => handleSelection(2)}
                >
                    <Image
                        source={require('@/assets/images/vide.png')}
                        style={styles.img}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.box, selectedIndex === 3 && styles.selectedBox]}
                    onPress={() => handleSelection(3)}
                >
                    <Image
                        source={require('@/assets/images/vide.png')}
                        style={styles.img}
                    />
                </TouchableOpacity>
                
            </View>

            
          </View>

          {/* Bouton Suivant */}
          <View style={styles.btn}>
            <TouchableOpacity style={[styles.button, styles.inverse]}>
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
  },
  flex: {
    flexDirection:'row',
  },
  fle: {
    width:20,
    height:'100%',
    justifyContent:'center',
  },
  img: {
    width:'100%',
    borderRadius: Colors.radius2,
    height:'100%',
  },
  caf: {
    width:20,
    height:20,
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
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: -4,
    marginBottom: 20,
  },
  box: {
    shadowColor: Colors.gris, // Couleur de l'ombre
    shadowOffset: { width: 0, height: 4 }, // Décalage de l'ombre
    shadowOpacity: 0.3, // Opacité de l'ombre
    shadowRadius: 4.65,
    borderStyle: 'solid',
    borderColor: Colors.gris2,
    borderWidth: 1,
    width: "49%",
    height: 160,
    backgroundColor: Colors.white,
    borderRadius: Colors.radius2,
    overflow:'hidden',
    padding:2,
    marginBottom:10, // Utilisé pour éviter l'erreur avec rem
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
    color: '#fff', // Couleur lorsque sélectionné

  },
  button19: {
    backgroundColor: Colors.logo, // Replace with var(--orange2)
    borderColor: Colors.logo2,
    borderBottomWidth: 4,
  },
  button19Active: {
    borderTopWidth: 4,
    borderBottomWidth: 0,
    color: '#fff', // Couleur lorsque sélectionné

  },
  inverse: {
    outline:'none',
    backgroundColor: Colors.logo2,
    borderColor: Colors.logo, // Replace with var(--gris)
    borderBottomWidth: 4,
    color: '#fff', // Couleur lorsque sélectionné

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
    borderColor: Colors.gris, // Couleur lorsque sélectionné
    borderWidth: 4,
  },
});
