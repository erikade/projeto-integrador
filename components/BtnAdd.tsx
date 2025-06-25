
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


interface Props {
  onPress: () => void;
}


const BtnAdd = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#888', // cor cinza parecida com a imagem
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // sombra para Android
    shadowColor: '#000', // sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  plus: {
    fontSize: 36,
    color: '#fff',
    lineHeight: 36,
  },
});


export default BtnAdd;