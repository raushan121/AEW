import React, { useState, useEffect, FC } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
import DatePicker from "react-native-date-picker";
import moment from "moment";

import { ic_calender } from "../../../assets";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../Utils/theme";
import { fontResize } from "../../../Utils/fontResize";
import DateTimePicker from "@react-native-community/datetimepicker";
import HomeScreenTextInput from "../../../Component/TextField/homeScreenTextInput";

interface textFielProps {
  onChangeText?: any;
  textInputStyle?: any;
  errorText?: string;
  labelText?: string;
  datePickerContainer?: any;
  minimumDate?: any;
  maximumDate?: any;
  dateValue?: any;
}

const TextFieldWithDatePicker: FC<textFielProps> = ({
  onChangeText,
  errorText,
  labelText,
  datePickerContainer,
  minimumDate,
  maximumDate,
  dateValue,
}) => {
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    dateValue ? new Date(dateValue) : undefined
  );
  const [isDepartureOpen, setisDepartureOpen] = useState<boolean>(false);
  const [isDate, setisDate] = useState<boolean>(!!dateValue);

  useEffect(() => {
    if (dateValue) {
      const parsedDate = moment(dateValue, "YYYY-MM-DD", true).isValid()
        ? new Date(dateValue)
        : undefined;
      setDepartureDate(parsedDate);
      setisDate(!!parsedDate);
    }
  }, [dateValue]);

  const showDatePicker = () => {
    setisDepartureOpen(true);
  };

  const hideDatePicker = () => {
    setisDepartureOpen(false);
  };

  const handleDateChange = (date: any) => {
    if (date) {
      onChangeText(date);
      setDepartureDate(date);
      setisDate(true);
    }
    hideDatePicker();
  };

  const handleDateChangeAndroid = (
    event: any,
    selectedDate: Date | undefined
  ) => {
    setisDepartureOpen(false);
    if (event.type === "set" && selectedDate) {
      // Only update when user confirms the date
      setDepartureDate(selectedDate);
      onChangeText(selectedDate);
      setisDate(true);
    }
    // If dismissed, do nothing and close the picker
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <HomeScreenTextInput
          textInputContainer={[styles.returnDateContainer, datePickerContainer]}
          textinputView={styles.departureTextView}
          labelText={labelText}
          leftIcon={ic_calender}
          leftiocnStyle={styles.leftIcon}
          value={
            isDate && departureDate
              ? moment(departureDate).format("DD MMMM, YYYY")
              : "YYYY-MM-DD"
          }
          headerTextStyle={styles.dobText}
          onPressTextInput={showDatePicker}
        />
      </TouchableOpacity>

      {Platform.OS === "android" && isDepartureOpen && (
        <DateTimePicker
          value={departureDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChangeAndroid}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      )}

      {Platform.OS === "ios" && isDepartureOpen && (
        <DatePicker
          modal
          mode="date"
          open={isDepartureOpen}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          date={departureDate || new Date()}
          onConfirm={(date) => {
            setDepartureDate(date);
            handleDateChange(date);
            setisDate(true);
          }}
          onCancel={hideDatePicker} // Close picker without updating state
        />
      )}

      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  leftIcon: {
    height: widthPercentageToDP("5%"),
    width: widthPercentageToDP("5%"),
  },
  returnDateContainer: {
    marginTop: heightPercentageToDP("1.4%"),
    borderRadius: widthPercentageToDP("4%"),
    width: widthPercentageToDP("88%"),
    backgroundColor: THEME.WHITE_COLOR,
    borderWidth: widthPercentageToDP("0.5%"),
    borderColor: THEME.GRAY[200],
  },
  errorText: {
    fontSize: fontResize(11),
    color: THEME.PRIMARY,
    marginLeft: widthPercentageToDP("4%"),
    marginTop: -heightPercentageToDP("1.5%"),
    marginBottom: heightPercentageToDP("0.5%"),
  },
  departureTextView: {
    fontSize: 1,
  },
});

export default TextFieldWithDatePicker;
