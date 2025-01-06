// import { StyleSheet } from "react-native";
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from "react-native-responsive-screen";
// import { fontResize } from "../../../Utils/fontResize";
// import { FONTS, THEME } from "../../../Utils/theme";

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: hp("100%"),
//     width: wp("100%"),
//   },
//   topContainer: {
//     height: hp("20%"),
//     width: wp("100%"),
//     backgroundColor: THEME.TEXT_COLOR,
//     borderBottomLeftRadius: wp("8%"),
//     borderBottomRightRadius: wp("8%"),
//     paddingTop: hp("4.5%"),
//     paddingHorizontal: wp("7%"),
//   },
//   subContainer: {
//     flex: 1,
//     paddingHorizontal: wp("5%"),
//   },
//   headerView: {
//     marginVertical: hp("0.5%"),
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   headerText: {
//     marginVertical: hp("2%"),
//     fontSize: fontResize(16),
//     fontWeight: "700",
//     fontFamily: FONTS.SEMI_BOLD,
//   },
//   profileIcon: {
//     marginTop: hp("3%"),
//     marginBottom: hp("2%"),
//     height: wp("20%"),
//     width: wp("20%"),
//     borderRadius: wp("20%"),
//   },
//   textInputMargin: {
//     marginBottom: hp("1.7%"),
//   },
//   bottomContainer: {
//     marginVertical: hp("2.5%"),
//   },
//   errormsg: {
//     marginTop: -wp("4.5%"),
//     marginBottom: hp("1%"),
//   },
// });
// export default styles;

import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { FONTS, THEME } from "../../../Utils/theme";
import { fontResize } from "../../../Utils/fontResize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("100%"),
    width: wp("100%"),
  },
  rightIcon: {
    height: wp("6%"),
    width: wp("6%"),
    resizeMode: "contain",
  },
  text: {
    fontSize: fontResize(16),
    fontFamily: FONTS.SEMI_BOLD,
    paddingLeft: wp("4%"),
    color: THEME.TEXT_COLOR,
  },
  descText: {
    fontSize: fontResize(12),
    fontFamily: FONTS.REGULAR,
    paddingLeft: wp("4%"),
    color: THEME.GRAY[100],
    paddingTop: 5,
  },
  helpCentercontainer: {
    backgroundColor: "rgba(52, 52, 52, 0.3)",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  helpCentreText: {
    fontSize: fontResize(16),
    fontFamily: FONTS.BOLD,
    color: THEME.WHITE_COLOR,
  },
  supportBg2: {
    height: hp("26%"),
    width: wp("100%"),
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  telluscontainer: {
    width: "90%",
    backgroundColor: THEME.WHITE_COLOR,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -hp("12%"),

    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow position (horizontal, vertical)
    shadowOpacity: 0.1, // Shadow transparency
    shadowRadius: 8, // Shadow spread
  },
  tellustitleText: {
    fontSize: fontResize(16),
    fontFamily: FONTS.BOLD,
    color: THEME.TEXT_COLOR,
  },
  tellusdescText: {
    fontSize: fontResize(12),
    fontFamily: FONTS.MEDIUM,
    color: THEME.GRAY[100],
    textAlign: "center",
    marginTop: 10,
    width: "95%",
  },

  supportimageContainer: {
    justifyContent: "center",
    alignItems: "center",
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
  smallIcon: {
    height: wp("5"),
    width: wp("5%"),
  },
});
export default styles;
