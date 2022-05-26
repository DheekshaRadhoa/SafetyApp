

import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import bullet from '@jsamr/counter-style/presets/disc';
import MarkedList from '@jsamr/react-native-li';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function SaveMe({navigation}) {
  return (
    <View style={styles.screen}>

        <View>
            <MarkedList counterRenderer={bullet}>
                <Text>
                    Send a panic message
                </Text>
                <Text>
                    Your location
                </Text>
                <Text>
                    Emails
                </Text>
                <Text>
                    Pictures
                </Text>
            </MarkedList>
        </View>

        <View>
            <TouchableOpacity onPress={() => alert('Successful')} style={styles.saveMeBtn}>
                <Text style={styles.saveMeText}>Save me!</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.smallBtns}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.roundButton, {backgroundColor: 'gray'}]}>
                <Text style={styles.saveMeText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Call')} style={[styles.roundButton, {backgroundColor: '#F67D03'}]}>
                <Text style={styles.saveMeText}>Go to    Call me</Text>
            </TouchableOpacity>
        </View>
  </View>
);
}

const styles = StyleSheet.create({
  screen:{
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: windowHeight
  },
  saveMeBtn: {
      alignSelf: "center",
      backgroundColor: 'red',
      height:250 ,
      width:250,
      borderRadius:40,
      justifyContent: "center",
  },
  saveMeText: {
      fontSize: 26,
      color: '#fff',
      alignItems: "center" ,
      textAlign:"center"
  },
  smallBtns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
      padding: 10,
      width: windowWidth
  },
  roundButton: {
      width: 125,
      height: 125,
      borderRadius: 50,
      justifyContent: 'center'
  },
  Text:{
    fontSize: 22,
    // textAlign:'center',
  },
});