import { Platform, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fontResize } from '../../../Utils/fontResize';
import { FONTS, THEME } from '../../../Utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  subContainer: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    paddingTop: Platform.OS == 'ios' ? hp('2%') : 0,
  },
  enterOtpText: {
    fontSize: fontResize(30),
    fontWeight: '600',
    fontFamily: FONTS.SEMI_BOLD,
    color: THEME.TEXT_COLOR
  },
  codeToVerifyText: {
    marginTop: hp('2%'),
    fontSize: fontResize(16),
    fontWeight: '600',
    fontFamily: FONTS.REGULAR,
    color: THEME.GRAY[100],
    paddingVertical: wp("1%"),
  },
  otpContainer: {
    marginVertical: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  resendText: {
    fontSize: fontResize(15),
    paddingHorizontal: wp('2%'),
    fontWeight: '500',
    letterSpacing:0.5,
    color:THEME.PRIMARY,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  dontRecievedOtpText: {
    fontSize: fontResize(14),
    fontFamily: FONTS.REGULAR,
    letterSpacing:0.6,
    fontWeight: '500',
    color: THEME.GRAY[100],
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('3%'),
    justifyContent: 'center',
  },
  dontHaveAccountText: {
    fontSize: fontResize(16),
    fontWeight: '600',
    color: THEME.TEXT_COLOR,
  },
  SigninText: {
    fontSize: fontResize(18),
    fontWeight: '700',
    color: THEME.PRIMARY,
    fontFamily: FONTS.REGULAR,
  },
  buttonView: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'green'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2%'),
    width: '57%'
  },
  row2:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resendTextt: {
    fontSize: fontResize(14),
    fontWeight: '500',
    fontFamily: FONTS.REGULAR,
    color: THEME.PRIMARY,
    textDecorationLine: 'underline',
    textAlign:'center'
  },
  secondsText: {
    fontSize: fontResize(14),
    fontWeight: '700',
    fontFamily: FONTS.SEMI_BOLD_ITALIC,
    color: THEME.PRIMARY,
    marginLeft:wp("2%")
  },
  bottomContainer: {
    marginVertical: hp('4.5%'),
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
    // paddingHorizontal: wp('7%'),
  },
  mainView: {
    alignItems: 'center',
    marginTop:hp("5%")
  },
  textContainer: {
    marginVertical: hp('3%'),
  },
  otpIcon: {
    height: hp("20%"),
    width: wp("60%"),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: hp("7%")
  }
});
export default styles;
