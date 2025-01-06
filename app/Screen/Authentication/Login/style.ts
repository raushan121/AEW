import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../../Utils/fontResize";
import { FONTS, THEME } from "../../../Utils/theme";


const styles = StyleSheet.create({
  compLogoIconStyle:{
    height:hp("15%"),
    width:wp("80%"),
    alignSelf:'center',
    resizeMode:'contain'
  },
  subContainer:{
    paddingTop:hp("3%"),
    backgroundColor:'#F4FBFF'
  },
  nameText:{
    fontSize:fontResize(12),
    fontWeight:'500',
    paddingVertical:hp("1%"),
    color:THEME.GRAY[100]
  },
  orText:{
    fontSize:fontResize(13),
    fontWeight:'700',
    paddingTop:hp("3%"),
    color:THEME.TEXT_COLOR,
    textAlign:'center'
  },
  mainButton:{
    marginTop:hp("4%"),
    marginBottom:hp("2%")
  },

  bottomContainer:{
    marginTop:hp("1%"),
    alignItems:'center',
    justifyContent:'center'
  },
  googleLogo:{
    marginVertical:hp("2%"),
    height:hp("5%"),
    width:wp("25%"),
    resizeMode:"cover"
  },
  acntText:{
    fontSize:fontResize(16),
    fontWeight:'800',
    paddingTop:hp("2%"),
    color:THEME.GRAY[100],
    textAlign:'center'
  }




});
export default styles;
