import React, { FC, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { THEME } from "../../Utils/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ic_drawable,
  ic_notification,
  ic_indianFlag,
  ic_country_EUR,
  ic_country_AED,
  ic_country_AUS,
  ic_country_USD,
  ic_country_CAD,
  ic_country_INR,
  ic_country_AUD,
} from "../../assets";
import { fontResize } from "../../Utils/fontResize";
import { useAppSelector } from "../../hooks/redux-hooks";
import { MMKV } from "react-native-mmkv";
export const storage = new MMKV();

interface DynamicHeaderProps {
  animHeaderValue?: any;
  onPressHeader?: () => void;
  onPressNotification?: () => void;
  notificationText?: string;
  onPressCurrency?: () => void;
}

const Header_Max_Height = 100;
const Header_Min_Height = 85;

const DynamicHeader: FC<DynamicHeaderProps> = ({
  animHeaderValue,
  onPressHeader,
  onPressNotification,
  notificationText,
  onPressCurrency,
}) => {
  const [currencyData, setCurrencyData] = useState<any>({});

  const currencyDatas = useAppSelector(
    (state) => state?.flightData?.currencyData
  );
  useEffect(() => {
    setCurrencyData(currencyDatas);
  }, [currencyDatas]);

  const moneyImage =
    currencyData?.text == "INR"
      ? ic_country_INR
      : currencyData?.text == "USD"
      ? ic_country_USD
      : currencyData?.text == "AED"
      ? ic_country_AED
      : currencyData?.text == "GBP"
      ? ic_country_AUS
      : currencyData?.text == "EUR"
      ? ic_country_EUR
      : currencyData?.text == "CAD"
      ? ic_country_CAD
      : currencyData?.text == "AUD"
      ? ic_country_AUD
      : ic_country_INR;

  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [THEME.TEXT_COLOR, THEME.WHITE_COLOR],
    extrapolate: "clamp",
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const animatedPadding = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange:
      Platform.OS == "android" ? [hp("5%"), hp("6%")] : [hp("9%"), hp("6%")],
    extrapolate: "clamp",
  });

  const animatedBorderwidth = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [wp("0%"), wp("0.5%")],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
          paddingTop: animatedPadding,
          borderBottomWidth: animatedBorderwidth,
        },
      ]}
    >
      <View style={styles.homeContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressHeader}>
          <Image source={ic_drawable} style={styles.leftIcon} />
        </TouchableOpacity>
        <View style={styles.headerRightContainer}>
          {/* <TouchableOpacity
            activeOpacity={0.8}
            style={{ marginRight: wp("6%") }}
            onPress={onPressNotification}
          >
            <Image source={ic_notification} style={styles.leftIcon} />
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationText}>{notificationText}</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity activeOpacity={0.8} onPress={onPressCurrency}>
            <Image source={moneyImage} style={styles.currencyIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default DynamicHeader;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    left: 0,
    right: 0,
    backgroundColor: THEME.TEXT_COLOR,
    borderColor: THEME.GRAY[200],


  },
  leftIcon: {
    height: wp("6%"),
    width: wp("6%"),
    resizeMode: "contain",
    
  },
  headerRightContainer: {
    flexDirection: "row",
  },
  homeContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: wp("82%"),
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
  currencyIcon: {
    height: wp("6%"),
    width: wp("6%"),
    resizeMode: "contain",
    borderRadius: wp("4%"),
  },
});
