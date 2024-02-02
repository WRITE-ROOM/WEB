import { configureStore } from '@reduxjs/toolkit'
import { user } from './user'
import { room } from './room'

export const store = configureStore({
	reducer: {
		user : user.reducer,
		room : room.reducer,
	}
})