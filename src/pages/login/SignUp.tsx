import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./SignUp.module.css";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { postSignUp } from '../../service/memberService';



function SignUp() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const signUp = async () => {
    const data = {
      memberId: id,
      password: pw,
      name: name,
      nickname: nickname,
      phoneNumber: phoneNumber,
    };
    await postSignUp(data)
      .then((result) => {
        alert("정상적으로 가입되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.txt);
      });
  };

  return (
    <div className={style.loginContainer}>
      <div className="back-arrow-container">
        <Link to={"/"}>
          <ArrowCircleLeftRoundedIcon sx={{ fontSize: 35 }} />
        </Link>
      </div>
      회원가입
      <Stack className={style.loginContent} spacing={5} direction="column">
        <TextField
          id="id"
          label="ID"
          variant="standard"
          onChange={(e) => {
            e.preventDefault();
            setId(e.target.value);
          }}
        />

        <TextField
          id="pw"
          label="PW"
          variant="standard"
          onChange={(e) => {
            e.preventDefault();
            setPw(e.target.value);
          }}
        />

        <TextField
          id="name"
          label="NAME"
          variant="standard"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />

        <TextField
          id="nickname"
          label="NICKNAME"
          variant="standard"
          onChange={(e) => {
            e.preventDefault();
            setNickname(e.target.value);
          }}
        />

        <TextField
          id="phoneNumber"
          label="PHONE NUMBER"
          variant="standard"
          onChange={(e) => {
            e.preventDefault();
            setPhoneNumber(e.target.value);
          }}
        />

        <div className={style.loginBtnContainer}>
          <Button
            className={style.loginBtnContent}
            variant="text"
            onClick={() => signUp()}
          >
            SignUp
          </Button>
        </div>
      </Stack>
    </div>
  );
}

export default SignUp;
