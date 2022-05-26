import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Register({navigation}) {
  return (
      <View style={styles.screen}>
    
        <View style={styles.register_container}>
          <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center' , marginBottom:30, }}>Register</Text>
          
          <View style={styles.register_input}>
            <Text>Firstname</Text> 
            <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}/>
          </View>

          <View style={styles.register_input}>
            <Text>Lastname</Text> 
            <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }} />
          </View>
          
          <View style={styles.register_input}>
            <Text>Email</Text> 
            <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}/>
          </View>

          <View style={styles.register_input}>
            <Text>Phone number</Text> 
            <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}/>
          </View>
        </View>

         <TouchableOpacity
          style={{height:45 , backgroundColor:'#0055ff' , width:100, alignSelf:'center'}}>
          <Text style={{textAlign:'center' , color:'white' , fontSize:18 ,paddingTop:10}}>Submit</Text>
        </TouchableOpacity>

          <View style={styles.smallBtns}>
            <TouchableOpacity onPress={() => navigation.navigate('Contacts')} style={[styles.roundButton, {backgroundColor: 'gray'}]}>
              <Text style={styles.LocationText}>Go to   contacts</Text>
            </TouchableOpacity>
          </View>
      </View>
);
}

const styles = StyleSheet.create({
  screen: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: windowHeight
  },
  LocationText: {
      fontSize: 26,
      color: '#fff',
      alignItems: "center" ,
      textAlign:"center"
  },
  smallBtns: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginBottom: 40,
      padding: 10,
      width: windowWidth,
  },
  roundButton: {
      width: 125,
      height: 125,
      borderRadius: 50,
      justifyContent: 'center',
  },
    register_container:{
        display:'flex',
        flexDirection:'column',
        marginTop:'10%',
        justifyContent: 'center'
    },

    register_input: {
        display: 'flex',
        flexDirection: 'column',
        height: 100,
    }
});