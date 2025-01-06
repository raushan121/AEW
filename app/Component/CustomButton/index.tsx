import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import styles from "./styles";

interface buttonProps {
  onPressButton?: () => void;
  btnText?: string;
  btnStyles?: any;
  btnTextStyle?: any;
}

const Button: FC<buttonProps> = ({
  btnStyles,
  btnText,
  btnTextStyle,
  onPressButton,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, btnStyles]}
      onPress={onPressButton}
    >
      <Text style={[styles.btnText, btnTextStyle]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;
