import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    title: "",
    subtitle: "",
    noteId: "",
    coverImg: "",
    content: "",
    achieve: false,
    tags: [],
    createdAt: "",
    updatedAt: "",
  },
  reducers: {
    addNote(state, action) {
      console.log("payload");
      const {
        title,
        subtitle,
        noteId,
        coverImg,
        content,
        achieve,
        tags,
        createdAt,
        updatedAt,
      } = action.payload;

      state.title = title;
      state.subtitle = subtitle;
      state.noteId = noteId;
      state.coverImg = coverImg;
      state.content = content;
      state.achieve = achieve;
      state.tags = tags;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
  },
});

export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;
