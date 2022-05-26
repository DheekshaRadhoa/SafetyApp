import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Location({navigation}) {
  return (
    <View View style={styles.screen}>
        <View>
            <Text>
              Some Text
            </Text>
        </View>
​
        <View>
            <TouchableOpacity onPress={() => alert('Successful')} style={styles.LocationBtn}>
                <Text style={styles.LocationText}>Ping location</Text>
            </TouchableOpacity>
        </View>
​
        <View style={styles.smallBtns}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.roundButton, {backgroundColor: 'gray'}]}>
                <Text style={styles.LocationText}>Back</Text>
            </TouchableOpacity>
​
            <TouchableOpacity onPress={() => navigation.navigate('Hotline')} style={[styles.roundButton, {backgroundColor: '#FFA07A'}]}>
                <Text style={styles.LocationText}>Go to Hotline</Text>
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
  LocationBtn: {
      alignSelf: "center",
      backgroundColor: '#77D44D',
      height:250 ,
      width:250,
      borderRadius:40,
      justifyContent: "center",
  },
  LocationText: {
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