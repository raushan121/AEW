import {
  View,
  ImageBackground,
  StatusBar,
  Image,
  Linking,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { THEME } from "../../../Utils/theme";
import styles from "./style";
import {
  backgrounImage,
  backgrounImage_2,
  ic_arrowBack,
  ic_arrowRight,
  ic_call,
  ic_email,
  ic_hey,
  ic_message,
  ic_supportBg1,
  ic_supportBg2,
  ic_supportGirl,
  ic_Supportscreenimage,
} from "../../../assets";
import Header from "../../../Component/Header/header";
import NotchArea from "../../../Utils/SafeAreaView";
import GeneralStatusBarColor from "../../../Component/styles/GeneralStatusBarColor";
// import TextWithImage from "../../../Component/TextWithImage";
import { useAppSelector } from "../../../hooks/redux-hooks";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
const TextWithImage = ({ onPress, leftIcon, headertext, descText }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        backgroundColor: THEME.WHITE_COLOR,
        paddingVertical: 15,
        paddingHorizontal: 20,
        shadowColor: "#000", // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow position (horizontal, vertical)
        shadowOpacity: 0.05, // Shadow transparency
        shadowRadius: 8, // Shadow spread
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={leftIcon} />
        <View>
          <Text
            style={{
              ...styles.text,
            }}
          >
            {headertext}
          </Text>
          <Text
            style={{
              ...styles.descText,
            }}
          >
            {descText}
          </Text>
        </View>
      </View>
      <Image style={[styles.rightIcon]} source={ic_arrowRight} />
    </TouchableOpacity>
  );
};
const SupportScreen = ({ navigation }: any) => {
  const onPressHeader = () => {
    navigation.goBack();
  };
  const customermobilenumber = useAppSelector(
    (state) => state?.flightData?.countryPhnData
  );
  const currencyData = useAppSelector(
    (state) => state?.flightData?.currencyData
  );
  const onPressCall = async () => {
    const phoneNumber =
      Object.keys(customermobilenumber).length === 0
        ? "+911204814491"
        : customermobilenumber;

    const supported = await Linking.canOpenURL(`tel:${phoneNumber}`);
    if (supported) {
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      Alert.alert("Error", "Phone call is not supported on this device.");
    }
  };

  const onPressEmail = async () => {
    const email =
      currencyData && currencyData?.text == "INR"
        ? "cs@travomint.com"
        : "care@travomint.com";
    const supported = await Linking.canOpenURL(`mailto:${email}`);
    if (supported) {
      Linking.openURL(`mailto:${email}`);
    } else {
      Alert.alert("Error", "Email is not supported on this device.");
    }
  };

  const onPressChat = () => {
    Alert.alert("Coming Soon", "Chat facilities will be available soon.");
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
            headerText={"Need help?"}
            isheaderText
            headerTextStyle={{
              paddingLeft: widthPercentageToDP("20%"),
              color: THEME.BLUE[300],
            }}
            headerContainer={{
              justifyContent: "flex-start",
              paddingTop: 0,
            }}
          />
          <View style={styles.supportimageContainer}>
            <ImageBackground
              source={ic_Supportscreenimage}
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
                  24/7 Help Centre
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
                  Tell us how we can help
                </Text>
                <Image source={ic_hey} />
              </View>
              <Text
                style={{
                  ...styles.tellusdescText,
                }}
              >
                Our crew of superheroes are standing by for service & support!
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: heightPercentageToDP("18%"),
              marginBottom: 30,
            }}
          >
            <TextWithImage
              leftIcon={ic_message}
              headertext={"Chat"}
              descText={"Start a conversation now!"}
              onPress={onPressChat}
            />
            <TextWithImage
              leftIcon={ic_call}
              headertext={"Call"}
              descText={"Talk to us for Quick Resolution."}
              onPress={onPressCall}
            />
            <TextWithImage
              leftIcon={ic_email}
              headertext={"E-Mail"}
              descText={"Get solution beamed to your inbox."}
              onPress={onPressEmail}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SupportScreen;
