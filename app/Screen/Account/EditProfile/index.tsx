import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState, FC, useEffect } from "react";
import { THEME } from "../../../Utils/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  backgrounImage,
  backgrounImage_2,
  ic_arrowBack,
  ic_drawable,
  ic_login,
  ic_profile,
} from "../../../assets";
import GeneralStatusBarColor from "../../../Component/styles/GeneralStatusBarColor";
import styles from "./style";
import NotchArea from "../../../Utils/SafeAreaView";
import Header from "../../../Component/Header/header";
import FastImage from "react-native-fast-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountryPickerTextInput from "../../../Component/CountryPicker";
import STRINGS from "../../../Constants/string";
import TextField from "../../../Component/TextField";
import CustomRadioButton from "../../../Component/CustomRadioButton";
import Button from "../../../Component/Button";
import {
  useLazyDeleteAccountQuery,
  useLazyGetCustomerDetailsQuery,
  useUpdateProfileMutation,
} from "../../../redux/auth-api-slice";
import {
  decryptDataWithMode,
  encryptDataWithMode,
} from "../../../Utils/encrytion";
import { useFormik } from "formik";
import gToast from "react-native-simple-toast";
import { editProfileSchema } from "../../../Utils/validations";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { handleUserData } from "../../../redux/auth-data-slice";
import { MMKV } from "react-native-mmkv";
import Routename from "../../../routes/Routename";
import moment from "moment";
import TextFieldWithDatePicker from "./date";
import { getLocalValue, setLocalValue } from "../../../Utils/asyncStorage";
import AppVersionModal from "../../../Component/AppVersionModal";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNetinfo } from "../../../Utils/netInfo";
import CheckInternet from "../../NoInternet";

export const storage = new MMKV();

interface AddGSTValues {
  email?: string;
  name?: string;
  middleName: string;
  lastName?: string;
  password?: string;
  confirm_password?: string;
  phone?: string;
}

