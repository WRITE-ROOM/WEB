import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteTitle: "",
    noteSubTitle: "",
    noteId: null,
    noteCoverImg: "",
    noteContent: "",
    writer: "",
    tagList: [],
    createdAt: "",
    updatedAt: "",
    categoryName: "",
    emojiList: { emojiCounts: [] },
  },
  reducers: {
    addNote(state, action) {
      const {
        noteTitle,
        noteSubTitle,
        noteId,
        noteCoverImg,
        noteContent,
        writer,
        tagList,
        createdAt,
        updatedAt,
        categoryName,
        emojiList,
      } = action.payload;

      state.noteTitle = noteTitle;
      state.noteSubTitle = noteSubTitle;
      state.noteId = noteId;
      state.noteCoverImg = noteCoverImg;
      state.noteContent = noteContent;
      state.writer = writer;
      state.tagList = tagList;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
      state.categoryName = categoryName;
      state.emojiList = emojiList;
    },
    resetNote(state) {
      state.noteTitle = "";
      state.noteSubTitle = "";
      state.noteId = null;
      state.noteCoverImg = "";
      state.noteContent = "";
      state.writer = "";
      state.tagList = [];
      state.createdAt = "";
      state.updatedAt = "";
      state.categoryName = "";
      state.emojiList = {};
    },
  },
});

export const { addNote, resetNote } = noteSlice.actions;
export default noteSlice.reducer;
