// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Bruno Marques Cunha</Text>
      <Image source={require('../assets/images/profile.jpg')} style={styles.image} />
      <Button title="Experiência" onPress={() => navigation.navigate('Experience')} />
      <Button title="Formação" onPress={() => navigation.navigate('Education')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
});

export default HomeScreen;
