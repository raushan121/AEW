import { StyleSheet, Platform, StatusBar } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? heightPercentageToDP("2.5%") : StatusBar.currentHeight;
export default StyleSheet.create({
statusBar: {
height: STATUSBAR_HEIGHT
}
});