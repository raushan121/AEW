import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { FC } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import RowText from "../RowText";
import { THEME } from "../../Utils/theme";
import { fontResize } from "../../Utils/fontResize";
import { ic_back } from "../../assets";

interface sheetProps {
  sheetReference: any;
  test?: any;
  height?: number;
  leftText?: string;
  onPressIcon?: () => void;
  isLeftIcon?: boolean;
  leftIcon?: any;
}

const Custom_Sheet: FC<sheetProps> = ({
  sheetReference,
  test,
  height,
  leftText,
  onPressIcon,
  isLeftIcon,
  leftIcon,
}) => {
  return (
    <View>
      <RBSheet
        ref={sheetReference}
        animationType="fade"
        // onClose={onPressApply}
        closeOnPressMask={true}
        closeOnDragDown={true}
        height={height}
        customStyles={{
          wrapper: {
            backgroundColor: "#1C1C1E60",
            shadowOpacity: 0.5,
          },
          container: {
            backgroundColor: THEME.WHITE_COLOR,
            borderTopEndRadius: 25,
            borderTopStartRadius: 25,
            paddingHorizontal: widthPercentageToDP("5%"),
            paddingVertical: heightPercentageToDP("1%"),
          },
        }}
      >
        <ScrollView
          style={{ flex: 1 }}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <TouchableWithoutFeedback>
            <View>
              <RowText
                leftText={leftText}
                isLeftIcon={isLeftIcon}
                leftIconStyle={styles.leftIconStyle}
                leftIcon={leftIcon}
                leftTextStyle={styles.boldText}
                isRightIcon
                rightIcon={ic_back}
                iconStyle={{ tintColor: THEME.PRIMARY }}
                onPressIcon={onPressIcon}
              />
              <View style={styles.line} />
              {test}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </RBSheet>
    </View>
  );
};

export default Custom_Sheet;

const styles = StyleSheet.create({
  boldText: {
    fontSize: fontResize(16),
    fontWeight: "800",
  },
  leftIconStyle: {
    marginRight: widthPercentageToDP("3%"),
  },
});
