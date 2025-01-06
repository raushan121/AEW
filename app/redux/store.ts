import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-api-slice";
import authData from "./auth-data-slice";


const reducer = combineReducers({
  [authSlice.reducerPath]: authSlice.reducer,

  authData: authData,

});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(
      authSlice.middleware,
    );
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
