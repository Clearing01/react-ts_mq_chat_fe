import api from '../modules/axios';

export const postInviteMembers = async (data: any) => {
	const response = await api.post('/invite', data);
	return response.data.body;
}

export const getInvites = async () => {
	const response = await api.get('/invite');
	return response.data.body;
}

export const postAccepted = async (data: any) => {
	const response = await api.post('/invite/accepted', data);
	return response.data.body;
}
