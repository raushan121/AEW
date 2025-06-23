import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { THEME } from "../../../Utils/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { backgrounImage, ic_arrowBack, ic_back, ic_profile } from "../../../assets";
import GeneralStatusBarColor from "../../../Component/styles/GeneralStatusBarColor";
import styles from "./style";
import NotchArea from "../../../Utils/SafeAreaView";
import Header from "../../../Component/Header/header";
import FastImage from "react-native-fast-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountryPickerTextInput from "../../../Component/CountryPicker";
import STRINGS from "../../../Constants/string";
import TextField from "../../../Component/TextField";
import Button from "../../../Component/CustomButton";

const EditProfile = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [number, setNumber] = useState("");
  const [genderId, setGenderId] = useState(1);
  const initialFields = {
    "Building,Company,": "",
    "Area,Sector,": "",
    "Pin code*": "",
    "Town / City": "",
    State: "",
    Country: "",
  };

  const [addressData, setAddressData] = useState(initialFields);
  const handleFieldChange = (name, text) => {
    setAddressData({ ...addressData, [name]: text });
  };

  const handleEmailChange = (text) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(text)) {
      setEmail(text);
      setEmailError("");
    } else {
      text.length > 1 && text.length > 5
        ? setEmailError(STRINGS.VALID_EMAIL)
        : setEmailError("");
      return;
    }
  };

  const onPressSaveChanges = () => {};

  return (
    <View style={[styles.container, NotchArea.AndroidSafeArea]}>
      <StatusBar
        barStyle={"dark-content"}
        animated={true}
        backgroundColor={THEME.TEXT_COLOR}
      />
      <GeneralStatusBarColor backgroundColor={THEME.TEXT_COLOR} />
      <ImageBackground source={backgrounImage} style={styles.container}>
        <Header
          isLeftIcon
          leftIcon={ic_back}
          leftIconStyle={{ tintColor: "red" }}
          onPressLeftIcon={() => navigation.goBack()}
          headerText={"Edit Profile"}
          headerTextStyle={{ paddingLeft: wp("20%") }}
          isheaderText
          headerContainer={{
            justifyContent: "flex-start",
          }}
        />
        <KeyboardAwareScrollView
          style={styles.subContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={{ alignSelf: "center" }}>
            <FastImage
              style={styles.profileIcon}
              source={ic_profile}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>

          <Text style={styles.headerText}>Basic Details</Text>
          <KeyboardAvoidingView>
            <TextField
              keyboardType="email-address"
              label={"First Name"}
              // onChangeText={}
              errorText={emailError}
              textInputStyle={{ marginBottom: hp("1.5%") }}
            />
            <TextField
              keyboardType="email-address"
              label={"Middle Name"}
              onChangeText={() => {
                "";
              }}
              errorText={emailError}
              textInputStyle={{ marginBottom: hp("1.5%") }}
            />
            <TextField
              keyboardType="email-address"
              label={"Last Name"}
              onChangeText={() => {}}
              errorText={emailError}
            />
            <Text style={styles.headerText}>Contact Details</Text>
            <CountryPickerTextInput
              label={STRINGS.ENTER_MOB_NUM}
              keyboardType="phone-pad"
              value={number}
              onChangeText={() => {}}
              errorText={
                number.length > 2 && number.length < 9
                  ? "not a valid number"
                  : ""
              }
            />
            <TextField
              keyboardType="email-address"
              label={STRINGS.EMAIL_ADDRESS}
              onChangeText={handleEmailChange}
              errorText={emailError}
              textInputStyle={{ marginTop: hp("1.5%") }}
            />
            {/* <Text style={styles.headerText}>Address</Text>
            {Object.keys(initialFields).map((field) => (
              <TextField
                key={field}
                label={field.replace(/([A-Z])/g, " $1").toLowerCase()}
                value={addressData[field]}
                onChangeText={(text) => handleFieldChange(field, text)}
                textInputStyle={{ marginBottom: hp("1.5%") }}
              />
            ))} */}
          </KeyboardAvoidingView>
          <Button
            btnStyles={{ marginVertical: hp("2%") }}
            btnText={"Save Changes"}
            onPressButton={onPressSaveChanges}
          />
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};

export default EditProfile;