const EditProfile: FC = ({ navigation }: any) => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const dispatch = useDispatch();
  const isNet = useNetinfo();
  const [getCustomerDetails, { isLoading: iscustomer }] =
    useLazyGetCustomerDetailsQuery();
  const [deleteAccount, { isLoadings }] = useLazyDeleteAccountQuery();
  const [userData, setCustomerData] = useState<any>(null);
  const [selectedGender, setSelectedGender] = useState<undefined>(undefined);
  const [userdob, setDob] = useState<string | undefined>(undefined);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const currentDate = new Date();
  const adultminDob = moment(currentDate).subtract(12, "years").toDate();
  const adultmaxDob = moment(currentDate).subtract(90, "years").toDate();
  const [IsUserLogin, setIsUserLoggedIn] = useState(false);

  const loginDataString = getLocalValue(STRINGS.STORAGE.LOGIN_DATA);
  const loginDataa = loginDataString && JSON.parse(loginDataString);
  const loginData = loginDataa?.data?.userId;

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    if (userData?.data?.dob) {
      setDob(moment(userData.data.dob).format("YYYY-MM-DD"));
    }
  }, [userData]);

  const getDetails = async () => {
    try {
      const result = await getCustomerDetails().unwrap();
      const resultData = decryptDataWithMode(result?.data);
      setCustomerData(resultData);
      if (resultData?.data?.message == "Authentication Failed") {
        setIsUserLoggedIn(false);
        setLocalValue(STRINGS.STORAGE.TOKEN, "");
      } else {
        setIsUserLoggedIn(true);
      }
    } catch (error) {}
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressSaveChanges = () => {
    // if (
    //   formik.values.name?.length == 0 ||
    //   formik.values.lastName?.length == 0
    // ) {
    //   Alert.alert("first name and last name rwquired");

    //   return;
    // }
    // toLowerCase() == "mr." ? 1 : 2,

    const parameter = {
      firstName: formik.values.name,
      midName: formik.values.middleName,
      lastName: formik.values.lastName,
      email: userData?.data?.email,
      phone: formik.values.phone,
      country: "India",
      pUrl: "", // optional
      gender: selectedGender
        ? selectedGender == "Male"
          ? 1
          : 2
        : userData?.data?.gender,

      dob: userdob,
      dialingCode: "",
    };

    const params = encryptDataWithMode(parameter);
    updateProfile(params)
      .unwrap()
      .then((result) => {
        const resultdata = decryptDataWithMode(result?.data);
        dispatch(handleUserData(resultdata));
        Toast.show({
          type: "success",
          text1: "success",
          text2: resultdata?.msg,
        });
        gToast.showWithGravity(resultdata?.msg, gToast.SHORT, gToast.BOTTOM);
        navigation.navigate(Routename.BOTTOM_TABBAR);
      })
      .catch((error) => {
        if (error) {
          console.log("errrrr", error);
          Toast.show({
            type: "error",
            text1: "Error",
            text2: error?.message,
          });
        }
      });
  };

  const formik = useFormik<AddGSTValues>({
    initialValues: {
      email: userData?.data?.email || "",
      name: userData?.data?.firstName || "",
      middleName: userData?.data?.midName || "",
      lastName: userData?.data?.lastName || "",
      password: "",
      confirm_password: "",
      phone: userData?.data?.phone || "",
    },
    enableReinitialize: true,
    validationSchema: editProfileSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: onPressSaveChanges,
  });

  const isFormChanged = () => {
    const { firstName, midName, lastName, phone, gender, dob } =
      userData?.data || {};

    return (
      firstName == undefined ||
      firstName == null ||
      (formik.values.name == firstName &&
        (midName == undefined ||
          midName == null ||
          formik.values.middleName == midName) &&
        (lastName == undefined ||
          lastName == null ||
          formik.values.lastName == lastName) &&
        (phone == undefined || phone == null || formik.values.phone == phone) &&
        (userdob == undefined || userdob == null || userdob == dob) &&
        (selectedGender == undefined ||
          selectedGender == null ||
          selectedGender == gender))
    );
  };

  const renderTitleRadioButtons = () => {
    const options = ["Male", "Female"];
    const containerStyle = { width: "27%" };
    const genderFromApi = userData?.data?.gender;
    const genderApis = genderFromApi == 1 ? "Male" : "Female";

    return options.map((title: string) => (
      <CustomRadioButton
        onPress={() => setSelectedGender(title)}
        selected={
          selectedGender ? selectedGender == title : genderApis == title
        }
        ishorizontal
        key={title}
        containerStyle={containerStyle}
      >
        {title}
      </CustomRadioButton>
    ));
  };
  const onPressDeleteAccount = () => {
    setDeleteModalVisible(true);
  };
  const onPressDelete = async () => {
    const params: any = `${loginData}`;
    setDeleteModalVisible(false);
    try {
      deleteAccount(params)
        .unwrap()
        .then((res: any) => {
          if (res?.httpStatusCodes == 200) {
            setLocalValue(STRINGS.STORAGE.IS_USER_LOGGED_IN, "false");
            setLocalValue(STRINGS.STORAGE.TOKEN, "");
            setLocalValue(STRINGS.STORAGE.USER_DATA, "");
            navigation.navigate(Routename.HOME_SCREEN);
          }
          gToast.showWithGravity(res?.msg, gToast.LONG, gToast.BOTTOM);
        })
        .catch((errr: any) => {
          console.log("errorr", errr);
          gToast.showWithGravity(errr?.msg, gToast.LONG, gToast.BOTTOM);
        });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return !isNet ? (
    <View style={styles.container}>
      <CheckInternet />
    </View>
  ) : (
    <View style={[styles.container]}>
      {/* <StatusBar
        barStyle={"dark-content"}
        animated={true}
        backgroundColor={THEME.TEXT_COLOR}
      /> */}
      {/* <GeneralStatusBarColor backgroundColor={THEME.TEXT_COLOR} /> */}
      <ImageBackground source={backgrounImage_2} style={styles.container}>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <Header
            isLeftIcon
            leftIcon={ic_arrowBack}
            onPressLeftIcon={onPressBack}
            headerText={"Edit Profile"}
            headerTextStyle={{
              paddingLeft: wp("20%"),
              color: THEME.TEXT_COLOR,
            }}
            isheaderText
            headerContainer={{
              justifyContent: "flex-start",
              paddingTop: Platform.OS === "android" ? 10 : 0,
            }}
          />
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            style={styles.subContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <View>
              <TouchableOpacity
                style={{
                  paddingHorizontal: wp("5%"),
                  paddingTop: hp("3%"),
                  alignSelf: "flex-end",
                }}
                onPress={onPressDeleteAccount}
              >
                <Image source={ic_drawable} style={styles.headerIcon} />
              </TouchableOpacity>

              <View style={{ alignSelf: "center" }}>
                <FastImage
                  style={styles.profileIcon}
                  source={ic_profile}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            </View>

            <Text style={styles.headerText}>Basic Details</Text>
            <KeyboardAvoidingView>
              <TextField
                keyboardType="email-address"
                label={"First Name*"}
                value={formik.values.name}
                onChangeText={formik.handleChange("name")}
                errorText={
                  formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : ""
                }
                textInputStyle={styles.textInputMargin}
                errorTextStyle={styles.errormsg}
              />
              <TextField
                keyboardType="email-address"
                label={"MiddleName (Optional)"}
                value={formik.values.middleName}
                onChangeText={formik.handleChange("middleName")}
                errorText={
                  formik.touched.middleName && formik.errors.middleName
                    ? formik.errors.middleName
                    : ""
                }
                textInputStyle={styles.textInputMargin}
                errorTextStyle={styles.errormsg}
              />

              <TextField
                keyboardType="email-address"
                label={"Last Name*"}
                value={formik.values.lastName}
                onChangeText={formik.handleChange("lastName")}
                errorText={
                  formik.touched.lastName && formik.errors.lastName
                    ? formik.errors.lastName
                    : ""
                }
                textInputStyle={styles.textInputMargin}
                errorTextStyle={styles.errormsg}
              />

              <Text style={styles.normalText}>Gender</Text>
              <View style={styles.titleContainer}>
                {renderTitleRadioButtons()}
              </View>

              <TextFieldWithDatePicker
                labelText={"DOB*"}
                dateValue={userdob}
                onChangeText={(date: Date) =>
                  setDob(moment(date).format("YYYY-MM-DD"))
                }
                minimumDate={adultmaxDob}
                maximumDate={adultminDob || new Date()}
              />

              <Text style={styles.headerText}>Contact Details</Text>
              <CountryPickerTextInput
                label={STRINGS.ENTER_MOB_NUM}
                outlineColor={"#D7D7D7"}
                keyboardType="phone-pad"
                onChangeText={formik.handleChange("phone")}
                value={formik.values.phone}
                errorText={
                  formik.touched.phone && formik.errors.phone
                    ? formik.errors.phone
                    : ""
                }
                maxLength={13}
              />
              <TextField
                keyboardType="email-address"
                label={"Email Address"}
                value={formik.values.email}
                onChangeText={formik.handleChange("email")}
                errorText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""
                }
                textInputStyle={[
                  styles.textInputMargin,
                  { marginTop: hp("1.7%") },
                ]}
                errorTextStyle={styles.errormsg}
                editable={false}
              />
            </KeyboardAvoidingView>
            <Button
              disabled={isFormChanged()}
              btnText={"Save Changes"}
              onPressButton={onPressSaveChanges}
              btnStyles={{
                marginVertical: hp("2%"),
                backgroundColor: isFormChanged()
                  ? THEME.GRAY[100]
                  : THEME.PRIMARY,
                borderColor: isFormChanged() ? THEME.GRAY[100] : THEME.PRIMARY,
              }}
            />
            <AppVersionModal
              modalVisible={deleteModalVisible}
              onCloseModal={() => setDeleteModalVisible(!deleteModalVisible)}
              onpressButton={onPressDelete}
              btnIcon={ic_login}
              headerText="Are You Sure You Want To Delete Account"
              subHeaderText="Once your account is deleted, all your data will be lost forever. Would you like to delete this?"
              btnText="Delete"
            />
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </ImageBackground>
      <Toast />
    </View>
  );
};

export default EditProfile;
