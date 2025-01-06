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




const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name={Routename.LOGIN_SCREEN} component={LoginScreen} />
            <HomeStack.Screen
                name={Routename.SIGNUP_SCREEN}
                component={SignUpScreen}
            />
            <HomeStack.Screen name={Routename.OTP_SCREEN} component={OtpScreen} />
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
