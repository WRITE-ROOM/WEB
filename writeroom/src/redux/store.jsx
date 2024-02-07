import { configureStore } from "@reduxjs/toolkit";
import { user } from "./user";
import { room } from "./room";
import tagSlice from "./tag";
import selectModalSlice from "./selectModal";
import categorySlice from "./category";
import noteSlice from "./note";
import noteListSlice from "./noteList";

export const store = configureStore({
  reducer: {
    user: user.reducer,
    room: room.reducer,
    tag: tagSlice,
    selectModal: selectModalSlice,
    category: categorySlice,
    note: noteSlice,
    noteList: noteListSlice,
  },
});
