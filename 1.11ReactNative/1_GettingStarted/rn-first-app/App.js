import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outpuText, setOutpuText] = useState("Open up App.js to start working on your app!")

  return (
    <View style={styles.container}>
      <Text>{outpuText}</Text>
      <Button title="Change Text" onPress={() => setOutpuText("The text changed")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
