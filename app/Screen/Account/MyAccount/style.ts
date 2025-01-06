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
    height: wp("5%"),
    width: wp("5%"),

    // tintColor: THEME.WHITE_COLOR,
  },
  profileNameText: {
    fontSize: fontResize(17),
    fontWeight: "700",
    fontFamily: FONTS.BOLD,
    color: THEME.TEXT_COLOR,
    alignSelf: "center",
    textTransform: "capitalize",
  },
  editProfileIconContainer: {
    position: "absolute",
    bottom: wp("3%"),
    right: wp("0%"),
    backgroundColor: THEME.WHITE_COLOR,
    height: wp("6%"),
    width: wp("6%"),
    borderRadius: wp("4%"),
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
    height: wp("3%"),
    width: wp("3%"),
    borderRadius: wp("5%"),
    resizeMode: "contain",
  },
  boxContainer: {
    borderRadius: 0,
    shadowColor: "#fff",
    marginHorizontal: 0,
    backgroundColor: "",
  },
  bottomContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: wp("10%"),
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
  line: {
    width: "90%",
    alignSelf: "center",
    height: 2,
    backgroundColor: "#EEEEEEEE",
  },
  //
  profileContainer: {
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("2%"),
    backgroundColor: THEME.BLACK.T1,
    borderRadius: wp("3%"),
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  percentageText: {
    color: THEME.WHITE_COLOR,
    fontSize: fontResize(14),
    fontWeight: "800",
  },
  progressBar: {
    width: wp("72%"),
    marginRight: wp("3%"),
    marginTop: wp("2%"),
  },
  editIcon: {
    height: wp("5%"),
    width: wp("5%"),
    resizeMode: "contain",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: wp("1%"),
  },
  row: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  whitSmallText: {
    fontSize: fontResize(12),
    color: THEME.BLUE_STROKE,
    fontWeight: "500",
    marginLeft: wp("2%"),
  },
  whitSmallText2: {
    fontSize: fontResize(12),
    color: THEME.WHITE[100],
    fontWeight: "700",
    marginVertical: wp("1%"),
  },
  icon: {
    height: wp("3.6%"),
    width: wp("3.6%"),
    resizeMode: "contain",
  },
  ProfileIconContainer: {
    height: wp("11%"),
    width: wp("11%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.PRIMARY,
    borderRadius: wp("10%"),
  },
  captionText: {
    fontSize: fontResize(16),
    color: THEME.WHITE_COLOR,
    fontWeight: "800",
    fontFamily: FONTS.MEDIUM,
    textTransform: "uppercase",
  },
});
export default styles;
