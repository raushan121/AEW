import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fontResize } from '../../Utils/fontResize';
import { FONTS, THEME } from '../../Utils/theme';

const styles = StyleSheet.create({
container:{
    height:hp("6.2%"),
    borderWidth:wp(0.3),
    backgroundColor:THEME.PRIMARY,
    alignItems: 'center',
    justifyContent:"center",
    borderColor:THEME.PRIMARY,
    borderRadius:wp("3%"),
    marginTop:hp("2%")
},
btnText:{
    fontSize:fontResize(17),
    fontWeight:'600',
    color:THEME.WHITE_COLOR,
    fontFamily:FONTS.BOLD,
    textAlign:'center'
}
})
export default styles