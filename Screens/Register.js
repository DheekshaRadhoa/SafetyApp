import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
export default function Register({navigation}) {
  return (
    <View >
      <Text>Register</Text>
      <Button
        title="Go to emergency contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
      <Button title="Previous" onPress={() => navigation.goBack()} />
    </View>
  );
}