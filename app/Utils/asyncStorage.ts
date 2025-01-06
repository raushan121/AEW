// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const getLocalValue = async (key: string) => {
//   try {
//     const data = await AsyncStorage.getItem(key);
//     if (data !== null) {
//       return data;
//     }
//   } catch (error) {}
// };

// export const setLocalValue = async (key: string, value: string) => {
//   try {
//     const data = await AsyncStorage.setItem(key, value);
//     if (data !== null) {
//       return data;
//     }
//   } catch (error) {}
// };

// export const clearAllLocalStorage = async () => {
//   try {
//     await AsyncStorage.clear();
//   } catch (error) {}
// };

import { MMKV } from "react-native-mmkv";

// Create a new MMKV storage instance.
export const storage = new MMKV();

export const getLocalValue = (key:string) => {
  try {
    const data = storage.getString(key);
    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.error('Error in getLocalValue:', error);
  }
};

export const setLocalValue = (key: string, value: any) => {
  try {
    storage.set(key, value);
  } catch (error) {
    console.error('Error in setLocalValue:', error);
  }
};

export const clearAllLocalStorage = () => {
  try {
    storage.clearAll();
  } catch (error) {
    console.error('Error in clearAllLocalStorage:', error);
  }
};

