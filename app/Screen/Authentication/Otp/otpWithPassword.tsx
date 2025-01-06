import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Pressable,
  Alert,
} from "react-native";
import React, { FC, useState } from "react";
import NotchArea from "../../../Utils/SafeAreaView";
import {
  backgrounImage,
  ic_arrowBack,
  ic_eye_close,
  ic_eye_open,
} from "../../../assets";
import Header from "../../../Component/Header";
import STRINGS from "../../../Constants/string";
import Button from "../../../Component/Button";
import TextField from "../../../Component/TextField";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FONTS, THEME } from "../../../Utils/theme";
import { fontResize } from "../../../Utils/fontResize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  decryptDataWithMode,
  encryptDataWithMode,
} from "../../../Utils/encrytion";
import { END_POINTS } from "../../../redux/endpoints";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { MMKV } from "react-native-mmkv";
import Routename from "../../../routes/Routename";
import gToast from "react-native-simple-toast";

export const storage = new MMKV();

const OtpWithPasswordScreen: FC = ({ navigation }: any) => {
  const [password, setPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const route = useRoute();

  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressViaOTP = () => {
    Alert.alert("hiii");
  };

  const onPressSignIn = async () => {
    const session = {
      site: 6,
      device: "",
      ip: "10.20.1.86",
      browser: "insomnia",
      userName: route?.params?.email,
      secret: password,
    };

    try {
      const config = {
        method: "post",
        url: `${END_POINTS.LOGIN_BASE_URL}${END_POINTS.LOGIN_VIA_PASSWORD}`,
        headers: {
          "Content-Type": "application/json",
          "session-props": encryptDataWithMode(session),
        },
      };

      const response = await axios(config);
      const decryptedData = await decryptDataWithMode(response?.data?.data);

      if (JSON.stringify(decryptedData?.httpStatus === 200)) {
        storage.set(STRINGS.STORAGE.TOKEN, decryptedData?.data?.token);
        navigation.navigate(Routename.BOTTOM_TABBAR);
      } else {
        gToast.showWithGravity(
          "Invalid Username or Password, please try again",
          gToast.LONG,
          gToast.BOTTOM
        );
      }
    } catch (error) {
      console.error("Sign-In Error:", error);
      gToast.showWithGravity(
        "An error occurred during sign-in, please try again later",
        gToast.LONG,
        gToast.BOTTOM
      );
    }
  };

  return (
    <View style={[NotchArea.AndroidSafeArea, styles.container]}>
      <ImageBackground
        resizeMode="cover"
        source={backgrounImage}
        style={styles.subContainer}
      >
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          bounces={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <StatusBar
            barStyle={"dark-content"}
            translucent
            backgroundColor={"transparent"}
          />
          <View style={styles.mainContainer}>
            <Header
              isLeftIcon
              leftIcon={ic_arrowBack}
              onPressLeftIcon={onPressBack}
              // headerTextStyle={styles.header}
              isHeaderImage
            />
            <Text style={styles.letsSignInText}>{"Password"}</Text>
            <Text style={styles.missedText}>{"Enter password here "}</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={styles.textContainer}
            >
              <TextField
                keyboardType="email-address"
                label={"Password*"}
                onChangeText={(text: any) => setPassword(text)}
                secureTextEntry={!isPassVisible}
                isRightIcon
                rightIcon={isPassVisible ? ic_eye_open : ic_eye_close}
                onPressIcon={() => setIsPassVisible(!isPassVisible)}
              />
              <View style={styles.orContainer}>
                <View style={styles.border} />
                <Text style={styles.orText}>{STRINGS.OR}</Text>
                <View style={styles.border} />
              </View>
              <Pressable onPress={onPressViaOTP}>
                <Text style={styles.loginViaOtpTextStyle}>Login via OTP</Text>
              </Pressable>
            </KeyboardAvoidingView>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.bottomContainer}>
          <Button onPressButton={onPressSignIn} btnText={"Sign In"} />
        </View>
        <Toast />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  subContainer: {
    paddingTop: Platform.OS == "ios" ? hp("7%") : "0%",
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: wp("7%"),
    flex: 1,
  },
  textContainer: {
    marginVertical: hp("5%"),
  },
  letsSignInText: {
    fontFamily: FONTS.REGULAR,
    fontWeight: "700",
    fontSize: fontResize(30),
    marginTop: hp("3%"),
  },
  missedText: {
    fontSize: fontResize(16),
    fontWeight: "500",
    fontFamily: FONTS.LIGHT_ITALIC,
    marginTop: hp("1.6%"),
    color: THEME.GRAY[100],
  },
  inputContainer: {
    marginVertical: hp("5%"),
  },
  dontHaveAcoountText: {
    fontSize: fontResize(16),
    fontWeight: "600",
    fontFamily: FONTS.MEDIUM_ITALIC,
    marginVertical: hp("3%"),
    alignSelf: "center",
  },
  orContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp("5%"),
  },
  border: {
    height: hp("0.1%"),
    width: wp("10%"),
    borderWidth: wp("0.1%"),
    borderColor: THEME.PRIMARY,
    shadowColor: THEME.PRIMARY,
    overflow: "visible",
    shadowOffset: {
      width: -1,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
  orText: {
    paddingHorizontal: wp("4%"),
    fontSize: fontResize(16),
    color: THEME.GRAY[100],
    fontWeight: "500",
  },
  bottomContainer: {
    paddingBottom: hp("4%"),
    paddingHorizontal: wp("7%"),
  },
  loginViaOtpTextStyle: {
    textAlign: "center",
    justifyContent: "center",
    textDecorationLine: "underline",
    color: THEME.PRIMARY,
    fontSize: fontResize(18),
    fontWeight: "700",
    fontFamily: FONTS.SEMI_BOLD_ITALIC,
  },
});

export default OtpWithPasswordScreen;
