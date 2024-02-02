import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: { userId: "", userName: "", userPw: "" },
  reducers: {
    addUser(state, action) {
      const { userId, userName, userPw } = action.payload;
      state.userId = userId;
      state.userName = userName;
      state.userPw = userPw;
    },
  },
});

export const { addUser } = user.actions;
export default user.reducer;
