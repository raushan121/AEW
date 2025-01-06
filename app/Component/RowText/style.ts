import {StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fontResize} from '../../Utils/fontResize';
import {FONTS, THEME} from '../../Utils/theme';

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // marginVertical:hp("0.5%"),
    paddingHorizontal:wp("2%"),
    //  paddingVertical:hp("0.2%")
},
icon:{
    height:wp("6%"),
    width:wp("6%"),
    resizeMode:'contain',
},
Text:{
    fontSize:fontResize(12),
    fontWeight:'600',
    fontFamily:FONTS.MEDIUM,
    color:THEME.GRAY[100]
},
row:{
    flexDirection:'row',
    alignItems:'center'
}
})

export default styles