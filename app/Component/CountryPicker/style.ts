import { Platform, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../Utils/fontResize";
import { FONTS, THEME } from "../../Utils/theme";

const styles = StyleSheet.create({
  input: {
    paddingLeft: wp("18%"),
    height: hp("7.2%"),
    backgroundColor: THEME.WHITE_COLOR,
    fontSize: fontResize(15),
    color: THEME.TEXT_COLOR,
    fontWeight: "500",
    fontFamily: FONTS.REGULAR,
  },
  border: {
    borderRadius: wp("4%"),
    borderWidth: wp("0.4%"),
    borderColor:THEME.GRAY[200]
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: "#B00020",
    fontFamily: FONTS.LIGHT,
  },
  countryPicker: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: Platform.OS=='android'?hp("3.2%"): hp("3.5%"),
    left: wp("2%"),
    zIndex: 1,
  },
  countryCodeText: {
    alignSelf: "center",
    alignItems: "center",
    fontWeight: "500",
    left: -10,
    color:THEME.TEXT_COLOR
  },
  downIcone: {
    height: wp("2.5%"),
    width: wp("2.5%"),
    resizeMode: "contain",
    left: -13,
  },
  btn: {
    height: hp("7%"),
  },
});
export default styles;
