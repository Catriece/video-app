import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer"; // Import your user reducer
import videoReducer from "./videoReducer"; // Import your video reducer

export const store = configureStore({
  reducer: {
    users: userReducer,
    videos: videoReducer,
    // Add other reducers for comments, likes, notifications, etc.
  },
});
