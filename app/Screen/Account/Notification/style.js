import { Platform, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../../Utils/fontResize";
import { FONTS, THEME } from "../../../Utils/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
  },

  headerContainer: {
    paddingLeft: wp("8%"),
    backgroundColor:THEME.WHITE_COLOR,
    shadowColor: THEME.GRAY[200],
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,

  },
  //
  notificationView: {
    height: hp("8%"),
    width: wp("90%"),
    backgroundColor: THEME.WHITE_COLOR,
    paddingHorizontal: wp("3%"),
    paddingVertical: wp("3%"),
    flexDirection: "row",
    marginVertical: hp("2%"),
  },
  lefticon: {
    height: wp("5%"),
    width: wp("5%"),
    resizeMode: "contain",
 
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("75%"),
  },
  notificationText: {
    fontSize: fontResize(11),
    fontFamily: FONTS.LIGHT,
    fontWeight: "400",
    lineHeight: fontResize(12),
    paddingTop: wp("1%"),
    color: THEME.GRAY[100],
    maxWidth: wp("70%"),
    marginTop: hp("0.2%"),
  },
  notificationHeaderText: {
    fontSize: fontResize(14),
    fontWeight: "600",
    lineHeight: fontResize(18),
    color: THEME.TEXT_COLOR,
    maxWidth: wp("50%"),
    fontFamily: FONTS.SEMI_BOLD,
  },
  timeText: {
    fontSize: fontResize(11),
    fontFamily: FONTS.LIGHT,
    fontWeight: "400",
    lineHeight: fontResize(12),
    color: THEME.TEXT_COLOR,
  },
  //
  container: {
    // backgroundColor: "#f4f4f4",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    backgroundColor: "#FFF",
    borderRadius: wp("2%"),
    marginVertical: hp("0.9%"),
    shadowColor: THEME.GRAY[200],
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: "row",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1.2%"),
    width: wp("90%"),
    alignSelf: "center",
  },
  rowFrontVisible: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: hp("10%"),
  },
  rowBack: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: hp("10%"),
    marginVertical: hp("0.9%"),
    borderRadius: wp("2%"),
    width: wp("90%"),
    alignSelf: "flex-start",
  },
  backRightBtn: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 150,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: "#1f65ff",
    right: 5,
  },
  backRightBtnRight: {
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: hp("7.6%"),
  },
  trash: {
    height: hp("7.6%"),
    width: wp("9%"),
    marginRight: wp("2%"),

  
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#666",
  },
  details: {
    fontSize: 12,
    color: "#999",
  },
  dltBox:{
    paddingHorizontal:wp("9%"),
    paddingVertical:hp("2%"),
    borderRadius:wp("2%"),
    backgroundColor:THEME.BLUE[100],
    alignItems:'center',
    justifyContent:'center'
  }
});

export default styles;

//
