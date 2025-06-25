import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Props {
  email: string ;
  onLogout: () => void;
}


const LoggedUser = ({ email, onLogout } : Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo {`${email}`}</Text>
      <Button title="Sair" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default LoggedUser;