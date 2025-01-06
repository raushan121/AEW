import { Platform, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../../Utils/fontResize";
import { FONTS, THEME } from "../../../Utils/theme";

const styles = StyleSheet.create({

  subContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  logoIcon:{
    height:hp("10%"),
    width:wp("70%"),
    resizeMode:'contain'
  },
  icon:{
    height:hp("3%"),
    width:wp("6%"),
    resizeMode:'contain'
  },
  nameText:{
    fontSize:fontResize(12),
    fontWeight:'500',
    paddingVertical:hp("1%"),
    color:THEME.GRAY[100],
    paddingLeft:wp("2%")
  },
  orText:{
    fontSize:fontResize(13),
    fontWeight:'700',
    paddingTop:hp("3%"),
    color:THEME.TEXT_COLOR,
    textAlign:'center'
  },
  inputContainer:{
    flex:1,
    paddingTop:hp("1%")
  },
  inputView:{
    paddingBottom:hp("0.5%"),
  },
  termsContainer:{
    marginTop:hp("1.5%"),
    marginBottom:hp("0.4%"),
    marginLeft:wp("3%")
  },
  conditionText:{
    fontSize:fontResize(12),
    fontWeight:'700',
    color:THEME.PRIMARY,
  },
  termsText:{
    fontSize:fontResize(11),
    fontWeight:'700',
    color:THEME.TEXT_COLOR,
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
