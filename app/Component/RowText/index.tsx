import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React, { FC } from "react";
import styles from "./style";
interface rowTextProps {
  leftText?: string;
  rightText?: string;
  isLeftIcon?: boolean;
  leftIcon?: any;
  leftTextStyle?: any;
  isRightIcon?: boolean;
  rightIcon?: any;
  iconStyle?: any;
  onPressIcon?: any;
  rightTextStyle?: any;
  iconcontainer?: any;
  containerStyle?: any;
  onPress?: () => void;
  leftIconStyle?: any;
}

const RowText: FC<rowTextProps> = ({
  leftText,
  rightText,
  rightIcon,
  leftTextStyle,
  rightTextStyle,
  isLeftIcon,
  isRightIcon,
  leftIcon,
  onPressIcon,
  iconcontainer,
  containerStyle,
  onPress,
  iconStyle,
  leftIconStyle,
}) => {
  return (
    <TouchableWithoutFeedback
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <View style={[styles.container, containerStyle]}>
        <View style={styles.row}>
          {isLeftIcon && (
            <Image style={[styles.icon, leftIconStyle]} source={leftIcon} />
          )}
          <Text style={[styles.Text, leftTextStyle]}>{leftText}</Text>
        </View>

        {isRightIcon ? (
          <Pressable onPress={onPressIcon} style={iconcontainer}>
            <Image style={[styles.icon, iconStyle]} source={rightIcon} />
          </Pressable>
        ) : (
          <Text style={[styles.Text, rightTextStyle]}>{rightText}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RowText;
