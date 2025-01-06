import "react-native-gesture-handler";
import * as React from "react";O
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabStack from "./BottomStack";
import Routename from "./Routename";
import CustomDrawerContent from "../Component/CustomDrawerNavigationView";
import LoginScreen from "../Screen/Authentication/Login/loginScreen";
import OtpScreen from "../Screen/Authentication/Otp/otpScreen";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routename.LOGIN_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="BottomTabStack" component={BottomTabStack} /> */}
      <Stack.Screen name={Routename.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

const SettingScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SettingScreen" component={OtpScreen} />
       
    </Stack.Navigator>
  );
};

const DrawerScreenStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        // //   backgroundColor: '#f4511e', //Set Header color
        // },
        // headerTintColor: '#fff', //Set Header text color
      }}
    >
      <Drawer.Screen
        name="HomeScreenStack"
        options={
          {
            //   drawerLabel: 'Home Screen Option',
            //   title: 'Home Screen',
          }
        }
        component={HomeScreenStack}
      />
      {/* <Drawer.Screen
        name="SettingScreenStack"
        options={{
          drawerLabel: 'Setting Screen Option',
          title: 'Setting Screen',
        }}
        component={SettingScreenStack}
      /> */}
    </Drawer.Navigator>
  );
};
export default DrawerScreenStack;
