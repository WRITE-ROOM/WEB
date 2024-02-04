import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
  name: "tag",
  initialState: [
    // { tagId: 0, tagName: "음악" },
  ],
  reducers: {
    addTag(state, action) {
      state.push(action.payload);
    },
    deleteTag(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { addTag, deleteTag } = tagSlice.actions;
export default tagSlice.reducer;
