import { StyleSheet, Image, View, TextInput, Dimensions } from "react-native";
import React, { FC, useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import STRINGS from "../../Constants/string";
import { ic_cross } from "../../assets";
import { FONTS, THEME } from "../../Utils/theme";
import { fontResize } from "../../Utils/fontResize";


const { height, width } = Dimensions.get("screen");

interface searchbarProps {
  refValue?: any,
  onSearchText?: any,
  isCrossicon?: boolean,
  value?: any,
  ref?: any,
  placeholder?: any
}

const CustomSearchBar: FC<searchbarProps> = ({ refValue, onSearchText, isCrossicon, value, ref, placeholder }) => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.searchContainer}>
        <Image
          resizeMode="contain"
          style={styles.iconStyle}
          source={ic_search}
        />
        <TextInput
          ref={ref}
          style={styles.textContainer}
          placeholder={placeholder}
          placeholderTextColor={THEME.TEXT_COLOR}
          onChangeText={(text) => {
            onSearchText(text);
          }}
          value={value}
        />
        {isCrossicon && (
          <Image
            resizeMode="contain"
            style={styles.iconStyle}
            source={ic_cross}
          />
        )}
      </View>
    </View>
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  headerStyle: {
    width: width * 0.88,
    alignItems: "center",
    backgroundColor: THEME.LIGHT_BLUE,
    paddingHorizontal: 12,
    flexDirection: "row",
    borderRadius: wp("3%"),
    justifyContent: "center",
    marginTop: hp("2%"),
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  textContainer: {
    paddingVertical: height * 0.02,
    fontSize: fontResize(16),
    paddingHorizontal: width * 0.04,
    flex: 1,
    color: THEME.TEXT_COLOR,
    fontWeight: "300",
    fontFamily: FONTS.REGULAR,
  },

  iconStyle: { height: height * 0.04, width: width * 0.04 },
});
