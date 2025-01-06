import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Animated,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Share,
  Platform,
  Linking,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { THEME } from "../../../Utils/theme";
import styles from "./style";
import {
  backgrounImage,
  ic_arrowRight,
  ic_booking_active,
  ic_camera,
  ic_drawable,
  ic_gallery,
  ic_logout,
  ic_notification,
  ic_profile,
  ic_support,
  travomint_logo,
  ic_myAccount,
  ic_login,
  ic_ActiveOfferTab,
  backgrounImage_2,
  ic_edit_white,
  ic_email,
  ic_mail_white,
  ic_phn_white,
  ic_calender_white,
  ic_profile2,
  ic_priceActive,
  ic_profile_white,
} from "../../../assets";
import Header from "../../../Component/Header/header";
import NotchArea from "../../../Utils/SafeAreaView";
import GeneralStatusBarColor from "../../../Component/styles/GeneralStatusBarColor";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FastImage from "react-native-fast-image";
import TextWithImage from "../../../Component/TextWithImage";
import ImagePicker from "react-native-image-crop-picker";
import Custom_Sheet from "../../../Component/CustomBottomSheet";
import {
  clearAllLocalStorage,
  getLocalValue,
  setLocalValue,
} from "../../../Utils/asyncStorage";

import STRINGS from "../../../Constants/string";
import Routename from "../../../routes/Routename";
import { decryptDataWithMode } from "../../../Utils/encrytion";
import AppVesionModal from "../../../Component/AppVersionModal";
import { useIsFocused } from "@react-navigation/native";
import LoginConfirmationModal from "../../../Component/LoginConfirmationModal";
import gToast from "react-native-simple-toast";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNetinfo } from "../../../Utils/netInfo";
import CheckInternet from "../../NoInternet";
// import * as Progress from "react-native-progress";
import { ProgressBar } from "react-native-paper";
const MyAccount = ({ navigation }: any) => {
  const isNet = useNetinfo();
  const [getCustomerDetails, { isLoading: iscustomer }] =
    useLazyGetCustomerDetailsQuery();
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [isCamera, setCamera] = useState(false);
  const [userImage, setuserImage] = useState({});
  const [image, setImage] = useState("");
  const refImageSheet = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const hideModal = () => setVisible(false);
  const [deleteAccount, { isLoading }] = useLazyDeleteAccountQuery();

  const onPressHeader = () => {
    // navigation.openDrawer();
  };
  const [userData, setCustomerData] = useState<any>("");
  const [IsUserLogin, setIsUserLoggedIn] = useState(false);

  const isFocoused = useIsFocused();
  const loginDataString = getLocalValue(STRINGS.STORAGE.LOGIN_DATA);
  const loginDataa = loginDataString && JSON.parse(loginDataString);
  const loginData = loginDataa?.data?.userId;

  const calculateCompletion = (data: any) => {
    if (!data) return 0;

    const fieldsToCheck = [
      "dob",
      "email",
      "firstName",
      "gender",
      "lastName",
      "phone",
    ];
    const completedFields = fieldsToCheck.filter(
      (field) => data[field] && data[field].toString().trim() !== ""
    ).length;

    return fieldsToCheck.length > 0
      ? completedFields / fieldsToCheck.length
      : 0;
  };
  const completionPercentage = calculateCompletion(userData?.data);

  useEffect(() => {
    if (isFocoused) {
      getDetails();
    }
  }, [isFocoused, userData]);

  const getDetails = async () => {
    const value: any = await getLocalValue(STRINGS.STORAGE.IS_USER_LOGGED_IN);
    const getToken = getLocalValue(STRINGS.STORAGE.TOKEN);
    getToken == undefined || (null && setIsUserLoggedIn(false));
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
  const onPressConfirm = () => {
    hideModal();
    onPressLogout();
  };

  const onPressLogout = async () => {
    setLocalValue(STRINGS.STORAGE.IS_USER_LOGGED_IN, "false");
    setLocalValue(STRINGS.STORAGE.TOKEN, "");
    setLocalValue(STRINGS.STORAGE.USER_DATA, "");
    setLocalValue(STRINGS.STORAGE.LOGIN_DATA, "");
    // clearAllLocalStorage();
    navigation.reset({
      index: 0,
      routes: [{ name: Routename.BOTTOM_TABBAR }],
    });
  };

  const onPressLogin = () => {
    setModalVisible(false), navigation.navigate(Routename.LOGIN_SCREEN);
  };

  const selectImage = async (type: any) => {
    if (type == "camera") {
      ImagePicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
        cropperCircleOverlay: true,
        compressImageMaxHeight: 300,
        compressImageMaxWidth: 400,
        compressImageQuality: 1,
      }).then((image) => {
        setImage(image.path);
        setCamera(false);
      });
    } else {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        cropperCircleOverlay: true,
        compressImageMaxHeight: 300,
        compressImageMaxWidth: 400,
        compressImageQuality: 1,
      }).then((image) => {
        refImageSheet?.current?.close();
        setImage(image.path);
        setCamera(false);
        let imageData = {
          uri: image?.path,
          name: "image11.jpg",
          type: "image/jpeg",
        };
        setuserImage(imageData);
      });
    }
  };

  const onPressProfile = () => {
    IsUserLogin
      ? navigation.navigate(Routename.EDIT_PROFILE)
      : setModalVisible(true);
  };
  const onPressMyBooking = () => {
    IsUserLogin
      ? navigation.navigate(Routename.MY_BOOKING)
      : setModalVisible(true);
  };
  const onPressAccountPrivacy = () => {
    IsUserLogin
      ? navigation.navigate(Routename.ACCOUNT_PRIVACY)
      : setModalVisible(true);
  };

  const onPressShare = async () => {
    try {
      const message = "Check out this awesome App! ";
      const url =
        Platform.OS === "android"
          ? "https://play.google.com/store/apps/details?id=com.snva.TravoMint"
          : "https://apps.apple.com/in/app/travomint/id1603093439";

      const result = await Share.share({
        message: `${message} ${url}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onPressRateUs = () => {
    setModalVisible(false);
    Linking.canOpenURL(
      Platform.OS == "android"
        ? "https://play.google.com/store/apps/details?id=com.snva.TravoMint"
        : "https://apps.apple.com/in/app/travomint/id1603093439"
    )
      .then((supported) => {
        if (supported) {
          Linking.openURL(
            Platform.OS == "android"
              ? "https://play.google.com/store/apps/details?id=com.snva.TravoMint"
              : "https://apps.apple.com/in/app/travomint/id1603093439"
          );
        } else {
          Alert.alert("Can't open the App Store.");
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  // makingProfileAnme
  const profileNameShort = `${userData?.data?.firstName?.charAt(
    0
  )}${userData?.data?.lastName?.charAt(0)}`;

  const onPressNotification=()=>{
    navigation.navigate(Routename.NOTIFICATION_SCREEN)
  }

  return !isNet ? (
    <View style={styles.container}>
      <CheckInternet />
    </View>
  ) : (
    <View style={[styles.container]}>
      <ImageBackground source={backgrounImage_2} style={styles.container}>
        <SafeAreaView style={[styles.container]}>
          <Header
            isLeftIcon
            // leftIcon={i}
            onPressLeftIcon={onPressHeader}
            isRightIcon
            rightIcon={ic_notification}
            onPressRightIcon={onPressNotification}
            headerText={"My Account"}
            isheaderText
            headerContainer={{
              paddingTop: Platform.OS === "ios" ? 0 : 10,
            }}
          />
          <ScrollView
            style={styles.subContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <AppVesionModal
              modalVisible={modalVisible}
              onCloseModal={() => setModalVisible(!modalVisible)}
              onpressButton={onPressLogin}
              btnIcon={ic_login}
              headerText="Login/Register your Account"
              subHeaderText="To access all the features of our Travomint App, Please Login."
              btnText="Login"
            />
            {/* profile container */}
            <View style={styles.profileContainer}>
              <View style={styles.row}>
                <View style={styles.row}>
                  <View style={styles.ProfileIconContainer}>
                    {image ? (
                      <FastImage
                        style={styles.profileIcon}
                        source={
                          image
                            ? {
                                uri: image,
                              }
                            : ic_profile_white
                        }
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    ) : profileNameShort !== "undefinedundefined" &&
                      profileNameShort.length > 1 ? (
                      <Text style={styles.captionText}>{profileNameShort}</Text>
                    ) : (
                      <FastImage
                        style={styles.profileIcon}
                        source={ic_profile_white}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    )}
                  </View>

                  <View style={{ marginLeft: wp("3%") }}>
                    <Text style={styles.percentageText}>
                      {userData.data == undefined || null
                        ? "Create your profile"
                        : userData?.data?.fullName || "Provide us your name"}
                    </Text>
                    {userData.data !== undefined ||
                      (null && (
                        <Text style={styles.whitSmallText2}>
                          Add your details for offers and discount.
                        </Text>
                      ))}

                    <View style={styles.row2}>
                      <Image source={ic_mail_white} style={styles.icon} />
                      <Text style={styles.whitSmallText}>
                        {userData.data?.email || "e-Mail Address"}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.row2}>
                        <Image source={ic_phn_white} style={styles.icon} />
                        <Text style={styles.whitSmallText}>
                          {userData?.data?.phone || "Phone Number"}
                        </Text>
                      </View>
                      <View style={styles.row2}>
                        <Image
                          source={ic_calender_white}
                          style={[styles.icon, { marginLeft: wp("5%") }]}
                        />
                        <Text style={styles.whitSmallText}>
                          {userData?.data?.dob || "DD/MM/YYYY"}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      userData?.data
                        ? Routename.EDIT_PROFILE
                        : Routename.LOGIN_SCREEN
                    )
                  }
                >
                  <Image source={ic_edit_white} style={styles.editIcon} />
                </TouchableOpacity>
              </View>

              <View style={styles.progressContainer}>
                <ProgressBar
                  progress={completionPercentage}
                  color={"#4caf50"} // Progress bar color
                  style={styles.progressBar}
                />
                <Text style={styles.percentageText}>
                  {(completionPercentage * 100).toFixed(0)}%
                </Text>
              </View>
            </View>
            {/* profile options */}
            <View style={{ marginVertical: hp("3%") }}>
              <View
                style={{
                  ...styles.line,
                }}
              />
              <TextWithImage
                leftIcon={ic_profile}
                headertext={"My Profile"}
                righticon={ic_arrowRight}
                containerStyle={styles.boxContainer}
                onPress={onPressProfile}
              />
              <View
                style={{
                  ...styles.line,
                }}
              />
              <TextWithImage
                leftIcon={ic_booking_active}
                headertext={"My Bookings"}
                righticon={ic_arrowRight}
                containerStyle={styles.boxContainer}
                onPress={onPressMyBooking}
              />
              <View
                style={{
                  ...styles.line,
                }}
              />
              <TextWithImage
                leftIcon={ic_ActiveOfferTab}
                headertext={"Offer"}
                righticon={ic_arrowRight}
                containerStyle={styles.boxContainer}
                onPress={() => navigation.navigate(Routename.OFFER)}
                // onPress={() => navigation.navigate(Routename.SIGNUP_SCREEN)}
              />
              <View
                style={{
                  ...styles.line,
                }}
              />
              <TextWithImage
                leftIcon={ic_booking_active}
                headertext={"Account Privacy"}
                righticon={ic_arrowRight}
                containerStyle={styles.boxContainer}
                onPress={onPressAccountPrivacy}
              />
              <View
                style={{
                  ...styles.line,
                }}
              />

              <TextWithImage
                leftIcon={ic_support}
                headertext={"Support"}
                righticon={ic_arrowRight}
                containerStyle={styles.boxContainer}
                onPress={() => navigation.navigate(Routename.SUPPORT_SCREEN)}
                // onPress={() => navigation.navigate(Routename.SIGNUP_SCREEN)}
              />
              <View
                style={{
                  ...styles.line,
                }}
              />

              {IsUserLogin && IsUserLogin !== "undefined" && (
                <TextWithImage
                  isLogout
                  leftIcon={ic_logout}
                  headertext={"Logout"}
                  righticon={ic_arrowRight}
                  containerStyle={styles.boxContainer}
                  onPress={() => setVisible(true)}
                />
              )}
              <View
                style={{
                  ...styles.line,
                }}
              />
            </View>
            <View style={styles.bottomContainer}>
              <LoginConfirmationModal
                visible={visible}
                onDismiss={hideModal}
                detailText={"Are you sure you want to logOut?"}
                phnORemail={
                  "You won't able to see your booking details & app exclusive offer"
                }
                onPressConfirm={onPressConfirm}
                onPressCancel={hideModal}
              />
              <Text onPress={onPressShare}>Share</Text>
              <View style={styles.verticalLine} />
              <Text onPress={onPressRateUs}>Rate Us</Text>
              <View style={styles.verticalLine} />
              <Image style={styles.travoLogo} source={travomint_logo} />
            </View>
            <Text style={styles.versionText}>
              App Version :{/* <Text>{DeviceInfo.getVersion()}</Text> */}
              <Text>{Platform.OS === "android" ? "32.25" : "12.52"}</Text>
            </Text>
            <Custom_Sheet
              sheetReference={refImageSheet}
              leftText={"Add your image by :-"}
              test={
                <View style={styles.gallerySelectionContainer}>
                  <View style={styles.gallerySelectionView}>
                    <Pressable
                      style={styles.galleryBox}
                      onPress={() => {
                        selectImage("camera"), refImageSheet?.current?.close();
                      }}
                    >
                      <Image
                        source={ic_camera}
                        style={styles.editProfileIcon}
                      />
                    </Pressable>
                    <Text style={styles.versionText}>Take Photo</Text>
                  </View>

                  <View style={styles.gallerySelectionView}>
                    <Pressable style={styles.galleryBox} onPress={selectImage}>
                      <Image
                        style={[styles.editProfileIcon, { tintColor: "white" }]}
                        source={ic_gallery}
                      />
                    </Pressable>
                    <Text style={styles.versionText}>Select Photo</Text>
                  </View>
                </View>
              }
              height={hp("30%")}
              onPressIcon={() => refImageSheet?.current?.close()}
            />
            {/* <Toast /> */}
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default MyAccount;
