import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '@/assets/fonts/color';
import NavTime from '@/components/navTime';

export default function Ex3() {
    const [fontsLoaded] = useFonts({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    // Initialiser les boutons dans la vue "btk"
    const [btkButtons, setBtkButtons] = useState([
        { id: 1, label: 'Test 1' },
        { id: 2, label: 'Test 999ZZZZZZZZ' },
        { id: 3, label: 'Test 777' },
        { id: 4, label: 'massa' },
    ]);

    // Boutons déplacés dans la vue "reponse"
    const [reponseButtons, setReponseButtons] = useState([]);

    // Gérer le déplacement d'un bouton de "btk" vers "reponse"
    const moveButtonToReponse = (id) => {
        const button = btkButtons.find((btn) => btn.id === id);
        if (button) {
            setBtkButtons(btkButtons.filter((btn) => btn.id !== id)); // Retirer de "btk"
            setReponseButtons([ ...reponseButtons, button ]); // Ajouter à "reponse"
        }
    };

    return (
      <>
        <NavTime />
        <ScrollView style={styles.contain}>
          <View>
            <Text style={styles.text1}>
                Écoutez et sélectionnez la bonne réponse
            </Text>
          </View>

          <View style={styles.prog}>
            <View style={styles.flex}>
                <View style={styles.grip}>
                    <Image
                        source={require('@/assets/images/vide.png')}
                        style={styles.img}
                    />
                </View>
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
                        <Text>Contenu audible ici</Text>
                    </View>
                </View>
            </View>

            {/* Boutons dans la vue reponse */}
            <View style={styles.btk} id="reponse">
              {reponseButtons.map((button) => (
                <TouchableOpacity
                  key={button.id}
                  style={[styles.btx, styles.selectedBox]}
                >
                  <Text>{button.label}</Text>
                </TouchableOpacity>
              ))}
              
            </View>

            {/* Boutons dans la vue btk */}
            <View style={styles.btk}>
              {btkButtons.map((button) => (
                <TouchableOpacity
                  key={button.id}
                  style={styles.btx}
                  onPress={() => moveButtonToReponse(button.id)}
                >
                  <Text>{button.label}</Text>
                </TouchableOpacity>
              ))}

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
    alignItems:'center',
    height:150,
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
      { translateX:10}, // Translation de 100 pixels sur l’axe X
      { translateY: 8 }, // Translation de 100 pixels sur l’axe X
    ],
  },
  img: {
    width:'100%',
    height:'100%',
  },
  grip: {
    width:100,
    height:100,
    borderRadius:Colors.radius2,
    overflow:'hidden',
  },
  caf: {
    width:20,
    height:20,
  },
  msg: {
    width:'70%',
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
    backgroundColor:Colors.white,
    borderWidth:3,
    borderColor:Colors.gris,
    borderRadius:Colors.radius2,
    padding:Colors.padding,
    height:150
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
    backgroundColor: Colors.vert, // Couleur lorsque sélectionné
    color: 'red', // Couleur lorsque sélectionné
  },
});
