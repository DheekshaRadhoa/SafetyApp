import React, { useState, useEffect } from 'react';
import {Platform, Dimensions, Linking} from 'react-native';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import bullet from '@jsamr/counter-style/presets/disc';
import MarkedList from '@jsamr/react-native-li';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Location1({navigation}) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Device.isDevice) {
                setErrorMsg(
                    'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
                );
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);
    let text = 'Waiting..';
    let location_link = '';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        let lat_dms = decimal_to_dms(location.coords.latitude, 'lat');
        let lon_dms = decimal_to_dms(location.coords.longitude, 'lon');
        location_link = `https://www.google.com/maps/place/${lat_dms}+${lon_dms}/@${location.coords.latitude},${location.coords.longitude},15z`;
    }

    return (
    <View style={styles.screen}>
        <View>
            <MarkedList counterRenderer={bullet}>
                <Text>Ping your location</Text>
                <Text>Send location to contacts</Text>
            </MarkedList>
        </View>

        <View>
            <TouchableOpacity onPress={() => alert('Successful')} style={styles.LocationBtn}>
                <Text style={styles.LocationText}>Ping location</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => Linking.openURL(location_link)} style= {styles.view_loc}>
            <Text style={styles.LocationText}>View Current Location</Text>
        </TouchableOpacity>

        <View style={styles.smallBtns}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.roundButton, {backgroundColor: 'gray'}]}>
                <Text style={styles.LocationText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Hotline')} style={[styles.roundButton, {backgroundColor: '#FFA07A'}]}>
                <Text style={styles.LocationText}>Go to Hotline</Text>
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
  LocationBtn: {
      alignSelf: "center",
      backgroundColor: '#55C133',
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
  },
  Text:{
    fontSize: 22,
    textAlign:'left',
    width:250
  },

    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },

    view_loc: {
      height: 40,
      borderRadius: 10,
      backgroundColor: 'orange',
    }
});

function decimal_to_dms(coord, type){

    console.log(coord);
    let degree = parseInt(coord / 1);
    console.log(degree);
    let minutes = Math.abs(coord % 1) * 60;
    let seconds = Math.abs(minutes % 1) * 60;

    let coord_dms = `${Math.abs(degree)}°${Math.floor(minutes)}'${Math.round(seconds)}"`;

    if (type === 'lat'){
        coord_dms += degree > 0? 'N': 'S';
    }
    else if (type === 'lon') {
        coord_dms += degree > 0? 'E': 'W';
    }
    else{
        return('An error occurred');
    }
    console.log(coord_dms);
    return (coord_dms);
}