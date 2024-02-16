import { createSlice } from "@reduxjs/toolkit";

const challengeSlice = createSlice({
  name: "challenge",
  initialState: {
    userList: [],
    targetCount: null,
    startDate: "",
    deadline: "",
  },
  reducers: {
    setChallenge(state, action) {
      const { userList, targetCount, startDate, deadline } = action.payload;

      state.userList = userList;
      state.targetCount = targetCount;
      state.startDate = startDate;
      state.deadline = deadline;
    },
  },
});
export const { setChallenge } = challengeSlice.actions;
export default challengeSlice.reducer;
