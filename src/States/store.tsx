import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { loadingBarReducer } from 'react-redux-loading-bar';

const store = configureStore({
  reducer: {
    user: userReducer,
    loadingBar: loadingBarReducer,
  }
})

export default store;