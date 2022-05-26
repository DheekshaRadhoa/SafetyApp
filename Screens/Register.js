import React from 'react';
import { StyleSheet, Text, View,Button, TextInput , TouchableOpacity } from 'react-native';
import styles from '../styles/Styles'
export default function Register({navigation}) {
  return (
    <View >
      <View style={styles.register_container}>
      <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center' , marginBottom:30}}>Register</Text>
        <View style={styles.register_input}> 
          <Text>Firstname</Text> 
          <TextInput
            style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}
          />
        </View>
        <View style={styles.register_input}>
          <Text>Lastname</Text> 
          <TextInput
          style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}
          />

        </View>
        <View style={styles.register_input}>
          <Text>Email</Text> 
          <TextInput
          style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}
          />
        </View>
        <View style={styles.register_input}>
          <Text>Phone number</Text> 
          <TextInput
          style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}
          />
        </View>
        <TouchableOpacity
        style={{height:45 , backgroundColor:'#0055ff' , width:100, alignSelf:'center'}}>
        <Text style={{textAlign:'center' , color:'white' , fontSize:18 ,paddingTop:10}}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Go to emergency contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
      <Button title="Previous" onPress={() => navigation.goBack()} />
    </View>
  );
}