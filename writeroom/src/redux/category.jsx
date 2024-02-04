import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryList: [
      // { categoryId: 0, categoryName: "전체 노트" },
    ],
  },
  reducers: {
    setCategory(state, action) {
      state.categoryList = action.payload;
    },
    createCategory(state, action) {
      state.categoryList.push(action.payload);
    },
    deleteCategory(state, action) {
      state.categoryList.splice(action.payload, 1);
    },
  },
});

export const { setRoomname, createCategory, deleteCategory, selectCategory } =
  categorySlice.actions;
export default categorySlice.reducer;

// const initialCategory = [
//   {
//     id: 1,
//     roomname: "스포츠에 대한 고찰",
//     category: ["전체 노트", "카테고리1", "카테고리2", "카테고리3"],
//   },
//   {
//     id: 2,
//     roomname: "룸이름",
//     category: ["전체 노트", "카테고리4", "카테고리5"],
//   },
//   {
//     id: 3,
//     roomname: "룸이름2",
//     category: ["전체 노트", "카테고리6", "카테고리7", "카테고리8"],
//   },
// ];

// const categorySlice = createSlice({
//   name: "category",
//   initialState: initialCategory,
//   reducers: {
//     createCategory(state, action) {
//       state.categoryList.push(action.payload);
//     },
//     deleteCategory(state, action) {
//       state.categoryList.splice(action.payload, 1);
//     },
//     selectCategory(state, action) {
//       state.selectedCategory = action.payload;
//     },
//   },
// });

// export const { setCategory } = categorySlice.actions;
// export default categorySlice.reducer;
