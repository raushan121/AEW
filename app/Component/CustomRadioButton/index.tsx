import { View, Text, TouchableOpacity, Image } from "react-native";
import React,{FC} from "react";
import styles from "./style";
import { ic_camera } from "../../assets";


interface radioButtonProps{
  onPress?:()=>void,
  selected?:boolean,
  children?:any,
  radioButtonStyle?:any,
  radioButtonIconStyle?:any,
  isTextFirst?:boolean,
  isIcon?:boolean,
  rightText?:string,
  textAfetricon?:any,
  istextAfterIcon?:boolean,
  ishorizontal?:boolean,
  containerStyle?:any,
  radioButtonOuterStyle?:any
}

const CustomRadioButton:FC<radioButtonProps> = ({
  onPress,
  selected,
  children,
  radioButtonStyle,
  radioButtonIconStyle,
  isTextFirst,
  isIcon,
  rightText,
  textAfetricon,
  istextAfterIcon,
  ishorizontal,
  containerStyle,
  radioButtonOuterStyle
}) => {
  return isTextFirst ? (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.radioButton, radioButtonStyle]}
        activeOpacity={0.6}
      >
        {selected ? (
          <View style={[styles.radioButtonIcon, radioButtonIconStyle]} />
        ) : null}
      </TouchableOpacity>
    </View>
  ) : isIcon == true ? (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.checkButtonContainer}
        onPress={onPress}
      >
        {selected ? <Image source={ic_check} style={styles.checkIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{ maxWidth: "80%" }}
      >
        <Text style={styles.isIconText}>{rightText}</Text>
        {istextAfterIcon ? (
          <View style={styles.row}>
            <Text style={styles.whatsappText}>WhatsApp</Text>
            <Image source={textAfetricon} style={styles.whatsappIcon} />
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  ) : ishorizontal == true ? (
    <View style={[styles.horizontalContainer,containerStyle]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.radioButton,radioButtonOuterStyle,{marginRight:10}]}
        activeOpacity={0.6}
      >
        {selected ? (
          <View style={[styles.radioButtonIcon, radioButtonIconStyle]} />
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.roundButtonContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.radioContainer}
        onPress={onPress}
      >
        {selected ? (
          <View style={[styles.roundRadioButtonIcon, radioButtonIconStyle]} />
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadioButton;
