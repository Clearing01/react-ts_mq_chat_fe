import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import styles from './ChatRoom.module.css';

const ChatRoomListItem = (props: any) => {
  const data = props.chatRoom;
  const enterRoom = props.enterRoom;

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={styles.roomDescriptionContainer}>
            <div className={styles.roomSummaryContent}>{data.chatRoomName}</div>
            <div className={styles.roomCummaryCountContainer}>
              {data.currentCount}/{data.limitCount}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.roomDescriptionContainer}>
            <Button
              className={styles.enterBtnContent}
              variant="text"
              onClick={() => enterRoom(data.chatRoomId)}
            >
              입장
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ChatRoomListItem;
