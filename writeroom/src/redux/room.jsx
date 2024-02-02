import { createSlice } from '@reduxjs/toolkit'

export const room = createSlice({
    name: 'room',
    initialState: {
      room: [], // 각 방의 정보를 배열로 관리
    },
    reducers: {
      setRoom(state, action) {
        const { roomTitle, updatedAt, roomImg } = action.payload;
        state.room.push({ roomTitle, updatedAt, roomImg }); // 새로운 방 정보를 배열에 추가
      },
      resetRoom(state) {
        state.room = [];
      },
    },
  });

export const {setRoom, resetRoom} = room.actions;
export default room.reducer;

//임시 redux