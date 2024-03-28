import { configureStore } from '@reduxjs/toolkit';
import userInfo from 'store/userInfo';
const store = configureStore({
	reducer: { userInfo },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
