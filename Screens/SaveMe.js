import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
export default function SaveMe({navigation}) {
  return (
    <View>
    <TouchableOpacity
        onPress={() => alert('Successful')}
        style={{ backgroundColor: 'red',height:250 , width:250, marginTop:250, borderRadius:30,justifyContent:"space-evenly" }}>
        <Text style={{ fontSize: 26, color: '#fff',alignItems: "center" , textAlign:"center"}}>Save me!</Text>
      </TouchableOpacity>
    
      <Text></Text>
      <Button
        title="Go to Call me"
        onPress={() => navigation.navigate('Call')}
      />
      <Button title="Previous" onPress={() => navigation.goBack()} />

      <View>
    
      </View>
    </View>
    
  
  );
}