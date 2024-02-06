import { createSlice } from "@reduxjs/toolkit";

const initialSelectedCategory = {
  categoryName: "",
  categoryId: "",
};

const selectModalSlice = createSlice({
  name: "selectModal",
  initialState: {
    selectedRoom: {
      roomname: "",
      roomId: "",
      // categoryList: [],
    },
    selectedCategory: initialSelectedCategory,
    currentModal: null,
  },
  reducers: {
    setSelectedRoom(state, action) {
      state.selectedRoom = action.payload;
    },
    // setCategoryList(state, action) {
    //   state.selectedRoom.categoryList = action.payload;
    // },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    resetSelectedCategory(state) {
      state.selectedCategory = initialSelectedCategory;
    },
    setCurrentModal(state, action) {
      state.currentModal = action.payload;
    },
  },
});

export const {
  setSelectedRoom,
  setCategoryList,
  setSelectedCategory,
  resetSelectedCategory,
  setCurrentModal,
} = selectModalSlice.actions;
export default selectModalSlice.reducer;
