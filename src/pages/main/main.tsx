import React from 'react';
import 'styles/reset.scss';
import styles from './main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ChatHistory from '../../components/ChatHistory';

const Main = () => {
	const dispatch = useDispatch()
	const memberList = useSelector((state: any) => state.member);
	const chatRoomId = 1;

	// const { data, isLoading } = useQuery({
	// 	queryKey: ['memberList', chatRoomId],
	// 	queryFn: async () => await getMemberList({ chatRoomId: chatRoomId })
	// })

	const chatMemberList = () => {
		// const result = useQuery({
		// 	queryKey: ['memberList', chatRoomId],
		// 	queryFn: async () => await getMemberList({ chatRoomId: chatRoomId })
		// })

		// dispatch(memberListAction(data));
		console.log(memberList);
	}

	return (
		<>
			<div className={styles.historyContainer}>
				<ChatHistory />
			</div>
		</>
	);
};
export default Main;
