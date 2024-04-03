import api from '../modules/axios';

export const getEmoticonList = async () => {
	const response = await api.get('/emoticon');
	return response.data.body;
}
