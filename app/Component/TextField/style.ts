import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FONTS, THEME } from "../../Utils/theme";
import { fontResize } from "../../Utils/fontResize";

const styles = StyleSheet.create({
  input: {
    paddingLeft: wp("1%"),
    height: hp("7.2%"),
    backgroundColor: THEME.WHITE_COLOR,
    fontSize: fontResize(16),
    color: THEME.TEXT_COLOR,
    fontWeight: "500",
    fontFamily: FONTS.MEDIUM,
  },
  border: {
    borderRadius: wp("4%"),
    borderWidth: wp("0.35%"),
    borderColor: THEME.GRAY[200],
  },
  error: {
    marginLeft: wp("4%"),
    fontSize: fontResize(12),
    color: THEME.RED[200],
    fontFamily: FONTS.REGULAR,
    paddingTop: wp("1%"),
    // position:'absolute',
    // bottom:wp("0.6%")
  },
  iconContainer: {
    position: "absolute",
    right: wp("3%"),
    top: hp("3%"),
  },
  eyeIcon: {
    height: wp("6%"),
    width: wp("6%"),
    resizeMode: "contain",
  },
});
export default styles;
