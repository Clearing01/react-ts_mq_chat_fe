import React, { useState } from "react";

import { getEmoticonList } from "../service/emoticonService";

import EmoticonListItem from "./EmoticonItem";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import styles from './ChatRoom.module.css';

function ChatRoomSendItem(props: any) {
  const setMessageType = props.setMessageType;
  const setMessage = props.setMessage;
  const sendMessage = props.sendMessage;

  const [openEmoticon, setOpenEmoticon] = useState<any>(false);
  const [emoticonList, setEmoticonList] = useState<any>([]);

  const getEmoticon = async () => {
    if (!openEmoticon) {
      await getEmoticonList().then((result) => {
        setEmoticonList(result.emoticonGroupItems);
      });
      setOpenEmoticon(true);
      setMessageType("emoticon");
      // document.querySelector("#chat-room-send-container").style.height =
      //   "400px";
      // document.querySelector("#ChatRoomMessageItem").style.height = "135px";
    } else {
      setOpenEmoticon(false);
      setMessageType("text");
      // document.querySelector("#chat-room-send-container").style.height = "35px";
      // document.querySelector("#ChatRoomMessageItem").style.height = "500px";
    }
  };

  return (
    <div id="chat-room-send-container" className={styles.chatRoomSendContainer}>
      <Stack direction="row" spacing={3}>
        <div className={styles.emoticonBtnContent} onClick={getEmoticon}>
          <CatchingPokemonIcon />
        </div>

        {openEmoticon === true ? (
          <div
            id="chat-room-emoticon-bar-container"
            className={styles.chatRoomEmoticonBarContainer}
          >
            <EmoticonListItem
              emoticonList={emoticonList}
              setMessage={setMessage}
            />
          </div>
        ) : (
          <TextField
            id="message-text-content"
            className={styles.messageTextContent}
            label=""
            variant="standard"
            onChange={(e) => {
              e.preventDefault();
              setMessage(e.target.value);
            }}
          />
        )}

        <Button
          className={styles.messageBtnContent}
          variant="text"
          onClick={sendMessage}
        >
          SEND
        </Button>
      </Stack>
    </div>
  );
}

export default ChatRoomSendItem;
