import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    userId: "",
    userName: "",
    userEmail: "",
    userPw: "",
    accessToken: "",
    joinType: "",
    profileImg: "",
    createdAt: "",
    updatedAt: "",
  },
  reducers: {
    setUser(state, action) {
      const { userName, userEmail, userPw } = action.payload;
      state.userName = userName;
      state.userEmail = userEmail;
      state.userPw = userPw;
    },
    setLogin(state, action) {
      const { userId, accessToken } = action.payload;
      state.userId = userId;
      state.accessToken = accessToken;
    },
  },
});

export const { setUser, setLogin } = user.actions;
export default user.reducer;
