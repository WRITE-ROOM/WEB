import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: 'user',
	initialState: {
		userId : '', userName : '', userEmail: '', userPw : '',
		joinType: '', profileImg: '', createdAt: '', updatedAt: ''
	},
	reducers : {
		setUser(state, action) {
			// const { userEmail, userName, userPw, joinType} = action.payload;
			// state.userName = userName;
			// state.userEmail = userEmail;
			// state.userPw = userPw;
			// state.joinType = joinType;
			const userData = action.payload;
			return { ...state, ...userData };
		},
	}
})

export const {setUser} = user.actions;
export default user.reducer
