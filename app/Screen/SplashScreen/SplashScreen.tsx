// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import styles from './style'
// import globalStyles from '../../utils/globalStyle'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { ic_splash_logo } from '../../assets'




// const SplashScreen = () => {
//   return (
//     <SafeAreaView style={[globalStyles.container,styles.main]}>
//     <Image source={ic_splash_logo} style={styles.icon}/>
//     </SafeAreaView>
//   )
// }

// export default SplashScreen


import { ImageBackground, Image, Animated, Alert } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style";
import {
ic_splash_logo
} from "../../assets";
import Routename from "../../routes/Routename";
import { MMKV } from "react-native-mmkv";
import STRINGS from "../../Constants/string";
import { useDispatch } from "react-redux";
import globalStyles from "../../Utils/globalStyle";
import { getLocalValue } from "../../Utils/asyncStorage";
import { SafeAreaView } from 'react-native-safe-area-context'

export const storage = new MMKV();

const SplashScreen = ({ navigation }:any) => {
  const f_logo = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const s_logo = useRef(new Animated.Value(1)).current; // Initial value for opacity: 1

  const getToken = String(getLocalValue(STRINGS.STORAGE.TOKEN));
  const isUserLogin = String(getLocalValue(STRINGS.STORAGE.IS_USER_LOGGED_IN));
  const dispatch = useDispatch();


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
        isUserLogin == "true"
          ? navigation.navigate(Routename.BOTTOM_TABBAR)
          : navigation.navigate(Routename.BOTTOM_TABBAR)
      // : navigation.navigate(Routename.ONBOARDING_SCREEN)
    );
  }, [f_logo, s_logo]);

  return (
     <SafeAreaView style={[globalStyles.container,styles.main]}>
    <Image source={ic_splash_logo} style={styles.icon}/>
    </SafeAreaView>
  );
};

export default SplashScreen;
