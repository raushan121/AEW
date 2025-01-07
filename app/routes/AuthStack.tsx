import "react-native-gesture-handler";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../Screen/Authentication/Login/LoginScreen";
import Routename from "./Routename";
import SignUpScreen from "../Screen/Authentication/SignUp/SignUpScreen";
import OtpScreen from "../Screen/Authentication/Otp/OtpScreen";


const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name={Routename.LOGIN_SCREEN} component={LoginScreen} />
            <AuthStack.Screen
                name={Routename.SIGNUP_SCREEN}
                component={SignUpScreen}
            />
            <AuthStack.Screen name={Routename.OTP_SCREEN} component={OtpScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthStackScreen;
