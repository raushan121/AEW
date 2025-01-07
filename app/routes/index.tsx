import "react-native-gesture-handler";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routename from "./Routename";
import DrawerScreenStack from "./DrawerTab";
import SplashScreen from "../Screen/SplashScreen/SplashScreen";
import LoginScreen from "../Screen/Authentication/Login/LoginScreen";
import SignUpScreen from "../Screen/Authentication/SignUp/SignUpScreen";
import OtpScreen from "../Screen/Authentication/Otp/OtpScreen";
import HomeScreen from "../Screen/Home/HomeScreen";
import PDFListScreen from "../Screen/PDFListScreen/PDFListScreen";
import PDFReadScreen from "../Screen/PDFReadScreen/PDFReadScreen";
import MyAccount from "../Screen/Account/MyAccount/MyAccount";
import MyVideo from "../Screen/Video/MyVideo";
import BottomTabStack from "./BottomStack";
import HomeStackScreen from "./HomeStack";



const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routename.SPLASH_SCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={Routename.SPLASH_SCREEN}
          component={SplashScreen}
        />
         <Stack.Screen
          name={Routename.HOME_STACK}
          component={HomeStackScreen}
        />
           <Stack.Screen
          name={Routename.BOTTOM_TABBAR}
          component={BottomTabStack}
        />
        <Stack.Screen
          name={Routename.LOGIN_SCREEN}
          component={LoginScreen}
        />
        <Stack.Screen
          name={Routename.OTP_SCREEN}
          component={OtpScreen}
        />
        <Stack.Screen
          name={Routename.SIGNUP_SCREEN}
          component={SignUpScreen}
        />
        <Stack.Screen
          name={Routename.HOME}
          component={HomeScreen}
        />
         <Stack.Screen
          name={Routename.PDF_LIST_SCREEN}
          component={PDFListScreen}
        />
         <Stack.Screen
          name={Routename.PDF_READ_SCREEN}
          component={PDFReadScreen}
        />
           <Stack.Screen
          name={Routename.ACCOUNT}
          component={MyAccount}
        />
           <Stack.Screen
          name={Routename.VIDEO_SCREEN}
          component={MyVideo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
