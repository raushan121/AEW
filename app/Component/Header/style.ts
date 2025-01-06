import { Platform, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../Utils/fontResize";
import { FONTS, THEME } from "../../Utils/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: hp("1%"),
  },
  leftIcon: {
    height: wp("6%"),
    width: wp("6%"),
    resizeMode: "contain",
  },
  rightIconIcon: {
    height: wp("6%"),
    width: wp("6%"),
    resizeMode: "contain",
  },
  headerText: {
    fontSize: fontResize(20),
    fontWeight: "500",
    fontFamily: FONTS.REGULAR,
    textAlign: "center",
    alignSelf: "center",
    marginLeft: wp("4%"),
  },
  headerIcon: {
    width: wp("27%"),
    resizeMode: "contain",
    height: hp("5%"),
    marginLeft: wp("22%"),
  },
  rightIconContainer: {
    position: "absolute",
    right: 0,
  },
  switchContainer: {
    width: wp("40%"),
    height: hp("18%"),
  },
  headerRightContainer: {
    flexDirection: "row",
  },
  homeContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  notificationTextContainer: {
    position: "absolute",
    height: wp("3.7%"),
    width: wp("3.7%"),
    backgroundColor: THEME.WHITE_COLOR,
    borderRadius: wp("5%"),
    top: -wp("0.4%"),
    right: 0,
    borderWidth: wp("0.1"),
    borderColor: THEME.TEXT_COLOR,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  notificationText: {
    color: THEME.TEXT_COLOR,
    fontSize: fontResize(10),
    textAlign: "center",
    fontWeight: "500",
  },
  stickyHeader: {
    backgroundColor: THEME.TEXT_COLOR,
    paddingHorizontal: wp("5%"),
    marginTop: Platform.OS == "ios" ? hp("4%") : 0,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  headerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerTextt: {
    color: THEME.TEXT_COLOR,
    fontSize: fontResize(25),
    fontWeight: "600",
    fontFamily: FONTS.SEMI_BOLD,
    marginLeft: wp("25%"),
  },
});

export default styles;
