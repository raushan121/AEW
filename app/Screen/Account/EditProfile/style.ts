import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../../Utils/fontResize";
import { FONTS, THEME } from "../../../Utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("100%"),
    width: wp("100%"),
  },
  topContainer: {
    height: hp("20%"),
    width: wp("100%"),
    backgroundColor: THEME.TEXT_COLOR,
    borderBottomLeftRadius: wp("8%"),
    borderBottomRightRadius: wp("8%"),
    paddingTop: hp("4.5%"),
    paddingHorizontal: wp("7%"),
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: wp("5%"),
  },
  headerView: {
    marginVertical: hp("0.5%"),
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    marginVertical: hp("2%"),
    fontSize: fontResize(16),
    fontWeight: "700",
    fontFamily: FONTS.SEMI_BOLD,
  },
  profileIcon: {
    marginTop: hp("1%"),
    marginBottom: hp("2%"),
    height: wp("20%"),
    width: wp("20%"),
    borderRadius: wp("20%"),
  },
  textInputMargin: {
    marginBottom: hp("1.7%"),
  },
  bottomContainer: {
    marginVertical: hp("2.5%"),
  },
  errormsg: {
    marginTop: -wp("4.5%"),
    marginBottom: hp("1%"),
  },
  titleContainer: {
    flexDirection: "row",
    overflow: "hidden",
    marginTop: hp("1%"),
  },
  normalText: {
    fontSize: fontResize(12),
    fontWeight: "600",
    fontFamily: FONTS.SEMI_BOLD,
    color: THEME.TEXT_COLOR,
    marginBottom: -hp("1%"),
  },
  headerIcon: {
    height: wp("5%"),
    width: wp("5%"),
    resizeMode: "contain",
  },
});
export default styles;
