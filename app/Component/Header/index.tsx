import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import React, { FC } from "react";
import styles from "./style";
import { ic_logo, travomint_logo } from "../../assets";
// import { Switch } from 'react-native-paper';
interface HeaderProps {
  headerContainer?: any;
  isLeftIcon?: boolean;
  leftIcon?: any;
  onPressLeftIcon?: any;
  leftIconStyle?: any;
  headerTextStyle?: any;
  headerText?: string;
  onPressRightIcon?: any;
  rightIconStyle?: any;
  rightIcon?: any;
  isRightIcon?: boolean;
  isHeaderImage?: boolean;
  isheaderText?: boolean;
  onPress?: any;
  isSwitchOn?: boolean;
  onToggleSwitch?: any;
  isSwitch?: boolean;
}

const Header: FC<HeaderProps> = ({
  headerContainer,
  isLeftIcon,
  leftIcon,
  onPressLeftIcon,
  leftIconStyle,
  headerTextStyle,
  headerText,
  onPressRightIcon,
  rightIconStyle,
  rightIcon,
  isRightIcon,
  isHeaderImage,
  isheaderText,
  onPress,
  isSwitchOn,
  onToggleSwitch,
  isSwitch,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, headerContainer]}>
        {isLeftIcon && (
          <TouchableOpacity onPress={onPressLeftIcon}>
            <Image source={leftIcon} style={[styles.leftIcon, leftIconStyle]} />
          </TouchableOpacity>
        )}
        {isHeaderImage && <Image source={ic_logo} style={styles.headerIcon} />}
        {isheaderText && (
          <Text style={[styles.headerTextt, headerTextStyle]}>
            {headerText}
          </Text>
        )}

        {isRightIcon && (
          <TouchableOpacity
            onPress={onPressRightIcon}
            style={styles.rightIconContainer}
          >
            <Image
              source={rightIcon}
              style={[styles.rightIconIcon, rightIconStyle]}
            />
          </TouchableOpacity>
        )}
        {isSwitch && (
          <View style={styles.rightIconContainer}>
            <Switch
              style={{ transform: [{ scaleX: 1.0 }, { scaleY: 0.9 }] }}
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;
