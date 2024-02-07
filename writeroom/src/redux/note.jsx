import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteTitle: "",
    noteSubtitle: "",
    noteId: null,
    noteImg: "",
    noteContent: "",
    writer: "",
    achieve: false,
    tags: [],
    createdAt: "",
    updatedAt: "",
  },
  reducers: {
    addNote(state, action) {
      const {
        noteTitle,
        noteSubtitle,
        noteId,
        noteImg,
        noteContent,
        writer,
        achieve,
        tags,
        createdAt,
        updatedAt,
      } = action.payload;

      state.noteTitle = noteTitle;
      state.noteSubtitle = noteSubtitle;
      state.noteId = noteId;
      state.noteImg = noteImg;
      state.noteContent = noteContent;
      state.writer = writer;
      state.achieve = achieve;
      state.tags = tags;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
    resetNote(state) {
      state.noteTitle = "";
      state.noteSubtitle = "";
      state.noteId = "";
      state.noteImg = "";
      state.noteContent = "";
      state.achieve = "";
      state.tags = [];
      state.createdAt = "";
      state.updatedAt = "";
    },
  },
});

export const { addNote, resetNote } = noteSlice.actions;
export default noteSlice.reducer;
