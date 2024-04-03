export interface ReqLogin {
	memberId: string;
	password: string;
}

export interface Member {
	id: string;
	nickname: string;
	alreadyIn: boolean;
}
