import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTS, THEME } from "../../Utils/theme";
import { fontResize } from "../../Utils/fontResize";

interface HomeScreenTextInput {
  textInputContainer?: any;
  textinputView?: any;
  labelText?: string;
  leftIcon?: any;
  leftiocnStyle?: any;
  onPressTextInput?: any;
  isRightIcon?: boolean;
  rightIcon?: any;
  value?: string;
  labelTextStyle?: any;
  valueTextStyle?: any;
}

const HomeScreenTextInput: FC<HomeScreenTextInput> = ({
  textInputContainer,
  labelText,
  leftIcon,
  leftiocnStyle,
  onPressTextInput,
  isRightIcon,
  rightIcon,
  value,
  labelTextStyle,
  valueTextStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.textInputContainer, textInputContainer]}
      activeOpacity={0.9}
      onPress={onPressTextInput}
    >
      <Image source={leftIcon} style={[styles.textInputImage, leftiocnStyle]} />
      <View>
        <Text style={[styles.labelText, labelTextStyle]}>{labelText}</Text>
        <Text numberOfLines={1} style={[styles.valueText, valueTextStyle]}>
          {value}
        </Text>
      </View>
      {isRightIcon && <Image source={rightIcon} style={styles.rightImage} />}
    </TouchableOpacity>
  );
};

export default HomeScreenTextInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    width: wp("88%"),
    borderWidth: wp("0.3%"),
    paddingHorizontal: wp("2%"),
    borderRadius: wp("3%"),
    marginBottom: hp("1.8%"),
    borderColor: THEME.GRAY[300],
    paddingBottom: hp("1%"),
    paddingTop: wp("0.3%"),
  },
  textInputImage: {
    height: wp("11%"),
    width: wp("5%"),
    resizeMode: "stretch",
    marginRight: wp("2%"),
    alignSelf: "center",
  },
  labelText: {
    fontSize: fontResize(12),
    marginTop: hp("1%"),
    color: THEME.GRAY[100],
    paddingLeft: wp("1%"),
    fontWeight: "500",
    paddingVertical: wp("1%"),
  },
  rightImage: {
    height: wp("6%"),
    width: wp("6%"),
    resizeMode: "contain",
    position: "absolute",
    right: wp("5%"),
    top: hp("2.2%"),
  },
  valueText: {
    fontSize: fontResize(14),
    fontWeight: "700",
    fontFamily: FONTS.BOLD,
    color: THEME.TEXT_COLOR,
    paddingLeft: wp("1%"),
    paddingRight: wp("4%"),
  },
});
