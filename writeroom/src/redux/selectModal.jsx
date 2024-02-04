import { createSlice } from "@reduxjs/toolkit";

const selectModalSlice = createSlice({
  name: "selectModal",
  initialState: {
    selectedRoom: {
      roomname: "",
      // categoryList: [],
    },
    selectedCategory: null,
    currentModal: null,
  },
  reducers: {
    setSelectedRoom(state, action) {
      state.selectedRoom = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setCurrentModal(state, action) {
      state.currentModal = action.payload;
    },
  },
});

export const { setSelectedRoom, setSelectedCategory, setCurrentModal } =
  selectModalSlice.actions;
export default selectModalSlice.reducer;
