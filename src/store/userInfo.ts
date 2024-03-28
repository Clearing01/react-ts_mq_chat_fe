import { createSlice } from '@reduxjs/toolkit';

interface Payload {
	name: string;
	age: number;
}

interface Action {
	payload: Payload;
}

export const userInfo = createSlice({
	name: 'userInfo',
	initialState: {
		user: { name: '', age: undefined },
	},
	reducers: {
		updateUser: (state: any, action: Action) => {
			state.user.name = action.payload.name;
			state.user.age = action.payload.age;
		},
	},
});

export const { updateUser } = userInfo.actions;
export default userInfo.reducer;
