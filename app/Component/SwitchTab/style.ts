import {StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fontResize} from '../../Utils/fontResize';
import {FONTS, THEME} from '../../Utils/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('6%'),
    width: wp('88%'),
    overflow: 'hidden',
    // borderWidth:0.2,
    borderRadius: wp('4%'),
    backgroundColor: THEME.TEXT_COLOR,
  },
  loginView: {
    height: '100%',
    width: '50%',
    backgroundColor: THEME.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: THEME.PRIMARY,
    borderRadius: wp('4%'),
  },
  signupView: {
    height: '100%',
    width: '50%',
    backgroundColor: THEME.TEXT_COLOR,
    borderWidth: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: wp('4%'),
    borderTopEndRadius: wp('4%'),
    borderTopLeftRadius:wp('4%'),
    borderBottomLeftRadius:wp("4%"),
  },
  loginText:{
    fontSize:fontResize(16),
    fontWeight:'600',
    fontFamily:FONTS.REGULAR,
    color:THEME.WHITE_COLOR
  }
});
export default styles;
