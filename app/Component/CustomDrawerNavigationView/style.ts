import { StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../Utils/fontResize";
import { FONTS, THEME } from "../../Utils/theme";
const styles = StyleSheet.create({
  drawerItem: {
    paddingVertical: hp("1.4%"),
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: wp("4%"),
  },
  profileView: {
    backgroundColor: THEME.TEXT_COLOR,
    padding: wp("1%"),
    width: wp("63%"),
    height: hp("8.5%"),
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: wp("3%"),
    flexDirection: "row",
    paddingRight: wp("3%"),
  },
  profile: {
    height: wp("12%"),
    width: wp("12%"),
    borderRadius: wp("7%"),
    resizeMode: "contain",
  },
  aerrowIcon: {
    height: wp("5.5%"),
    width: wp("5.5%"),
    resizeMode: "contain",
  },
  profileText: {
    fontSize: fontResize(13),
    color: THEME.WHITE_COLOR,
    fontFamily: FONTS.SEMI_BOLD,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  mailText: {
    fontSize: fontResize(11),
    color: THEME.WHITE_COLOR,
    fontFamily: FONTS.REGULAR,
    fontWeight: "400",
    paddingTop: hp("0.5%"),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameContainer: {
    paddingLeft: wp("1"),
    overflow: "hidden",
    maxWidth: "75%",
  },
  productMainContainer: {
    height: hp("5%"),
    width: wp("30%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: THEME.PRIMARY,
    borderWidth: wp("0.04%"),
    borderRadius: wp("8%"),
    backgroundColor: THEME.LIGHT_PINK,
    paddingHorizontal: wp("1.5%"),
    marginVertical: hp("1.2%"),
  },
  iconView: {
    height: wp("7%"),
    width: wp("7%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp("6%"),
    backgroundColor: THEME.PRIMARY,
    marginRight: wp("1.4%"),
  },
  normalText: {
    fontSize: fontResize(14),
    fontWeight: "500",
    fontFamily: FONTS.REGULAR,
    color: THEME.TEXT_COLOR,
  },
  mainView: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginVertical: hp("2%"),
    justifyContent: "space-between",
   
    
  },
  icon: {
    height: wp("6%"),
    width: wp("6%"),
    resizeMode: "contain",
    marginRight: wp("3%"),
  },
  logoutText: {
    fontSize: fontResize("11"),
    fontFamily: FONTS.REGULAR,
    fontWeight: "400",
    marginVertical: hp("2.6%"),
  },
});
export default styles;
