import { Image, Animated, Alert, View } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style";
import {
  ic_splash_logo
} from "../../assets";
import Routename from "../../routes/Routename";
import { MMKV } from "react-native-mmkv";


export const storage = new MMKV();

const SplashScreen = ({ navigation }: any) => {
  const f_logo = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const s_logo = useRef(new Animated.Value(1)).current; // Initial value for opacity: 1

  useLayoutEffect(() => {
    Animated.timing(f_logo, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      delay: 1000,
    }).start();
    // userFirstTime

    Animated.timing(s_logo, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      delay: 500,
    }).start(
      () =>

        navigation.navigate(Routename.BOTTOM_TABBAR)
      // : navigation.navigate(Routename.ONBOARDING_SCREEN)
    );
  }, [f_logo, s_logo]);

  return (
    <View style={styles.main}>
      <Image source={ic_splash_logo} style={styles.icon} />
    </View>


  );
};

export default SplashScreen;
