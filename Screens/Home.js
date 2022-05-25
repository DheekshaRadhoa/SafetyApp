import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import styles from '../styles/Styles'
export default function HomeScreen({navigation}) {
  return (
    <View >
      <Text>Home Screen</Text>
      
      <View style={styles.btncontainer}>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      </View>
      
    </View>
  );
}