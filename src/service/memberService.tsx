import api from '../modules/axios';
import { ReqLogin } from '../types/member';


export const postLogin = async (data: ReqLogin) => {
	const response = await api.post('/member/login', data);
	return response.data.body;

}

export const postSignUp = async (data: any) => {
	const response = await api.post('/member/signup', data);
	return response.data.body;

}

export const getMemberList: any = async (data: any) => {
	const response = await api.get('/member/list', { params: data });
	return response.data.body;
}