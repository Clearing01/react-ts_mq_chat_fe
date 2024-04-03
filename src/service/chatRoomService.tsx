import api from '../modules/axios';
import { ReqChatRoom } from '../types/chat';

export const getRoomList = async () => {
	const response = await api.get('/chat/list');
	return response.data.body;
}

export const addChatRoom = async (data: ReqChatRoom) => {
	const response = await api.post('/chat', data);
	return response.data.body;
}

export const getRooMessageList = async (id: number) => {
	const response = await api.get(`/chat/${id}`);
	return response.data.body;
}
