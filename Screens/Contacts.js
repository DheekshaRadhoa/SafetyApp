import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Button, TouchableOpacity,TextInput } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Hotline({navigation}) {
    return (
        <View style={styles.screen}>
            <View>
                <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center'}}>Fill in with your emergency</Text>
            </View>

            <View>
                <Text>Contact 1</Text>

                <View>
                    <Text>Name</Text>
                    <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}/>
                </View>

                <View>
                    <Text>Email</Text>
                    <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}/>
                </View>

                <View>
                    <Text>Phone number</Text>
                    <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}/>
                </View>
            </View>

            <View>
                <Text>Contact 2</Text>

                <View>
                    <Text>Name</Text>
                    <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}/>
                </View>

                <View>
                    <Text>Email</Text>
                    <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}/>
                </View>

                <View style={styles.register_input}>
                    <Text>Phone number</Text>
                    <TextInput style={{height:45, borderWidth:1, borderRadius:5 , width:280 }}/>
                </View>
            </View>

            <View style={styles.smallBtns}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.roundButton, {backgroundColor: 'gray'}]}>
                    <Text style={styles.LocationText}>Go back</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SaveMe')} style={[styles.roundButton, {backgroundColor: 'gray'}]}>
                    <Text style={styles.LocationText}>Next</Text>
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
    LocationText: {
        fontSize: 26,
        color: '#fff',
        alignItems: "center" ,
        textAlign:"center"
    },
    smallBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 40,
        padding: 10,
        width: windowWidth,
    },
    roundButton: {
        width: 125,
        height: 125,
        borderRadius: 50,
        justifyContent: 'center',
    },
});