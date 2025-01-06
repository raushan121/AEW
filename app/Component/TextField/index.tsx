import React, { FC } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { TextInput } from "react-native-paper";
import { THEME } from "../../Utils/theme";

interface textFieldProps {
  label?: string;
  errorText?: string;
  value?: string;
  style?: any;
  onBlur?: () => void;
  onFocus?: () => void;
  onPhoneNumberChange?: () => void;
  errMsg?: string;
  onChangeText?: any;
  keyboardType?: any;
  textInputStyle?: any;
  outlineColor?: any;
  placeholder?: any;
  textContainerStyle?: any;
  autoCapitalize?: any;
  errorTextStyle?: any;
  secureTextEntry?: boolean;
  isRightIcon?: boolean;
  rightIcon?: any;
  onPressIcon?: () => void;
  editable?: boolean;
  containerStyle?:any
}

const TextField: FC<textFieldProps> = (props) => {
  const {
    label,
    errorText,
    value,
    style,
    onBlur,
    onFocus,
    onPhoneNumberChange,
    errMsg,
    onChangeText,
    keyboardType,
    textInputStyle,
    outlineColor,
    placeholder,
    textContainerStyle,
    autoCapitalize,
    errorTextStyle,
    secureTextEntry,
    isRightIcon,
    onPressIcon,
    editable,
    rightIcon,
    containerStyle,
    ...restOfProps
  } = props;

  let color = THEME.PRIMARY;
  if (errorText) {
    color = "#B00020";
  }

  return (
    <View style={[textContainerStyle,containerStyle]}>
      <TextInput
        label={label}
        mode="outlined"
        activeOutlineColor={THEME.PRIMARY}
        outlineColor={THEME.GRAY[100]}
        style={[styles.input, textInputStyle]}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        outlineStyle={styles.border}
        placeholder={placeholder}
        placeholderTextColor={THEME.GRAY[300]}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        textColor={THEME.TEXT_COLOR}
        editable={editable}
      />
      {isRightIcon && (
        <TouchableOpacity style={styles.iconContainer} onPress={onPressIcon}>
          <Image source={rightIcon} style={styles.eyeIcon} />
        </TouchableOpacity>
      )}
      {!!errorText && (
        <Text style={[styles.error, errorTextStyle]}>{errorText}</Text>
      )}
    </View>
  );
};

export default TextField;
