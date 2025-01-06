import Otp from "../Screen/Authentication/Otp/otpScreen";
export interface User {
  name?: string;
  loginType?: string;
  userType?: string;
  otp?: string;
  otpVerified?: string;
  otpExipredAt?: string;
  forgotPasswordLink?: string;
  linkVerified?: string;
  linkExipredAt?: string;
  role?: string;
  socialId?: string;
  isDeleted?: string;
  accessToken?: string;
  _id?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  image?: string;
  message?: string;
  file?: any;
  is_registered?: boolean;
}

export interface LoginProps {
  email?: string;
  phoneNumber?: string;
  currencyType?: string;
  countryCode?: string;
}
export interface VerifyOTPProps {
  phoneNumber?: string;
  Otp?: string;
  email?: string;
}
export interface ResendOtpProps {
  phoneNumber?: string;
  email?: string;
}
export interface uploadImage {
  file?: any;
}
export interface updateUserProps {
  firstname?: string;
  lastname?: string;
  gender?: string;
  profile_pic?: string;
}
