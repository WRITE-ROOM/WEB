import { createSlice } from "@reduxjs/toolkit";

const newNoteSlice = createSlice({
  name: "newNote",
  initialState: {
    noteTitle: "",
    noteSubTitle: "",
    noteContent: "",
    noteTagList: [],
    categoryId: "",
    // noteImg: "",
  },
  reducers: {
    newNote(state, action) {
      const {
        noteTitle,
        noteSubTitle,
        noteContent,
        noteTagList,
        categoryId,
        // noteImg,
      } = action.payload;

      state.noteTitle = noteTitle;
      state.noteSubTitle = noteSubTitle;
      state.noteContent = noteContent;
      state.noteTagList = noteTagList;
      state.categoryId = categoryId;
      //   state.noteImg = noteImg;
    },

    resetNewNote(state) {
      state.noteTitle = "";
      state.noteSubTitle = "";
      state.noteContent = "";
      state.noteTagList = [];
      state.categoryId = "";
      //   state.noteImg = "";
    },
  },
});

export const { newNote, resetNewNote } = newNoteSlice.actions;
export default newNoteSlice.reducer;
