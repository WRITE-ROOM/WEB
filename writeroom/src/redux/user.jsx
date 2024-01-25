import { configureStore, createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
	initialState: {userId : '', userName : '', userPw : ''},
	reducers : {
		setUserId(state, action) {
			state.userId = action.payload
		},
		setUserPw(state, action) {
			state.userId = action.payload
		},
	}
})

export const {setUserId, setLang, setImage} = user.actions
export default user.reducer
