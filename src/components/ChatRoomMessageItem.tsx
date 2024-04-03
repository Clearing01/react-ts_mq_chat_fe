import React, { useEffect, useRef } from "react";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Stack from "@mui/material/Stack";
import styles from './ChatRoom.module.css';

function ChatRoomMessageItem(props: any) {
  const scrollRef = useRef<any>();

  const messageList = props.messageList;

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const checkEmoticon = (isMe: any, isEmoticon: any, message: any) => {
    if (isEmoticon === true) {
      if (isMe === true) {
        return <img src={message} alt=""></img>;
      } else {
        return <img src={message} alt=""></img>;
      }
    } else {
      if (isMe === true) {
        return <div className={styles.messageMyContent}>{message}</div>;
      } else {
        return <div className={styles.messageOpponentContent}>{message}</div>;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <Stack spacing={5} direction="column">
      {messageList.map((data: any) => {
        if (data.me === false) {
          return (
            <div key={data.id} className={styles.messageOpponentContainer}>
              <div>
                <AccountCircleOutlinedIcon />
                {data.memberNickname}
              </div>
              {checkEmoticon(data.me, data.emoticon, data.message)}
            </div>
          );
        } else {
          return (
            <div key={data.id} className={styles.messageMyContainer}>
              <div>
                {data.memberNickname}
                <AccountCircleOutlinedIcon />
              </div>
              {checkEmoticon(data.me, data.emoticon, data.message)}
            </div>
          );
        }
      })}
      <div ref={scrollRef}></div>
    </Stack>
  );
}

export default ChatRoomMessageItem;
