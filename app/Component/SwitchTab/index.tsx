import {View, Text, TouchableOpacity} from 'react-native';
import React,{FC} from 'react';
import styles from './style';

interface SwitchTabProps{
  loginViewContainer?:any,
  signupViewContainer?:any,
  onPressLeftButton?:()=>void,
  onPressRightButton?:()=>void,
  activeOpacity?:any,
  leftText?:string,
  rightText?:string
}

const SwitchTab:FC<SwitchTabProps> = ({
  loginViewContainer,
  signupViewContainer,
  onPressLeftButton,
  onPressRightButton,
  activeOpacity,
  leftText,
  rightText
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={[styles.loginView, loginViewContainer]}
        onPress={onPressLeftButton}>
        <Text style={styles.loginText}>{leftText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={[styles.signupView, signupViewContainer]}
        onPress={onPressRightButton}>
        <Text style={styles.loginText}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SwitchTab;
