import { StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../Utils/fontResize";
import { FONTS, THEME } from "../../Utils/theme";
const styles = StyleSheet.create({
container:{
    height:hp('6%'),
    width:wp('40%'),
    borderRadius:wp('3%'),
    borderColor:THEME.GRAY[200],
    borderWidth:wp('0.4%'),
    alignItems:'center',
    justifyContent:'center'
},
mainContainer:{
    marginTop:hp('1%'),

},
uploadText:{
    fontSize:fontResize(12),
    color:THEME.GRAY[100],
    marginBottom:hp('0.5%'),
    fontWeight:'600'
},
documentNameStyle:{
    fontSize:fontResize(12),
    color:THEME.BLACK,
    marginBottom:hp('0.5%'),
    fontWeight:'600',
    alignItems:'center'
}

})
export default styles