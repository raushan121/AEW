

import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
  Platform,
  Share,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";


import styles from "./style";

import Toast from "react-native-toast-message";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../Utils/globalStyle";
import NotchArea from "../../Utils/SafeAreaView";
import { THEME } from "../../Utils/theme";
import { fontResize } from "../../Utils/fontResize";
import { ic_back } from "../../assets";


const PDFReadScreen = () => {

  const navigation = useNavigation();
  const [blogsData, setBlogsData] = useState([]);
  const { width } = Dimensions.get("window");
  const route = useRoute();

  const [isApi, setIsApi] = useState(false);
  const [ApiData, setApiData] = useState("");
  const [fontSize, setFontSize] = useState(14); // Manage the font size state
  const scrollViewRef = useRef(null);


  const min = 8000;
  const max = 10000;
  const blogViewCount = Math.floor(Math.random() * (max - min + 1)) + min;


  const onPressShare = async () => {
    try {
      const message = "Check out this content! ";
      const url =
        Platform.OS === "android"
          ? "https://www.travomint.com/article"
          : "https://www.travomint.com/article";

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
  const onPressCard = (item: any, blogViewCount: any) => {
    setIsApi(true);
    setApiData(item);
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  };


  const onPressBack = () => {
    navigation.goBack();
  };



  return (
    <SafeAreaView style={[globalStyles.container, NotchArea.AndroidSafeArea]}>
      <StatusBar
        barStyle={"dark-content"}
        animated={true}
        backgroundColor={THEME.TEXT_COLOR}
      />

<View style={[globalStyles.row2,{marginBottom:hp("3%")}]}>
        <TouchableOpacity onPress={onPressBack}>
          <Image source={ic_back}/>
        </TouchableOpacity>
      <Text style={styles.header}>PDFReadScreen</Text>
      </View>
      <ScrollView style={{ flex: 1 }} ref={scrollViewRef}>
        {/* <FastImage
          source={
            isApi
              ? ApiData?.imgUrl
                ? { uri: ApiData?.imgUrl }
                : imageUrl
              : blogs?.imgUrl
                ? { uri: blogs?.imgUrl }
                : imageUrl
          }
          resizeMode={FastImage.resizeMode.cover}
          style={styles.blogsImage}
        /> */}
        <View style={styles.fontBtnSizeContainer}>
          <Text>Read Mode</Text>
          <TouchableOpacity
            onPress={() => setFontSize((prevSize) => prevSize + 1)}
            style={styles.fontSizeButton}
          >
            <Text style={styles.fontSizeButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setFontSize((prevSize) => Math.max(prevSize - 1, 10))
            }
            style={styles.fontSizeButton}
          >
            <Text style={styles.fontSizeButtonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.categorytext}>
            {"this is blog heading"}
            {/* {isApi ? ApiData?.categoryName : blogs?.categoryName} */}
          </Text>
          <Text style={styles.headerText}>
            {"This is blog Title"}
          </Text>
       
          <Text style={[styles.descriptionText, { fontSize }]}>
            {"Life is a series of moments, each one unique and fleeting. Sometimes, the simplest things can leave the greatest impact—a shared laugh, a quiet walk, or the sound of rain on the roof. In our rush to achieve and accomplish, it’s easy to overlook these small treasures that make life meaningful. Every sunrise carries the promise of a new beginning, while every sunset reminds us to pause and reflect. People we meet along the way shape our journey in unexpected ways, some staying for a lifetime, others teaching us lessons before moving on. Change is the only constant, and in embracing it, we find growth and resilience. Life may not always go as planned, but its unpredictability is what makes it so beautifully human. At its core, life is not about the destination but about the experiences that fill the space in between"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 10,
            }}
          ></View>
        </View>
        <Text
          style={[
            styles.headerText,
            {
              marginLeft: wp("5%"),
              marginVertical: hp("1%"),
              fontSize: fontResize(18),
              fontWeight: "bold",
              color: "#373E6C",
            },
          ]}
        >
          More Blogs
        </Text>
        <ScrollView
          horizontal
          style={{
            flex: 1,
            flexDirection: "row",
            marginHorizontal: wp("4%"),
          }}
        >

        </ScrollView>
      </ScrollView>

    </SafeAreaView>
  );
};

export default PDFReadScreen;
