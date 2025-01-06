import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  useWindowDimensions,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect, FC } from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import NotchArea from "../../../Utils/SafeAreaView";
import { ic_otp_logo } from "../../../assets";
import Header from "../../../Component/Header";
import STRINGS from "../../../Constants/string";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Routename from "../../../routes/Routename";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fontResize } from "../../../Utils/fontResize";
import { THEME } from "../../../Utils/theme";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { MMKV } from "react-native-mmkv";
import Button from "../../../Component/CustomButton";
import globalStyles from "../../../Utils/globalStyle";
import { useVerifyOtpMutation } from "../../../redux/auth-api-slice";

// Create a new MMKV storage instance.
export const storage = new MMKV();

const OtpScreen: FC = () => {
  const navigation = useNavigation();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const inputs = React.useRef([]);
  const route = useRoute<any>();
  const resultData= route?.params?.res;
  console.log("resultdataaa",resultData)


  const [seconds, setSeconds] = useState(60);

  const { height, width } = useWindowDimensions();

  var textInputs = [];
  var otp: any = [];
  const [isError, setError] = useState(false);
  const [errMessage, setErrorMessage] = useState("");
  const [oldotp, setOldOtp] = useState(["", "", "", ""]);


  const onPressResend = () => {


   


    //
  };
  const onPressVerifyOtp=()=>{
    const params: object = {
      userName: route?.params?.email,
    };
    verifyOtp(params).unwrap().then((res) => {
      console.log("verifyOtp>>>>", res)
    }).catch((err) => {
      console.log("otpError", err)
    })
  }
  const onTextChange = (text: any, index: any) => {
    if (text.length === 2) {
      inputs.current[index + 1].focus();
    } else {
      var updateOtp = [...oldotp];
      updateOtp[index] = text;
      otp[index] = text;
      setOldOtp(updateOtp);
      if (text.length === 1 && index < textInputs.length - 1) {
        inputs.current[index + 1].focus();
      } else {
        inputs.current[textInputs.length - 1].blur();
      }
    }
    if (isError) {
      if (index == 3) {
        if (
          text !== "" ||
          oldotp[0] !== "" ||
          oldotp[1] !== "" ||
          oldotp[2] !== ""

        ) {
          setError(false);
        }
      } else if (index == 2) {
        if (
          text !== "" ||
          oldotp[0] !== "" ||
          oldotp[1] !== "" ||
          oldotp[3] !== ""

        ) {
          setError(false);
        }
      } else if (index == 1) {
        if (
          text !== "" ||
          oldotp[0] !== "" ||
          oldotp[2] !== "" ||
          oldotp[3] !== ""

        ) {
          setError(false);
        }
      } else if (index == 0) {
        if (
          text !== "" ||
          oldotp[1] !== "" ||
          oldotp[2] !== "" ||
          oldotp[3] !== ""

        ) {
          setError(false);
        }
      }
    }
  };

  const onKeyPress = (e: any, i: any) => {
    const val = otp[i] || "";
    if (e.nativeEvent.key === "Backspace" && i !== 0) {
      inputs.current[i - 1].focus();
    }
  };

  for (let i = 0; i < 4; i += 1) {
    textInputs.push(
      <TextInput
        ref={(e) => {
          inputs.current[i] = e;
        }}
        style={{
          width: width * 0.16,
          height: width * 0.14,
          marginLeft: widthPercentageToDP("4%"),
          fontSize: fontResize(18),
          borderBottomWidth: 1,
          borderBottomColor: THEME.PRIMARY,
          fontWeight: "700",
          textAlign: "center",
          borderRadius: 10,

          color: THEME.TEXT_COLOR,
          borderColor: isError
            ? oldotp[i] == ""
              ? "red"
              : THEME.GRAY[100]
            : THEME.GRAY[100],
        }}
        onKeyPress={(e) => onKeyPress(e, i)}
        autoFocus={i === 0}
        value={otp[i]}
        maxLength={1}
        onTouchStart={() => {
          inputs.current[i].focus();
        }}
        onChangeText={(text) => onTextChange(text, i)}
        keyboardType="phone-pad"
      />
    );
  }

  const onValidation = () => {
    var isValid = true;

    if (
      oldotp[0] == "" &&
      oldotp[1] == "" &&
      oldotp[2] == "" &&
      oldotp[3] == ""

    ) {
      isValid = false;
      setError(true);
      setErrorMessage("Please enter otp");
    } else if (
      oldotp[0] == "" ||
      oldotp[1] == "" ||
      oldotp[2] == "" ||
      oldotp[3] == ""

    ) {
      isValid = false;
      setError(true);
      setErrorMessage("Some otp field are empty");
    }

    return isValid;
  };

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);
  // here>>>>>>>>>>>>>
  const onPressBack = () => {
    navigation.goBack();
  };
 





  

  return (
    <SafeAreaView style={[NotchArea.AndroidSafeArea, globalStyles.container]}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        bounces={false}
        style={[styles.container]}
      >
        <StatusBar
          barStyle={"dark-content"}
          translucent
          backgroundColor={"transparent"}
        />
        <View style={styles.mainView}>
          <Image source={ic_otp_logo} style={styles.otpIcon} />
          <Text style={globalStyles.headerText}>{STRINGS.ENTER_OTP}</Text>
          <Text style={styles.codeToVerifyText}>
            {STRINGS.ENTER_CODE_TO_VERIFY}
          </Text>
          <Text>{route?.params?.email}</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.textContainer}
        >
          <View style={styles.otpContainer}>{textInputs}</View>
          <View style={styles.bottomContainer}>
            <Text style={styles.dontRecievedOtpText}>
              {STRINGS.DID_NOT_RECIEVED_OTP}
            </Text>
            {seconds > 0 && (
              <View style={[styles.row2]}>
                <Text style={styles.resendTextt}>{`Resend code in`}</Text>
                <Text style={styles.secondsText}>{`${seconds} s`}</Text>
              </View>
            )}
            {seconds == 0 && (
              <Text onPress={onPressResend} style={styles.resendText}>
                {STRINGS.RESEND_OTP}
              </Text>
            )}
          </View>
          <Button onPressButton={onPressVerifyOtp} btnText={STRINGS.VERIFY} />
        </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
      <Toast />
    </SafeAreaView>
  );
};

export default OtpScreen;
