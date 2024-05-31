// screens/ExperienceScreen.js
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ExperienceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência</Text>
      <Text style={styles.experience}>Rec'N'Play</Text>
      <Text>Assistente de Produção</Text>
      <Text>Oct/2023 até Oct/2023</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.instagram.com/brunomarquescunha/')}>Instagram</Text>
      <Text> - Assistência de produção durante todo evento do REC'N'PLAY 2023;</Text>
      <Text> - Gerenciamento do evento;</Text>
      <Text> - Gerenciamento de público;</Text>

      <Text style={styles.experience}>A3Data</Text>
      <Text>Residente</Text>
      <Text>Aug/2023 até Dec/2023</Text>
      <Text>Residência do Porto Digital - RiseUp 2023.2:</Text>
      <Text> - Realizava o processo de Extração, Transformação e Carga (ETL);</Text>
      <Text> - Apresentava dashboards com base nos dados obtidos;</Text>
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
  experience: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ExperienceScreen;
