import { createSlice } from "@reduxjs/toolkit";

export const bookmark = createSlice({
  name: "bookmark",
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      const { bookmarkId, content } = action.payload;
      state.push({ bookmarkId, content }); // 새로운 방 정보를 배열에 추가
    },
    deleteBookmark: (state, action) => {
      const bookmarkIdToDelete = action.payload;
      return state.filter(bookmark => bookmark.bookmarkId !== bookmarkIdToDelete);
    },
    resetBookmark: (state) => {
      return [];
    },
  },
});

export const { addBookmark, deleteBookmark, resetBookmark } = bookmark.actions;
export default bookmark.reducer;
