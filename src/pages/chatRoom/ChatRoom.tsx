import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";

import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Stack from "@mui/material/Stack";

import styles from '../../components/ChatRoom.module.css'
import ModalComponent from '../../components/ModalComponent';
import ChatRoomMessage from '../../components/ChatRoomMessage';

function ChatRoom() {
  const navigate = useNavigate();

  const client = useRef<any>(null);
  const socket = new SockJS(`${process.env.REACT_APP_BASE_URL}/stomp/chat`);

  const { chatRoomId } = useParams();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [messageType, setMessageType] = useState<any>("text");
  const [message, setMessage] = useState<any>(null);
  const [newMessage, setNewMessage] = useState<any>(null);
  const [open, setOpen] = React.useState<any>(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleMenu = () => {
    console.log(111);
    setIsChecked(!isChecked);
  }

  const goChatRoomList = () => navigate('/');

  const outChatRoom = () => {
    disconnect();
  };

  const sendMessage = () => {
    const data = JSON.stringify({
      chatRoomId: chatRoomId,
      memberId: localStorage.getItem("id"),
      messageType: messageType,
      message: message,
    });

    client.current.publish({
      destination: "/pub/chat/send",
      header: { Authorization: localStorage.getItem("id") },
      body: data,
    });
  };

  function connect() {
    client.current = new StompJs.Client({
      webSocketFactory: () => socket, // 프록시를 통한 접속
      debug: (str: string) => {
        console.log(str);
      },
      reconnectDelay: 5000, // 자동 재 연결
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,

      onConnect: () => subscribe(),
    });

    client.current.activate();
  }

  function subscribe() {
    client.current.subscribe(`/sub/chat/in/${chatRoomId}`, (data: any) => {
      setNewMessage(() => JSON.parse(data.body).message);
    });
  }

  const invite = () => {
    setIsChecked(false);
    handleOpenModal();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  return (
    <div className={styles.chatRoomContainer}>
      <div className={styles.chatRoomSubjectContainer}>
        <div className={styles.chatRoomMenuContainer} onClick={handleMenu}>
          <MenuOutlinedIcon />
        </div>
        {isChecked && (
          <div className={styles.chatRoomMenuBarContainer}>
            <Stack spacing={3}>
              <div
                className={styles.chatRoomMenuBarContent}
                onClick={() => invite()}
              >
                <GroupAddIcon sx={{ fontSize: 25 }} />
                <p className={styles.chatRoomMenuBarTextContent}>초대하기</p>
              </div>
              <div
                className={styles.chatRoomMenuBarContent}
                onClick={() => goChatRoomList()}
              >
                <ArrowCircleLeftRoundedIcon sx={{ fontSize: 25 }} />
                <p className={styles.chatRoomMenuBarTextContent}>뒤로가기</p>
              </div>

              <div
                className={styles.chatRoomMenuBarContent}
                onClick={() => outChatRoom()}
              >
                <LogoutOutlinedIcon sx={{ fontSize: 25 }} />
                <p className={styles.chatRoomMenuBarTextContent}>나가기</p>
              </div>
            </Stack>
          </div>
        )}
        {chatRoomId} 번 방
      </div>

      <ModalComponent
        open={open}
        handleCloseModal={handleCloseModal}
        chatRoomId={chatRoomId}
      />

      <ChatRoomMessage
        chatRoomId={chatRoomId}
        newMessage={newMessage}
        setMessage={setMessage}
        setMessageType={setMessageType}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default ChatRoom;
