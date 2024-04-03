import { createSlice } from '@reduxjs/toolkit'

const memberSlice = createSlice({
	name: 'member',
	initialState: [],
	reducers: {
		memberListAction(state, action) {
			// console.log(state, action);
			state = action.payload.memberItems;
			console.log(state, action);
			return state;
		}
	}
})

export const { memberListAction } = memberSlice.actions
export default memberSlice.reducer