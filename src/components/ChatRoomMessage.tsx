import React, { useEffect, useState } from "react";

import ChatRoomMessageItem from "./ChatRoomMessageItem";
import ChatRoomSendItem from "./ChatRoomSendItem";

import { getRooMessageList } from "../service/chatRoomService";
import styles from './ChatRoom.module.css';

function ChatRoomMessage(props: any) {
  const [messageList, setMessageList] = useState<any>([]);

  const chatRoomId = props.chatRoomId;
  const newMessage = props.newMessage;
  const setMessageType = props.setMessageType;
  const setMessage = props.setMessage;
  const sendMessage = props.sendMessage;

  useEffect(() => {
    const rooMessageList = async () => {
      await getRooMessageList(chatRoomId).then((result) => {
        setMessageList(result.messageItems);
      });
    };

    rooMessageList();
  }, [chatRoomId, newMessage]);

  return (
    <div className={styles.chatRoomMessageListContainer}>
      <div id="ChatRoomMessageItem" className={styles.chatRoomMessageContainer}>
        <ChatRoomMessageItem messageList={messageList} />
      </div>

      <ChatRoomSendItem
        setMessageType={setMessageType}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default ChatRoomMessage;
