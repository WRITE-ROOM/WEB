import { createSlice } from "@reduxjs/toolkit";

export const roomInfo = createSlice({
  name: "roomInfo",
  initialState: {
    roomId: "",
    roomTitle: "",
    roomIntroduction: "",
    updatedAt: "",
    roomImg: "",
    userRoomList: "",
    totalElements: "",
    listSize: "",
    noteList: [],
    memberInfo: [],
    routineAchieveRate: "",
    goalsAchieveRate: "",
    goalsTargetCount: "",
    routineTargetCount: "",
  },
  reducers: {
    setRoomInfo(state, action) {
      const {
        roomId,
        roomTitle,
        roomIntroduction,
        updatedAt,
        roomImg,
        userRoomList,
        totalElements,
        listSize,
        noteList,
        routineAchieveRate,
        goalsAchieveRate,
        goalsTargetCount,
        routineTargetCount,
      } = action.payload;

      state.roomId = roomId;
      state.roomTitle = roomTitle;
      state.roomIntroduction = roomIntroduction;
      state.updatedAt = updatedAt;
      state.roomImg = roomImg;
      state.userRoomList = userRoomList;
      state.totalElements = totalElements;
      state.listSize = listSize;
      state.noteList = noteList;
      state.routineAchieveRate = routineAchieveRate;
      state.goalsAchieveRate = goalsAchieveRate;
      state.goalsTargetCount = goalsTargetCount;
      state.routineTargetCount = routineTargetCount;
    },
    setRoomMember(state, action) {
      state.memberInfo = action.payload;
    },
    resetRoomInfo(state) {
      state.roomId = "";
      state.roomTitle = "";
      state.roomIntroduction = "";
      state.updatedAt = "";
      state.roomImg = "";
      state.userRoomList = "";
      state.totalElements = "";
      state.listSize = "";
      state.noteList = [];
      state.memberInfo = [];
      state.routineAchieveRate = "";
      state.goalsAchieveRate = "";
      state.goalsTargetCount = "";
      state.routineTargetCount = "";
    },
  },
});

export const selectRoomInfoState = (state) => state.roomInfo;

export const { setRoomInfo, resetRoomInfo, setRoomMember } = roomInfo.actions;
export default roomInfo.reducer;