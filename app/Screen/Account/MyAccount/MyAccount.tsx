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
} from "react-native";
import React, { useRef, useState } from "react";
import { THEME } from "../../../Utils/theme";
import styles from "./style";
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

import { getLocalValue, setLocalValue } from "../../../Utils/asyncStorage";
import { useLazyLogoutUserQuery } from "../../../redux/auth-api-slice";
import STRINGS from "../../../Constants/string";
import Routename from "../../../routes/Routename";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { ic_account_active, ic_back, ic_comp_logo, ic_daily, ic_edit, ic_home_inactive, ic_logout, ic_notification, ic_profile, ic_right_aerrow, ic_subscription } from "../../../assets";
import Custom_Sheet from "../../../Component/CustomBottomSheet";

const MyAccount = () => {
  const [logoutUser, { isLoading: islogOutLoading }] = useLazyLogoutUserQuery();
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [isCamera, setCamera] = useState(false);
  const [userImage, setuserImage] = useState({});
  const [image, setImage] = useState("");
  const refImageSheet = useRef();
  const navigation = useNavigation();
  const onPressHeader = () => {
    // navigation.openDrawer();
  };
  const onPressLogout = async () => {
    setLocalValue(STRINGS.STORAGE.IS_USER_LOGGED_IN, "false");
    setLocalValue(STRINGS.STORAGE.TOKEN, "");
    setLocalValue(STRINGS.STORAGE.USER_DATA, "");
    navigation.reset({
      index: 0,
      routes: [{ name: Routename.BOTTOM_TABBAR }],
    });
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

        // uploadImageApi(imageData);
      });
    }
  };

  const onPressEditProfile = () => {
    refImageSheet?.current?.open();
  };

  return (
    <View style={[styles.container, NotchArea.AndroidSafeArea]}>
      <StatusBar
        barStyle={"dark-content"}
        animated={true}
        backgroundColor={THEME.TEXT_COLOR}
      />
      <GeneralStatusBarColor backgroundColor={THEME.TEXT_COLOR} />
      {/* <ImageBackground source={backgrounImage} style={styles.container}> */}
        <Header
          isLeftIcon
          isRightIcon
          rightIcon={ic_notification}
          headerText={"My Account"}
          isheaderText
        />
        <ScrollView
          style={styles.subContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <TouchableOpacity style={{ alignSelf: "center" }} activeOpacity={1}>
            <FastImage
              style={styles.profileIcon}
              source={
                image
                  ? {
                      uri: image,
                    }
                  : // : userData?.image
                    //   ? { uri: `${END_POINTS.ASSET_URL}images/${userData?.image}` }
                    ic_account_active
              }
              resizeMode={FastImage.resizeMode.contain}
            />
            <Pressable
              style={styles.editProfileIconContainer}
              onPress={onPressEditProfile}
              // onPress={(type) => selectImage(type)}
            >
              <Image source={ic_edit} style={styles.editProfileIcon} />
            </Pressable>
          </TouchableOpacity>
          <Text style={styles.profileNameText}>Guest</Text>
          <View style={{ marginVertical: hp("3%") }}>
            <TextWithImage
              leftIcon={ic_subscription}
              headertext={"manage my Subscription"}
              righticon={ic_right_aerrow}
              containerStyle={styles.boxContainer}
              // onPress={() => navigation.navigate(Routename.LOGIN_SCREEN)}
              // onPress={() => navigation.navigate(Routename.SIGNUP_SCREEN)}
            />
            <TextWithImage
              leftIcon={ic_profile}
              headertext={"My Profile"}
              righticon={ic_right_aerrow}
              containerStyle={styles.boxContainer}
              onPress={() => navigation.navigate(Routename.EDIT_PROFILE)}
            />
           
            <TextWithImage
              isLogout
              leftIcon={ic_logout}
              headertext={"Logout"}
              righticon={ic_daily}
              containerStyle={styles.boxContainer}
              onPress={() => onPressLogout()}
            />
          </View>
          <View style={styles.bottomContainer}>
            <Text>Share</Text>
            <View style={styles.verticalLine} />
            <Text>Rate Us</Text>
            <View style={styles.verticalLine} />
            <Image style={styles.travoLogo} source={ic_comp_logo} />
          </View>
          <Text style={styles.versionText}>
            App Version : <Text>1.0.0</Text>
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
                    <Image source={ic_home_inactive} style={styles.editProfileIcon} />
                  </Pressable>
                  <Text style={styles.versionText}>Take Photo</Text>
                </View>
                <View style={styles.gallerySelectionView}>
                  <Pressable style={styles.galleryBox} onPress={selectImage}>
                    <Image
                      style={[styles.editProfileIcon, { tintColor: "white" }]}
                      source={ic_daily}
                    />
                  </Pressable>
                  <Text style={styles.versionText}>Select Photo</Text>
                </View>
              </View>
              // <CancellationPolicyScreen sheetReference={refCancellationPolicy} />
            }
            height={hp("30%")}
            onPressIcon={() => refImageSheet?.current?.close()}
          />
          <Toast />
        </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
};

export default MyAccount;
