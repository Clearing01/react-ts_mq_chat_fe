import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import styles from './ChatRoomAdd.module.css';

const ChatRoomAdd = (props: any) => {
  const open = props.open;
  const handleClose = props.handleClose;
  const add = props.add;
  const setName = props.setName;
  const setDescription = props.setDescription;
  const setSecret = props.setSecret;
  const setPassword = props.setPassword;
  const setLimitCount = props.setLimitCount;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} component="div">
          <Stack spacing={2} direction="column">
            <TextField
              id="name"
              label="NAME"
              variant="standard"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextField
              id="description"
              label="DESCRIPTION"
              variant="standard"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            <TextField
              id="limitCount"
              label="LIMITCOUNT"
              variant="standard"
              onChange={(e) => {
                setLimitCount(e.target.value);
              }}
            />

            <FormLabel id="demo-radio-buttons-group-label">
              비밀 여부
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="false"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="아니요"
                onClick={() => setSecret(false)}
              />
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="예"
                onClick={() => setSecret(true)}
              />
            </RadioGroup>

            <TextField
              id="password"
              label="PASSWORD"
              variant="standard"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Stack>
          <div className={styles.buttonWrapper}>
            <Button
              style={{ marginRight: 'auto' }}
              className={styles.button}
              variant="text"
              onClick={add}
            >
              ADD
            </Button>
            <Button
              className={styles.button}
              variant="text"
              onClick={handleClose}
            >
              CLOSE
            </Button>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default ChatRoomAdd;
