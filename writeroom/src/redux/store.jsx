import { configureStore } from "@reduxjs/toolkit";
import { user } from "./user";
import { room } from "./room";
import tagSlice from "./tag";
import selectModalSlice from "./selectModal";
import categorySlice from "./category";
import noteSlice from "./note";
import { bookmark } from "./bookmark";
import noteListSlice from "./noteList";
import writeModeSlice from "./writeMode";
import roomInfoSlice from "./roomInfo";
import userListSlice from "./userList";
import selectedMemberSlice from "./selectedMember";
import challengeSlice from "./challenge";

export const store = configureStore({
  reducer: {
    user: user.reducer,
    room: room.reducer,
    tag: tagSlice,
    selectModal: selectModalSlice,
    category: categorySlice,
    note: noteSlice,
    bookmark: bookmark.reducer,
    noteList: noteListSlice,
    writeMode: writeModeSlice,
    roomInfo: roomInfoSlice,
    userList: userListSlice,
    selectedMember: selectedMemberSlice,
    challenge: challengeSlice,
  },
});
