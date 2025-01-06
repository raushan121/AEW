import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { FC } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fontResize } from "../../Utils/fontResize";
import { THEME, FONTS } from "../../Utils/theme";
import { travomint_logo } from "../../assets";

interface HeaderProps {
  headerContainer?: any;
  isLeftIcon?: boolean;
  onPressLeftIcon?: any;
  leftIcon?:any;
  leftIconStyle?: any;
  headerTextStyle?: any;
  headerText?: string;
  onPressRightIcon?: any;
  rightIconStyle?: any;
  rightIcon?: any;
  isRightIcon?: boolean;
  isHeaderImage?: boolean;
  isheaderText?: boolean;
  onPress?: any;
  rightIcontwo?: any;
  issecondaryIcon?: boolean;
  rightIcon2Style?: any;
}

const Header: FC<HeaderProps> = ({
  headerContainer,
  isLeftIcon,
  leftIcon,
  onPressLeftIcon,
  leftIconStyle,
  headerTextStyle,
  headerText,
  onPressRightIcon,
  rightIconStyle,
  rightIcon,
  isRightIcon,
  isHeaderImage,
  isheaderText,
  onPress,
  rightIcontwo,
  issecondaryIcon,
  rightIcon2Style,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, headerContainer]}>
        {isLeftIcon && (
          <TouchableOpacity onPress={onPressLeftIcon}>
            <Image
              source={leftIcon}
              style={[styles.rightIcon, leftIconStyle]}
            />
          </TouchableOpacity>
        )}
        {isHeaderImage && (
          <Image source={travomint_logo} style={styles.headerIcon} />
        )}
        {isheaderText && (
          <Text style={[styles.headerText, headerTextStyle]}>{headerText}</Text>
        )}

        {isRightIcon && (
          <TouchableOpacity
            onPress={onPressRightIcon}
            style={styles.rightIconContainer}
          >
            <Image
              source={rightIcon}
              style={[styles.rightIcon, rightIconStyle]}
            />
          </TouchableOpacity>
        )}
        {issecondaryIcon && (
          <TouchableOpacity
            onPress={onPressRightIcon}
            style={styles.rightIconContainer}
          >
            <Image
              source={rightIcontwo}
              style={[styles.rightIcon, rightIcon2Style]}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: hp("2.5%"),
    justifyContent: "space-between",
    paddingHorizontal: wp("8%"),
    backgroundColor: THEME.TEXT_COLOR,
    paddingTop: Platform.OS == "ios" ? hp("3.5%") : 0,
    borderBottomRightRadius: wp("6%"),
    borderBottomLeftRadius: wp("6%"),
  },
  rightIcon: {
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
    color: THEME.WHITE_COLOR,
  },
  headerIcon: {
    width: wp("27%"),
    resizeMode: "contain",
    height: hp("5%"),
    marginLeft: wp("22%"),
  },
  rightIconContainer: {},
});
