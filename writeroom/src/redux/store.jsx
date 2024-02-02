import { configureStore } from "@reduxjs/toolkit";
import { user } from "./user";
import tagSlice from "./tag";

export const store = configureStore({
  reducer: {
    user: user.reducer,
    tag: tagSlice,
  },
});
