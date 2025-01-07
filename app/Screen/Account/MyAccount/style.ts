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
  topHeaderText: {
    fontSize: fontResize(20),
    color: THEME.WHITE_COLOR,
    fontWeight: "700",
    fontFamily: FONTS.MEDIUM,
    marginBottom: hp("3%"),
  },
  profileIcon: {
    marginTop: hp("3%"),
    marginBottom: hp("2%"),
    height: wp("30%"),
    width: wp("30%"),
    borderRadius: wp("20%"),
  },
  profileNameText: {
    fontSize: fontResize(17),
    fontWeight: "700",
    fontFamily: FONTS.BOLD,
    color: THEME.TEXT_COLOR,
    alignSelf: "center",
  },
  editProfileIconContainer: {
    position: "absolute",
    bottom: wp("1%"),
    right: -wp("1%"),
    backgroundColor: THEME.WHITE_COLOR,
    height: wp("11%"),
    width: wp("11%"),
    borderRadius: wp("7%"),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: THEME.GRAY[200],
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 5,
  },
  editProfileIcon: {
    height: wp("6%"),
    width: wp("6%"),
    borderRadius: wp("5%"),
    resizeMode: "contain",
  },
  boxContainer: {
    marginHorizontal: 0,
    marginVertical: hp("1%"),
    backgroundColor: "#F7FFFF",
  },
  bottomContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: wp("10%"),
    marginTop: hp("5%"),
  },
  travoLogo: {
    height: hp("6%"),
    width: wp("18%"),
    resizeMode: "contain",
  },
  verticalLine: {
    width: wp("0.41%"),
    height: wp("4%"),
    backgroundColor: THEME.GRAY[100],
  },
  versionText: {
    alignSelf: "center",
    fontSize: fontResize(12),
    fontWeight: "600",
    fontFamily: FONTS.MEDIUM,
    marginBottom: hp("1%"),
    color: THEME.GRAY[100],
  },
  gallerySelectionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  galleryBox: {
    width: wp("13%"),
    height: wp("13%"),
    borderRadius: wp("10%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
    marginBottom: hp("1%"),
  },
  gallerySelectionView: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp("10%"),
    marginTop: hp("2%"),
  },
});
export default styles;
