import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  const ageAsNum: number = !isNaN(Number(age)) === true ? Number(age) : 0
  const lowLimit: number = ageAsNum != 0 ? (220-ageAsNum) * 0.65 : 0
  const upLimit: number = ageAsNum != 0 ? (220-ageAsNum) * 0.85 : 0

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput 
        style={styles.input}
        placeholder="00"
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}>
      </TextInput>
      <Text>Lower limit: {lowLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upLimit.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
  titleText: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 70,
    margin: 12,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
});
