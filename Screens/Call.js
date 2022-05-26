import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import bullet from '@jsamr/counter-style/presets/disc';
import MarkedList from '@jsamr/react-native-li';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Call({navigation}) {
  return (
    <View View style={styles.screen}>
        <View>
            <MarkedList counterRenderer={bullet}>
                <Text>Send a "call me" message to contacts</Text>
            </MarkedList>
        </View>

        <View>
            <TouchableOpacity onPress={() => alert('Successful')} style={styles.CallmeBtn}>
                <Text style={styles.CallmeText}>Call me</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.smallBtns}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.roundButton, {backgroundColor: 'gray'}]}>
                <Text style={styles.CallmeText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Alarm')} style={[styles.roundButton, {backgroundColor: '#037cf6'}]}>
                <Text style={styles.CallmeText}>Go to Alarm</Text>
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
  CallmeBtn: {
      alignSelf: "center",
      backgroundColor: '#F67D03',
      height:250 ,
      width:250,
      borderRadius:40,
      justifyContent: "center",
  },
  CallmeText: {
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
      width: windowWidth,
  },
  roundButton: {
      width: 125,
      height: 125,
      borderRadius: 50,
      justifyContent: 'center',
  },
  Text:{
    fontSize: 22,
    textAlign:'center',
    width:250
  },
});