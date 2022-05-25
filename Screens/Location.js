import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
export default function Location({navigation}) {
  return (
    <View >
    <TouchableOpacity
        onPress={() => alert('Successful')}
        style={{ backgroundColor: 'green', height:250 , width:250,marginTop:250, borderRadius:30 , justifyContent:"space-evenly"}}>
        <Text style={{ fontSize: 26, color: '#fff' , textAlign:"center"}}>Location</ Text>
      </TouchableOpacity>
    
      <Text></Text>
      <Button
        title="Go to Hotline"
        onPress={() => navigation.navigate('Hotline')}
      />
      <Button title="Previous" onPress={() => navigation.goBack()} />

      <View>
    
      </View>
    </View>
  );
}