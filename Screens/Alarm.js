import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Alarm({navigation}) {
  return (
    <View View style={styles.screen}>
        <View>
            <Text>
              Some Text
            </Text>
        </View>
​
        <View>
            <TouchableOpacity onPress={() => alert('Successful')} style={styles.AlarmBtn}>
                <Text style={styles.AlarmText}>Raise an alarm</Text>
            </TouchableOpacity>
        </View>
​
        <View style={styles.smallBtns}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.roundButton, {backgroundColor: 'gray'}]}>
                <Text style={styles.AlarmText}>Back</Text>
            </TouchableOpacity>
​
            <TouchableOpacity onPress={() => navigation.navigate('Location')} style={[styles.roundButton, {backgroundColor: '#77D44D'}]}>
                <Text style={styles.AlarmText}>Go to ping location</Text>
            </TouchableOpacity>
        </View>
​
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
  AlarmBtn: {
      alignSelf: "center",
      backgroundColor: '#2898F3',
      height:250 ,
      width:250,
      borderRadius:40,
      justifyContent: "center",
  },
  AlarmText: {
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
  }
});