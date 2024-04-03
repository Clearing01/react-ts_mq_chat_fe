import React from 'react';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemText, ListItemAvatar
} from '@mui/material';
import { useState } from 'react';
import styles from './ChatHistory.module.css';
import { ReactComponent as IconNewChat } from 'assets/images/icon-new-chat.svg';
import ChatRoomAdd from './ChatRoomAdd';
import { addChatRoom, getRoomList } from '../service/chatRoomService';
import { ChatRoom, ReqChatRoom } from '../types/chat';
import { useQuery } from '@tanstack/react-query';
import ChatRoomListItem from './ChatRoomListItem';
import { useNavigate } from 'react-router-dom';

const ChatHistory = () => {
  const navigate = useNavigate();
  const [chatRoomList, setChatRoomList] = useState([]);
  const [open, setOpen] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [secret, setSecret] = useState<boolean>(false);
  const [password, setPassword] = useState<string>();
  const [limitCount, setLimitCount] = useState<number>(0);



  const { data, isLoading } = useQuery({
  	queryKey: ['chatRoomList'],
  	queryFn: async () => {
      const response = await getRoomList();
      setChatRoomList(response.chatRoomItems);
      return response.chatRoomItems;
    }
  })

  const openAddChat = () => setOpen(true);
  const closeAddChat = () => setOpen(false);

  const handleOnClickHistory = () => {
    console.log('history');
  }

  const add = async () => {
    const data: ReqChatRoom = {
      name: name,
      description: description,
      limitCount: limitCount,
      secret: secret,
      password: secret ? password : null,
    };

    try {
      const response = await addChatRoom(data);

      alert("등록이 완료되었습니다.");
      closeAddChat();
      setChatRoomList(response.chatRoomItems);
    } catch (error: any) {
      console.log(error);
    }
  };

  const enterRoom = (chatRoomId: number) => {
    navigate(`/room/${chatRoomId}`);
  };

  const subHeader = (
    <ListSubheader component='div' id='nested-list-subheader'>
      채팅 이력
    </ListSubheader>
  );

  return (
    <div className={styles.historyPanel}>
      <div>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => openAddChat()}>
              <ListItemAvatar style={{ display: 'flex', alignItems: 'center' }}>
                <IconNewChat style={{ width: '30px', height: '30px' }} />
              </ListItemAvatar>
                <ListItemText primary='채팅방 만들기' />
            </ListItemButton>
          </ListItem>
        </List>
      </div>

      {chatRoomList.length ? (
        <List
          sx={{
            overflowY: 'auto',
          }}
          subheader={subHeader}
        >
          {chatRoomList.map((chatRoom: ChatRoom) => (
            <ChatRoomListItem
              key={chatRoom.chatRoomId}
              chatRoom={chatRoom}
              enterRoom={enterRoom}
            />
          ))}
        </List>
      ) : (
        <div className={styles.noHistoryContainer}>
          <div>최근 채팅 이력이 없습니다.</div>
        </div>
      )}

      <ChatRoomAdd
        open={open}
        handleClose={closeAddChat}
        add={add}
        setName={setName}
        setDescription={setDescription}
        setSecret={setSecret}
        setPassword={setPassword}
        setLimitCount={setLimitCount}
      />
    </div>
  );
};

export default ChatHistory;
