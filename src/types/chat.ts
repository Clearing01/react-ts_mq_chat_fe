export interface ReqChatRoom {
	name: string;
	description:  string;
	limitCount: number;
	secret: boolean;
	password?: string | null;
}

export interface ChatRoom {
	chatRoomId: number
	chatRoomMemberId: number
	chatRoomDescription: string
	chatRoomName: string
	currentCount: number
	limitCount: number
}