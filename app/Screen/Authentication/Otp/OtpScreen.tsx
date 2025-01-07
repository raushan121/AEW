import React, { useState, useEffect, FC, useRef } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  useWindowDimensions,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation, useRoute } from "@react-navigation/native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Toast from "react-native-toast-message";
import Button from "../../../Component/CustomButton";
import styles from "./style";
import globalStyles from "../../../Utils/globalStyle";
import STRINGS from "../../../Constants/string";
import { ic_otp_logo } from "../../../assets";
import { fontResize } from "../../../Utils/fontResize";
import { THEME } from "../../../Utils/theme";
import { useVerifyOtpMutation } from "../../../redux/auth-api-slice";
import Routename from "../../../routes/Routename";
import { setLocalValue } from "../../../Utils/asyncStorage";

const OtpScreen: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { height, width } = useWindowDimensions();
  const [otp, setOtp] = useState(["", "", "", ""]); // OTP state
  const [isError, setError] = useState(false);
  const [errMessage, setErrorMessage] = useState("");
  const [seconds, setSeconds] = useState(60);
  const inputs = useRef<TextInput[]>([]);
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  // Access route params with memoization
  const resultData = route?.params?.res;

  useEffect(() => {
    console.log("resultdataaa890", resultData);
  }, [resultData]);

  // Countdown timer for OTP resend
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  // Handle OTP input changes
  const onTextChange = (text: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    // Focus on the next input field
    if (text.length === 1 && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }

    // Clear error state if all fields are filled
    if (isError && updatedOtp.every((value) => value !== "")) {
      setError(false);
    }
  };

  // Handle backspace behavior
  const onKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const onPressVerifyOtp = () => {
    if (otp.includes("")) {
      setError(true);
      setErrorMessage("All fields are required.");
    } else {
      const params:any = {
        RegId: resultData?.RegId||"",
        FullName: resultData?.FullName||"",
        Mobile: resultData?.Mobile||"",
        Email: resultData?.Email||"",
        otp: otp.join(""),
      };
      console.log("params>>>>>", params);
      verifyOtp(params)
        .unwrap()
        .then((res) => {
          console.log("resultVerifyOtp>>>>", res);
          {
            if (res?.status==false){
              Alert.alert("invalid otp")
            }
            else{
              setLocalValue(STRINGS.STORAGE.IS_USER_LOGGED_IN, "true");
             navigation.navigate(Routename.HOME,{res});
            }
          }
     
        })
        .catch((error) => {
          console.log("errorrrOtp>>>>", error);
        });
    }
  };

  const onPressResend = () => {
    setSeconds(60); // Reset timer
    console.log("Resend OTP");
  };

  return (
    <SafeAreaView style={[styles.container, globalStyles.container]}>
      <KeyboardAwareScrollView bounces={false} style={styles.container}>
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
          behavior="padding"
          style={styles.textContainer}
        >
          <View style={styles.otpContainer}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                ref={(input) => (inputs.current[index] = input)}
                style={{
                  width: width * 0.16,
                  height: width * 0.14,
                  marginLeft: widthPercentageToDP("4%"),
                  fontSize: fontResize(18),
                  borderBottomWidth: 1,
                  borderBottomColor: isError && otp[index] === "" ? "red" : THEME.PRIMARY,
                  fontWeight: "700",
                  textAlign: "center",
                  borderRadius: 10,
                  color: THEME.TEXT_COLOR,
                }}
                maxLength={1}
                keyboardType="phone-pad"
                value={value}
                onChangeText={(text) => onTextChange(text, index)}
                onKeyPress={(e) => onKeyPress(e, index)}
              />
            ))}
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.dontRecievedOtpText}>
              {STRINGS.DID_NOT_RECIEVED_OTP}
            </Text>
            {seconds > 0 ? (
              <View style={styles.row2}>
                <Text style={styles.resendTextt}>{`Resend code in`}</Text>
                <Text style={styles.secondsText}>{`${seconds} s`}</Text>
              </View>
            ) : (
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
