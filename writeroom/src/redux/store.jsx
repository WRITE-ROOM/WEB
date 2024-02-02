import { configureStore } from "@reduxjs/toolkit";
import { user } from "./user";
import tagSlice from "./tag";
import selectModalSlice from "./selectModal";
import categorySlice from "./category";

export const store = configureStore({
  reducer: {
    user: user.reducer,
    tag: tagSlice,
    selectModal: selectModalSlice,
    category: categorySlice,
  },
});
