import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';
export default function Contacts({navigation}) {
  return (
    <View >
      <Text>Contacts</Text>
      <Button
        title="Go to Save me"
        onPress={() => navigation.navigate('SaveMe')}
      />
      <Button title="Previous" onPress={() => navigation.goBack()} />
    </View>
  );
}