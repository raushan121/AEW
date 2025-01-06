import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { backgrounImage, ic_adult, ic_arrowBack, ic_delete, ic_offer } from "../../../assets";
import styles from "./style";

import { SwipeListView } from "react-native-swipe-list-view";
import { NotificationScreen } from "../../../Utils/dummydata";
import NotchArea from "../../../Utils/SafeAreaView";
import Header from "../../../Component/Header";
// import { useLazyHnadleAllNotificationsQuery } from "../../../redux/notification-api-slice";
import { useIsFocused } from "@react-navigation/native";
import { getLocalValue } from "../../../Utils/asyncStorage";
import STRINGS from "../../../Constants/string";

const Notification = ({ navigation }:any) => {
  const onPressBack = () => {
    navigation.goBack();
  };
  const value: any = getLocalValue(STRINGS.STORAGE.DEVICE_TOKEN);
  const [allNotification,setallNotification]=useState([])

  const isFocused=useIsFocused()
  // const [hnadleAllNotifications, { isinstantBlogLoading }]: any =
  // useLazyHnadleAllNotificationsQuery();
//     useEffect(()=>{
// if(isFocused){
//   getallNotification()
// }
    // },[isFocused,value])
    // const getallNotification = async () => {
    //   try {
    //     const result: any = await hnadleAllNotifications(value).unwrap();
    //     setallNotification(result?.response)

    //     if (result?.status == true) {
       
    //     }
    //   } catch (error: any) {
    //       console.log("errInAll",error)
    //   }
    // };
  //  shorting of datetime
  function formatNotificationTime(dateTime) {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    const notificationDate = dateTime.toDateString();

    if (notificationDate === now.toDateString()) {
      // The notification date is today
      const hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    } else if (notificationDate === yesterday.toDateString()) {
      // The notification date is yesterday
      return "Yesterday";
    } else {
      // The notification date is neither today nor yesterday
      const options = { year: "numeric", month: "short", day: "numeric" };
      return dateTime.toLocaleDateString(undefined, options);
    }
  }
  const formattedNotifications = NotificationScreen.map((notification) => ({
    ...notification,
    formattedTime: formatNotificationTime(notification.dateTime),
  }));

  const [listData, setListData] = useState(
    formattedNotifications.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      details: NotificationItem.details,
      time: NotificationItem?.formattedTime,
      icon: NotificationItem?.icon,
    }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
  };
  const onRightActionStatusChange = (rowKey) => {
  };

  const onRightAction = (rowKey) => {
  };

  const VisibleItem = (props) => {
    const { data, rowHeightAnimatedValue, removeRow, rightActionState } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }
    return (
      <Animated.View
        style={[styles.rowFront, { height: rowHeightAnimatedValue }]}
      >
        <Image source={data?.item?.icon||ic_offer} style={styles.lefticon} />
        <View>
          <View style={styles.row}>
            <Text style={styles.notificationHeaderText}>
              {data?.item?.notification?.title}
            </Text>
            <Text style={styles.timeText}>{data?.item?.time}</Text>
          </View>
          <Text numberOfLines={2} style={styles.notificationText}>
            {data?.item?.notification?.body}
          </Text>
        </View>
      </Animated.View>
    );
  };

  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(70);

    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  const HiddenItemWithActions = (props) => {
    const {
      swipeAnimatedValue,
      leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onDelete,
    } = props;

    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false,
      }).start();
    }

    return (
      <Animated.View
        style={[styles.rowBack, { height: rowHeightAnimatedValue }]}
      >
        {!leftActionActivated && (
          <Animated.View
            style={[
              styles.backRightBtn,
              styles.backRightBtnRight,
              {
                flex: 1,
                width: rowActionAnimatedValue,
              },
            ]}
          >
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={onDelete}
            >
              <Animated.View
                style={[
                  styles.trash,
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: "clamp",
                        }),
                      },
                    ],
                  },
                ]}
              >
                <View style={styles.dltBox}>
                <Image source={ic_delete} style={styles.lefticon}/>
                </View>
         
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        )}
      </Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <ImageBackground source={backgrounImage} style={styles.container}>
      <SafeAreaView style={[NotchArea.AndroidSafeArea, styles.container]}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.headerContainer}>
        <Header
          isLeftIcon
          leftIcon={ic_arrowBack}
          onPressLeftIcon={onPressBack}
          headerTextStyle={styles.header}
          isHeaderImage
        />
        </View>
   
        <SwipeListView
          data={allNotification?.notifications||[]}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-150}
          // onRowDidOpen={onRowDidOpen}
          disableRightSwipe={true}
          disableLeftSwipe={true}
          rightActivationValue={-200}
          rightActionValue={-500}
          onRightAction={onRightAction}
          onRightActionStatusChange={onRightActionStatusChange}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Notification;
