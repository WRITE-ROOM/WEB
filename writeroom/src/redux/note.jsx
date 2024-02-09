import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteTitle: "",
    noteSubTitle: "",
    noteId: null,
    noteImg: "",
    noteContent: "",
    writer: "",
    achieve: false,
    tagList: [],
    createdAt: "",
    updatedAt: "",
  },
  reducers: {
    addNote(state, action) {
      const {
        noteTitle,
        noteSubTitle,
        noteId,
        noteImg,
        noteContent,
        writer,
        achieve,
        tagList,
        createdAt,
        updatedAt,
      } = action.payload;

      state.noteTitle = noteTitle;
      state.noteSubTitle = noteSubTitle;
      state.noteId = noteId;
      state.noteImg = noteImg;
      state.noteContent = noteContent;
      state.writer = writer;
      state.achieve = achieve;
      state.tagList = tagList;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
    resetNote(state) {
      state.noteTitle = "";
      state.noteSubTitle = "";
      state.noteId = "";
      state.noteImg = null;
      state.noteContent = "";
      state.writer = "";
      state.achieve = "";
      state.tagList = [];
      state.createdAt = "";
      state.updatedAt = "";
    },
  },
});

export const { addNote, resetNote } = noteSlice.actions;
export default noteSlice.reducer;
