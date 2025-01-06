import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import styles from "./style";
import Routename from "../../routes/Routename";
import { ic_cross, ic_profile} from "../../assets";

interface drawerProps {}

const CustomDrawerContent: FC<drawerProps> = ({ navigation }: any) => {
  const navigateToScreen = (screen: any) => {
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView bounces={false}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profileView}
          activeOpacity={0.8}
          onPress={() => navigateToScreen(Routename.EDIT_PROFILE)}
        >
          <View style={styles.rowView}>
            <Image source={ic_profile} style={styles.profile} />
            <View style={styles.nameContainer}>
              <Text style={styles.profileText}>Guest </Text>
              <Text style={styles.mailText}>guest@yopmail.com</Text>
            </View>
          </View>
  
          </TouchableOpacity>
   
        </View>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToScreen(Routename.HOME)}
        >
          </TouchableOpacity>

      {/* Add more items here */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
