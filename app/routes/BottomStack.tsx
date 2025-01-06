import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, View, Image, Platform, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Screen/Authentication/Login/loginScreen';
import Otp from '../Screen/Authentication/Otp/otpScreen';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Routename from './Routename';
import {fontResize} from '../Utils/fontResize';
import {FONTS, THEME} from '../Utils/theme';
import MyAccount from '../Screen/Account/MyAccount';
import { ic_account_active, ic_account_inactive, ic_daily, ic_home_active, ic_home_inactive, ic_video_active, ic_video_inactive } from '../assets';
import MyVideo from '../Screen/Video/MyVideo';
import HomeStackScreen from './HomeStack';


const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routename.HOME_STACK}
      screenOptions={{
        keyboardHidesTabBar: true,
        tabBarStyle: {
          height: hp('10%'),
          // width: wp("80%"),
          // borderRadius: wp("8%"),
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          paddingTop: Platform.OS == 'ios' ? hp('2%') : 0,
          backgroundColor: THEME.WHITE_COLOR,
          borderColor: THEME.GRAY[100],
          shadowColor: THEME.GRAY[200],
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.4,
          shadowRadius: 8,
          elevation: 5,
          // paddingHorizontal: wp('8%'),
        },
        headerShown: false,
      }}>
          <Tab.Screen
        name={Routename.HOME_STACK}
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <Image
                  source={ic_home_active}
                  style={styles.iconStyleActive}
                />
              ) : (
                <Image source={ic_home_inactive} style={styles.iconStyle} />
              )}
              <Text style={[styles.tabText, {}]}>Home</Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={Routename.VIDEO_SCREEN}
        component={MyVideo}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <Image
                  source={ic_video_active}
                  style={styles.iconStyleActive}
                />
              ) : (
                <Image source={ic_video_inactive} style={styles.iconStyle} />
              )}
              <Text style={[styles.tabText, {}]}>Video</Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={Routename.ACCOUNT}
        component={MyAccount}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <Image
                  source={ic_account_active}
                  style={styles.iconStyleActive}
                />
              ) : (
                <Image
                  source={ic_account_inactive}
                  style={styles.iconStyle}
                />
              )}
              <Text style={styles.tabText}>Account</Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    width: wp('45%'),
    marginBottom: hp('0.3%'),
  },
  iconStyle: {
    height: wp('8%'),
    width: wp('8%'),
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: fontResize(12),
    fontWeight: '600',
    color: THEME.TEXT_COLOR,
    fontFamily: FONTS.LIGHT_ITALIC,
    marginBottom: hp('1%'),
  },
  iconStyleActive: {
    height: wp('8%'),
    width: wp('8%'),
    resizeMode: 'contain',
  },
});
