import { configureStore } from '@reduxjs/toolkit'
import memberReducer from "./member/memberSlice";

export const store = configureStore({
	reducer: {
		member: memberReducer,
	}
})

export default store;