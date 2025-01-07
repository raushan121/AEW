import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../Utils/fontResize";
import { FONTS, THEME } from "../../Utils/theme";

const styles = StyleSheet.create({
  container: {
    height: hp("8%"),
    backgroundColor: THEME.WHITE_COLOR,
    flexDirection:'row',
    alignItems:'center',
    marginVertical:hp("0.2%"),
    justifyContent:'space-between',
    shadowColor: THEME.GRAY[200],
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity:0.4,
    shadowRadius: 8,
    elevation: 5,
    borderRadius:wp("2%"),
    paddingHorizontal:wp("5%"),
    marginHorizontal:wp("4.4%"),
  },
  leftIcon:{
    height:wp("6%"),
    width:wp("6%"),
    resizeMode:'contain'
  },
  rightIcon:{
    height:wp("6%"),
    width:wp("6%"),
    resizeMode:'contain'
  },
  row:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  text:{
    fontSize:fontResize(16),
    fontWeight:'700',
    fontFamily:FONTS.SEMI_BOLD,
    paddingLeft:wp("4%"),
    color:THEME.TEXT_COLOR
  },
  loteeIcon:{
    height:wp("6%"),
    width: wp("6%"),
    resizeMode:'contain'
  }
});

export default styles;
