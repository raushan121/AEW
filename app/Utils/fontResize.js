import {PixelRatio, Platform,Dimensions} from 'react-native';
// import {SCREEN_SIZE} from './constants';
const SCREEN_SIZE = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  paddingSide: 22,
  paddingRadius: 12,
  paddingNormal: 8,
};
export function fontResize(fontSize) {
  const DEFAULT_RESIZE_SCREEN = SCREEN_SIZE.width,
    scale = SCREEN_SIZE.width / DEFAULT_RESIZE_SCREEN,
    newSize = fontSize * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}