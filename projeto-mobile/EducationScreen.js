// screens/EducationScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EducationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação</Text>
      <Text style={styles.education}>Faculdade Senac PE</Text>
      <Text>Análise e Desenvolvimento de Sistemas</Text>
      <Text>Até Jan/2025</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  education: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default EducationScreen;
