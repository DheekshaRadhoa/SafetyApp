import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from './Screens/Home';
import Register from './Screens/Register';
import Contacts from './Screens/Contacts';
import SaveMe from './Screens/SaveMe';
import Call from './Screens/Call';
import Alarm from './Screens/Alarm';
import Location from './Screens/Location';
import Hotline from './Screens/Hotline';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="SaveMe" component={SaveMe} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="Alarm" component={Alarm} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Hotline" component={Hotline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;