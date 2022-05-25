import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
  btncontainer: {
    bottom: 0,
    backgroundColor : 'red'

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
  }
})

export default styles;