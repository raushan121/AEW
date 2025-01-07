import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import styles from "./style";
import { ic_arrowRight, ic_cancellation } from "../../assets";
import LottieView from "lottie-react-native";

interface TextImageProps {
  onPress?: any;
  leftIcon?: any;
  righticon?: any;
  headertext?: any;
  lotteeicon?: any;
  loteeIconStyle?: any;
  isLottee?: boolean;
  containerStyle?: any;
  lefticonStyle?: any;
  rightIconStyle?: any;
  isLogout?: boolean;
  textStyle?:object
}

const TextWithImage: FC<TextImageProps> = ({
  onPress,
  leftIcon,
  righticon,
  headertext,
  lotteeicon,
  loteeIconStyle,
  isLottee,
  containerStyle,
  lefticonStyle,
  rightIconStyle,
  isLogout,
  textStyle
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.row}>
        {isLottee ? (
          <LottieView
            style={[styles.loteeIcon, loteeIconStyle]}
            source={lotteeicon}
            autoPlay
            loop
          />
        ) : (
          <Image style={[styles.leftIcon, lefticonStyle]} source={leftIcon} />
        )}
        <Text style={[styles.text,textStyle]}>{headertext}</Text>
      </View>
      {!isLogout && (
        <Image style={[styles.rightIcon, rightIconStyle]} source={righticon} />
      )}
    </TouchableOpacity>
  );
};

export default TextWithImage;
