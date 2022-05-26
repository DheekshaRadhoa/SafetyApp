import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
  btncontainer: {
    bottom: 0,

  },
  navigation_btn:{
    width:100,
    height:30,
    borderWidth:1,
    backgroundColor:'blue'
  },
  btn_navigation:{
    display:"flex",
    flexDirection:"row",
    bottom:20,
    position: 'absolute',
    justifyContent: 'space-between',
  },

  register_container:{
    display:'flex',
    flexDirection:'column',
    marginTop:'10%',
   },
   register_input:{
     display:'flex',
     flexDirection:'column',
     height:90,
     alignSelf: 'center',

   }
})

export default styles;