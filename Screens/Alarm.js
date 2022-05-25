
import React from 'react';
import { StyleSheet, Text, View , Button , TouchableOpacity} from 'react-native';
import styles from '../styles/Styles';
export default function Alarm({navigation}) {
  return (
    <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => alert('Alert sent')}
            style={{ backgroundColor: 'blue',height:250 , width:250, marginTop:250,borderRadius:30, justifyContent:"space-evenly" , }}>
            <Text style={{ fontSize: 26, color: '#fff' ,textAlign:"center" }}>Raise an alarm</Text>
          </TouchableOpacity>
        </View>
    
    <View style={styles.btn_navigation}>
      

      <TouchableOpacity 
        title="Previous" 
        onPress={() => navigation.goBack()}
        style={styles.navigation_btn}
      >
      <Text style={{ fontSize: 16, color: '#fff' ,textAlign:"center" }}>Previous</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Location')}
        style={styles.navigation_btn}
      >
      <Text style={{ fontSize: 16, color: '#fff' ,textAlign:"center" }}>Go to location</Text>
      </TouchableOpacity>
    </View>

      
    </View>

  );
}