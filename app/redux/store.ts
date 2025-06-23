import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-api-slice";
import authData from "./auth-data-slice";
import homeData from "./home-data-slice";
import { homeSlice } from "./home-api-slice";

const reducer = combineReducers({
  [authSlice.reducerPath]: authSlice.reducer,
    [homeSlice.reducerPath]: homeSlice.reducer,

  authData: authData,
  homeData:homeData

});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(
      authSlice.middleware,
      homeSlice.middleware
    );
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
