import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, VerifyOTPProps, LoginProps } from "../models/User";
import { END_POINTS, METHOD, REDUCERS } from "../redux/endpoints";
import { BaseModel } from "../models/BaseMode";
import STRINGS from "./string";
import { getLocalValue } from "../Utils/asyncStorage";
import session from "./session";

export const authSlice = createApi({
  reducerPath: REDUCERS.AUTH,
  baseQuery: fetchBaseQuery({
    baseUrl: END_POINTS.BASE_URL,
    prepareHeaders: async (headers, { endpoint }) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      LoginUserByPhnoMail: builder.mutation<BaseModel<User>, LoginProps>({
        query: (params) => {
          return {
            url: END_POINTS.LOGIN_BY_MAIL_PHONE,
            method: METHOD.POST,
            body: params ,
          };
        },
      }),

      verifyOtp: builder.mutation<BaseModel<User>, VerifyOTPProps>({
        query: (params) => {
          return {
            url: END_POINTS.OTP_ENDPOINT,
            method: METHOD.POST,
            body:params,
          };
        },
      }),
      signUpUserByMailOrPhn: builder.mutation<BaseModel<User>, VerifyOTPProps>({
        query: (params) => {
          return {
            url: END_POINTS.CREATE_ACCOUNT_BY_MAIL_PHONE,
            method: METHOD.POST,
            body:params ,
          };
        },
      }),

      logoutUser: builder.query<BaseModel<User>, void>({
        query: () => {
          return {
            url: END_POINTS.LOGIN_BY_MAIL_PHONE,
            method: METHOD.GET,
          };
        },
      }),
    
    };
  },
});

export const {
  useLoginUserByPhnoMailMutation,
  useVerifyOtpMutation,
  useLazyLogoutUserQuery,
  useSignUpUserByMailOrPhnMutation,

} = authSlice;
