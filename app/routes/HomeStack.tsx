import "react-native-gesture-handler";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screen/Home/HomeScreen";
import LoginScreen from "../Screen/Authentication/Login/LoginScreen";
import Routename from "./Routename";
import SplashScreen from "../Screen/SplashScreen/SplashScreen";
import SignUpScreen from "../Screen/Authentication/SignUp/SignUpScreen";
import OtpScreen from "../Screen/Authentication/Otp/OtpScreen";
import PDFReadScreen from "../Screen/PDFReadScreen/PDFReadScreen";
import AuthStackScreen from "./AuthStack";
import { getLocalValue } from "../Utils/asyncStorage";
import STRINGS from "../Constants/string";




const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    const isUserLogin = String(getLocalValue(STRINGS.STORAGE.IS_USER_LOGGED_IN));
    return (
        <HomeStack.Navigator initialRouteName={isUserLogin=="true"?Routename.HOME:Routename.AUTH_STACK} screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name={Routename.AUTH_STACK} component={AuthStackScreen} />
            <HomeStack.Screen
                name={Routename.HOME}
                component={HomeScreen}
            />
             <HomeStack.Screen
                name={Routename.PDF_READ_SCREEN}
                component={PDFReadScreen}
            />
        </HomeStack.Navigator>
    );
};

export default HomeStackScreen;
