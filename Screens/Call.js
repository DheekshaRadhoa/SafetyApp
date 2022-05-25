import React from 'react';
import { StyleSheet, Text, View ,Button, TouchableOpacity } from 'react-native';
export default function Call({navigation}) {
  return (
    <View >
    <TouchableOpacity
        onPress={() => alert('Panic message sent')}
        style={{ backgroundColor: 'orange' ,height:250 , width:250,marginTop:250, borderRadius:30 , justifyContent:"space-evenly"}}>
        <Text style={{ fontSize: 26, color: '#fff',textAlign:"center" }}>Call me</Text>
      </TouchableOpacity>
      
    
      <Button
        title="Go to Alarm"
        onPress={() => navigation.navigate('Alarm')}
      />
      <Button title="Previous" onPress={() => navigation.goBack()} />

      <View>
    
      </View>
    </View>
  );
}