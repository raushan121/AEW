import {
  View,
  ImageBackground,
  Image,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { THEME } from "../../../Utils/theme";
import styles from "./style";
import {
  backgrounImage_2,
  ic_arrowBack,
  ic_eye_open,
  ic_eye_close,
  ic_account_privacy,
  ic_ac_pr2,
} from "../../../assets";
import Header from "../../../Component/Header/header";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TextField from "../../../Component/TextField";
import {
  useLazyGetCustomerDetailsQuery,
  useUpdateProfileMutation,
} from "../../../redux/auth-api-slice";
import {
  decryptDataWithMode,
  encryptDataWithMode,
} from "../../../Utils/encrytion";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { handleUserData } from "../../../redux/auth-data-slice";
import { MMKV } from "react-native-mmkv";
import Routename from "../../../routes/Routename";
import gToast from "react-native-simple-toast";
import { useNetinfo } from "../../../Utils/netInfo";
import Button from "../../../Component/Button";

export const storage = new MMKV();

const SupportScreen = ({ navigation }: any) => {
  const onPressHeader = () => {
    navigation.goBack();
  };

  const isNet = useNetinfo();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfPassVisible, setIsConfPassVisible] = useState(false);
  const dispatch = useDispatch();
  const [getCustomerDetails, { isLoading: iscustomer }] =
    useLazyGetCustomerDetailsQuery();
  const [userData, setCustomerData] = useState<any>("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ password: "", confirmPassword: "" });

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const result = await getCustomerDetails().unwrap();
      const resultData = decryptDataWithMode(result?.data);
      setCustomerData(resultData);
    } catch (error) {}
  };

  const validatePasswords = () => {
    let valid = true;
    const errors = { password: "", confirmPassword: "" };
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters, including one uppercase letter, one number, and one special character";
      valid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords must match";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const onPressSaveChanges = () => {
    if (validatePasswords()) {
      const parameter = {
        email: userData?.data?.email,
        password: password,
      };
      const params = encryptDataWithMode(parameter);
      updateProfile(params)
        .unwrap()
        .then((result) => {
          const resultdata = decryptDataWithMode(result?.data);
          dispatch(handleUserData(resultdata));
          gToast.showWithGravity(resultdata?.msg, gToast.SHORT, gToast.BOTTOM);
          Toast.show({
            type: "success",
            text1: "Success",
            text2: resultdata?.msg,
          });
          navigation.navigate(Routename.BOTTOM_TABBAR);
        })
        .catch((error) => {
          if (error) {
            Toast.show({
              type: "error",
              text1: "Error",
              text2: error?.message,
            });
          }
        });
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fix the errors before submitting",
      });
    }
  };

  return (
    <View style={[styles.container]}>
      <ImageBackground source={backgrounImage_2} style={styles.container}>
        <SafeAreaView
          style={{
            ...styles.container,
            // flexDirection: "column",
            // justifyContent: "space-between",
          }}
          edges={["right", "left", "top"]}
        >
          <Header
            isLeftIcon
            leftIcon={ic_arrowBack}
            onPressLeftIcon={onPressHeader}
            isRightIcon
            headerText={"Account Privacy"}
            isheaderText
            headerTextStyle={{
              paddingLeft: wp("20%"),
              color: THEME.BLUE[300],
            }}
            headerContainer={{
              justifyContent: "flex-start",
              paddingTop: 0,
            }}
          />
          <View style={styles.supportimageContainer}>
            <ImageBackground
              source={ic_account_privacy}
              style={styles.supportBg2}
            >
              <View
                style={{
                  ...styles.helpCentercontainer,
                }}
              >
                <Text
                  style={{
                    ...styles.helpCentreText,
                  }}
                >
                  Privacy
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                ...styles.telluscontainer,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...styles.tellustitleText,
                    marginRight: 6,
                  }}
                >
                  We are here to protect your account
                </Text>
                <Image source={ic_ac_pr2} style={styles.smallIcon} />
              </View>
              <Text
                style={{
                  ...styles.tellusdescText,
                }}
              >
                Create or update your password here for enjoying great booking
                experience.
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: hp("16%"),
              marginHorizontal: wp("5%"),
            }}
          >
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              <KeyboardAvoidingView>
                <TextField
                  keyboardType="default"
                  label={"Password*"}
                  value={password}
                  onChangeText={setPassword}
                  errorText={errors.password}
                  textInputStyle={styles.textInputMargin}
                  errorTextStyle={styles.errormsg}
                  secureTextEntry={!isPassVisible}
                  isRightIcon
                  rightIcon={isPassVisible ? ic_eye_close : ic_eye_open}
                  onPressIcon={() => setIsPassVisible(!isPassVisible)}
                  maxLength={20}
                  multiline={false}
                />
                <TextField
                  keyboardType="default"
                  label={"Confirm Password*"}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  errorText={errors.confirmPassword}
                  textInputStyle={styles.textInputMargin}
                  errorTextStyle={styles.errormsg}
                  secureTextEntry={!isConfPassVisible}
                  isRightIcon
                  rightIcon={isConfPassVisible ? ic_eye_close : ic_eye_open}
                  onPressIcon={() => setIsConfPassVisible(!isConfPassVisible)}
                  maxLength={20}
                  multiline={false}
                />
              </KeyboardAvoidingView>
              <Button
                btnStyles={{ marginVertical: hp("2%") }}
                btnText={"Save Changes"}
                onPressButton={onPressSaveChanges}
              />
            </KeyboardAwareScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SupportScreen;
