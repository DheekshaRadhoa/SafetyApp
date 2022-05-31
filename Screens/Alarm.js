import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import bullet from '@jsamr/counter-style/presets/disc';
import MarkedList from '@jsamr/react-native-li';
import { Audio } from 'expo-av';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Alarm({navigation}) {
    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sound1.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync(); }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); }
            : undefined;
    }, [sound]);

    return (
        <View View style={styles.screen}>
            <View>
                <MarkedList counterRenderer={bullet}>
                    <Text>Make a loud noise to alert people around</Text>
                </MarkedList>
            </View>

            <View>
                <TouchableOpacity onPress={() => playSound()} style={styles.AlarmBtn}>
                    <Text style={styles.AlarmText}>Raise an alarm</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.smallBtns}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.roundButton, {backgroundColor: 'gray'}]}>
                    <Text style={styles.AlarmText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Location')} style={[styles.roundButton, {backgroundColor: '#55C133'}]}>
                    <Text style={styles.AlarmText}>Go to   ping location</Text>
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
    AlarmBtn: {
        alignSelf: "center",
        backgroundColor: '#037cf6',
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
    },
    Text:{
        fontSize: 22,
        textAlign:'left',
        width:250
    },
});