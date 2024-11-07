import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
});

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["token"],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
