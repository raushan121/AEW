import { StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../Utils/fontResize";
import { FONTS, THEME } from "../../Utils/theme";

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    height: 18,
    width: 18,
    backgroundColor: THEME.WHITE_COLOR,
    borderWidth: 2,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 9,
    width: 9,
    backgroundColor: THEME.PRIMARY,
  },
  radioButtonText: {
    fontSize: fontResize(14),
    fontWeight:'600',
    color:THEME.GRAY[400],
    marginRight:wp("3%"),
  },
  roundButtonContainer: {
    height: hp("5%"),
    width: wp("77%"),
    marginVertical: hp("1%"),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
    borderWidth: wp("0.2%"),
    borderColor: THEME.GRAY[200],
    shadowColor: THEME.GRAY[100],
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 0.5,
  },
  roundRadioButtonIcon: {
    height: wp("3%"),
    width: wp("3%"),
    borderRadius: wp("7%"),
    backgroundColor: THEME.GREEN,
    // borderWidth: 2,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  radioContainer: {
    height: wp("6%"),
    width: wp("6%"),
    borderRadius: wp("6%"),
    borderWidth: 1.5,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: wp("2%"),
  },
  squareButton: {
    height: wp("6%"),
    width: wp("9%"),
    borderWidth: wp("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    height: wp("5%"),
    width: wp("5%"),
    resizeMode: "contain",
  },
  checkButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: wp("7%"),
    width: wp("7%"),
    borderWidth: wp("0.4%"),
    borderRadius: wp("1%"),
    borderColor: THEME.GRAY[300],
  },
  isIconText: {
    fontSize: fontResize(16),
    fontFamily: FONTS.MEDIUM,
    fontWeight: "600",
    marginLeft: wp("5%"),
    color: THEME.TEXT_COLOR,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -wp("1%"),
    marginLeft: wp("5%"),
    alignContent: "center",
  },
  whatsappText: {
    fontSize: fontResize(16),
    fontWeight: "600",
    fontFamily: FONTS.BOLD,
    color: THEME.GREEN,
  },
  whatsappIcon: {
    height: wp("8%"),
    width: wp("8%"),
    resizeMode: "contain",
    marginTop: wp("1%"),
  },
  horizontalContainer: {
    flexDirection: "row",
    marginVertical: hp("1%"),
    width: wp("40%"),
    paddingVertical: hp("1%"),
    alignItems:'center',
    marginHorizontal:wp('2%')
 
    // marginHorizontal: wp("3.5%"),
  },
});
export default styles;
