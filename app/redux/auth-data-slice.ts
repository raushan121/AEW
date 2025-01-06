import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  isLogin?: boolean;
  loginData?: any;
  LoginTypeData?: any;
  deviceData?: any;
  createUserData?:any;

}
const initialState: PlayerState = {
  isLogin: false,
  loginData: {},
  LoginTypeData: {},
  deviceData: {},
  createUserData:{}
};

const authData = createSlice({
  name: "authData",
  initialState,
  reducers: {
    isLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    handleLoginTypeData(state, action: PayloadAction<any>) {
      state.LoginTypeData = action.payload;
    },
    handledeviceData(state, action: PayloadAction<any>) {
      state.deviceData = action.payload;
    },
    handleCreateUserData(state, action: PayloadAction<any>) {
      state.createUserData = action.payload;
    },
    handleLoginData(state, action: PayloadAction<any>) {
      state.loginData = action.payload;
    },
  },
});

export const { isLogin, 
  handleLoginTypeData, 
  handledeviceData ,
  handleCreateUserData,
  handleLoginData
} =
  authData.actions;
export default authData.reducer;
