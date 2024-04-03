import React, { useEffect, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { getMemberList } from "../service/memberService";
import { postInviteMembers } from "../service/inviteService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalComponent(props: any) {
  const open = props.open;
  const handleClose = props.handleCloseModal;
  const chatRoomId = props.chatRoomId;

  const [memberList, setMemberList] = useState<any>([]);
  const [checked, setChecked] = useState<any>([]);

  const getInviteMemberList = async () => {
    const data = {
      chatRoomId: chatRoomId,
    };

    await getMemberList(data).then((result: any) => {
      setMemberList(result.memberItems);
    });
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const inviteMembers = async () => {
    const data = {
      chatRoomId: chatRoomId,
      memberIds: checked,
    };

    await postInviteMembers(data)
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        console.log(error);
        window.alert(error.response.data.txt);
      });
  };

  useEffect(() => {
    setChecked([]);
    getInviteMemberList();
  }, []);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Divider />
            <Typography
              id="transition-modal-description"
              sx={{
                mt: 2,
                mb: 2,
                height: "85%",
                maxHeight: "85%",
                overflowY: "scroll",
                overflow: "auto",
              }}
              component="div"
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <nav aria-label="main mailbox folders">
                  <List>
                    {memberList.map((data: any) => {
                      return (
                        <ListItem key={data.id} disablePadding>
                          <ListItemButton
                            disabled={data.alreadyIn}
                            onClick={handleToggle(data.id)}
                          >
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={checked.indexOf(data.id) !== -1}
                                tabIndex={-1}
                                disableRipple
                                // inputProps={{ "aria-labelledby": data.id }}
                              />
                            </ListItemIcon>
                            <ListItemIcon>
                              <AccountCircleOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText
                              // id={data.id}
                              primary={data.nickname}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </nav>
              </Box>
            </Typography>
            <Divider />
            <Typography id="transition-modal-title" sx={{ paddingTop: "20px" }}>
              <Button
                onClick={inviteMembers}
                sx={{ width: "100%" }}
              >
                초대하기
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalComponent;
