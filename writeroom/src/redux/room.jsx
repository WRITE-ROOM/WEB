import { createSlice } from "@reduxjs/toolkit";

export const room = createSlice({
  name: "room",
  initialState: {
    room: [], // 각 방의 정보를 배열로 관리
  },
  reducers: {
    setRoom(state, action) {
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
      } = action.payload;
      state.room.push({
        roomId,
        roomTitle,
        roomIntroduction,
        updatedAt,
        roomImg,
        userRoomList,
        totalElements,
        listSize,
        noteList,
      });
    },
    resetRoom(state) {
      state.room = [];
    },
  },
});

export const selectRoomState = (state) => state.room;
export const selectRoomIds = (state) =>
  selectRoomState(state).room.map((room) => room.roomId);

export const { setRoom, resetRoom } = room.actions;
export default room.reducer;

//임시 redux
