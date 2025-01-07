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
    marginVertical:hp("2%"),
    fontSize: fontResize(16),
    fontWeight: "700",
    fontFamily: FONTS.SEMI_BOLD,
  },
  profileIcon: {
    marginTop: hp("3%"),
    marginBottom: hp("2%"),
    height: wp("30%"),
    width: wp("30%"),
    borderRadius: wp("20%"),
  },
})
export default styles