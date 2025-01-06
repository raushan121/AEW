import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
icon:{
  height:hp("80%"),
  width:wp("80%"),
  resizeMode:'contain',

},
main:{
  flex:1,
  alignSelf:'center',
  justifyContent:'center',
  alignItems:'center'
}

})

export default styles