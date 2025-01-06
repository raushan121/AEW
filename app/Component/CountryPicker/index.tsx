import React, { useState, FC } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { THEME } from "../../Utils/theme";
import CountryPicker, { Flag } from "react-native-country-picker-modal";
import { ic_down } from "../../assets";
import { TextInput } from "react-native-paper";
import STRINGS from "../../Constants/string";
import { useAppSelector } from "../../hooks/redux-hooks";
interface countryPickerProps {
  props: any;
  label?: string;
  errorText?: string;
  value?: string;
  style?: any;
  onBlur?: () => void;
  onFocus?: () => void;
  onPhoneNumberChange?: any;
  errMsg?: string;
  onChangeText?: any;
  outlineColor?: string;
  countryPickerContainer?: any;
  inputStyle?:any
}

const CountryPickerTextInput: FC<countryPickerProps> = (props) => {
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
    outlineColor,
    countryPickerContainer,
    inputStyle,
    ...restOfProps
  } = props;

  const travelerData = useAppSelector(
    (state) => state?.flightData?.travelerData
  );

  const currencyData = useAppSelector(
    (state) => state?.flightData?.currencyData
  );
  // console.log("lll11", currencyData);

  let color = THEME.PRIMARY;
  if (errorText) {
    color = "#B00020";
  }

  const CustomFlag = ({ countryCode }: any) => (
    <Flag countryCode={countryCode} flagSize={15} />
  );

  let countryCodePhn = "";
  let callingCode = "";
  var moneySignData =
    currencyData?.text == "INR"
      ? ((countryCodePhn = "IN"), (callingCode = "91"))
      : currencyData?.text == "AUD"
      ? ((countryCodePhn = "AU"), (callingCode = "61"))
      : currencyData?.text == "AED"
      ? ((countryCodePhn = "AE"), (callingCode = "971"))
      : currencyData?.text == "GBP"
      ? ((countryCodePhn = "GB"), (callingCode = "44"))
      : currencyData?.text == "USD"
      ? ((countryCodePhn = "US"), (callingCode = "1"))
      : currencyData?.text == "CAD"
      ? ((countryCodePhn = "CA"), (callingCode = "1"))
      : currencyData?.text == "EUR"
      ? ((countryCodePhn = "EU"), (callingCode = "44"))
      : ((countryCodePhn = "IN"), (callingCode = "91"));
  const [countryCode, setCountryCode] = useState(callingCode || "");
  const [code, setCode] = useState(countryCodePhn);
  const [isVisible, setVisible] = useState(false);

  const onSelect = (country: any) => {
    setCountryCode(country?.callingCode[0]);
    setCode(country?.cca2);
  };

  // setCountryCode(country?.callingCode[0]);
  // setCode(country?.cca2);

  return (
    <View>
      <TouchableOpacity
        style={[styles.countryPicker, countryPickerContainer]}
        onPress={() => {
          setVisible(true);
        }}
      >
        <CountryPicker
          renderFlagButton={CustomFlag}
          containerButtonStyle={styles.btn}
          withEmoji={false}
          withCallingCode={true}
          withFilter={true}
          countryCode={code}
          visible={isVisible}
          onClose={() => {
            setVisible(false);
          }}
          withFlag={true}
          onSelect={onSelect}
        />
        <Image style={styles.downIcone} source={ic_down} />
        <Text style={styles.countryCodeText}>+{countryCode}</Text>
      </TouchableOpacity>
      <TextInput
        label={label}
        mode="outlined"
        outlineColor={[THEME.TEXT_COLOR, outlineColor]}
        activeOutlineColor={THEME.TEXT_COLOR}
        style={[styles.input,inputStyle]}
        value={value}
        keyboardType="phone-pad"
        onChangeText={onChangeText}
        outlineStyle={styles.border}
        placeholderTextColor={THEME.TEXT_COLOR}
      />
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

export default CountryPickerTextInput;
