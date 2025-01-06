import { Platform, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../Utils/fontResize";
import { FONTS, THEME } from "../../Utils/theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  topHeaderText: {
    fontSize: fontResize(20),
    color: THEME.WHITE_COLOR,
    fontWeight: "700",
    fontFamily: FONTS.MEDIUM,
    marginBottom: hp("3%"),
  },
  blogsImage: {
    height: hp("23%"),
    width: wp("100%"),
    marginVertical: hp("1%"),
  },
  mainView: {
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("1%"),
  },
  categorytext: {
    fontSize: fontResize(12),
    fontFamily: FONTS.MEDIUM_ITALIC,
    color: THEME.PRIMARY,
    fontWeight: "600",
  },
  headerText: {
    fontSize: fontResize(15),
    fontFamily: FONTS.MEDIUM,
    color: THEME.TEXT_COLOR,
    fontWeight: "600",
    paddingVertical: hp("1%"),
  },
  eyeIcon: {
    height: wp("4%"),
    width: wp("4%"),
    resizeMode: "contain",
  },
  viewText: {
    fontSize: fontResize(11),
    fontFamily: FONTS.MEDIUM_ITALIC,
    color: THEME.GRAY[100],
    fontWeight: "600",
    marginLeft: wp("2%"),
  },
  descriptionText: {
    fontSize: fontResize(12),
    fontFamily: FONTS.REGULAR,
    color: THEME.GRAY[100],
    fontWeight: "500",
    paddingTop: hp("2%"),
  },
  fontSizeButton: {
    padding: wp("3%"),
    borderRadius: wp("5%"),
    marginRight: wp("1%"),

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.LIGHT_PINK,
  },
  fontSizeButtonText: {
    color: THEME.TEXT_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },
  fontBtnSizeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: wp("4%"),
  },
  header:{
    fontSize:fontResize(16),
    fontWeight:'700',
    fontFamily:FONTS.BOLD,
    color:THEME.TEXT_COLOR ,
    marginLeft:wp("25%"),
  
}
});
export default styles;
