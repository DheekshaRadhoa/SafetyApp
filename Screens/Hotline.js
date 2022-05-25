import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
export default function Hotline({navigation}) {
  return (
    <View >
      <Text>Hotline</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Register')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}