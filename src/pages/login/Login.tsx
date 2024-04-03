import React, { useState } from 'react';
import styles from './Login.module.css';
import gaogai from 'assets/images/gaogai.jpg';

import { useNavigate } from 'react-router-dom';
import CustomLayout from 'layout/CustomLayout';
import { postLogin } from '../../service/memberService';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const Login = (): JSX.Element => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const [memberId, setMemberId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isError, setError] = useState<boolean>(false);

	const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setMemberId(e.target.value);
	};
	const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setPassword(e.target.value);
	}

	const login = async () => {
		try {
			const response = await postLogin({ memberId, password });
			localStorage.setItem('id', response.id);

			setError(false);
			navigate('/');
		} catch (error: any) {
			console.error(error);
			setError(true);
		}
	};

	const signUp = () => {
		navigate("/sign-up");
	};
	
	return (
		<>
			<CustomLayout>
				<form className='loginContent'>
					<div className={styles.loginLogo}>
						<img alt='' src={gaogai} />
						<span>| DAEGU GAOGAI</span>
					</div>
					<div className={styles.loginTitle}>로그인</div>
					<div className={styles.loginInputWrap}>
						<div className={styles.loginLabel}>아이디</div>
						<input
							type='text'
							value={memberId}
							onChange={onChangeId}
						/>
					</div>
					<div className={styles.loginInputWrap}>
						<div className={styles.loginLabel}>비밀번호</div>
						<input
							type='password'
							value={password}
							onChange={onChangePassword}
						/>
					</div>
					<div className={styles.saveId}>
						<input
							type='checkbox'
							className={styles.loginInputWrap}
							style={{ marginLeft: '0px', marginRight: '7px' }}
						/>
						<div className={styles.loginInputWrap}>아이디 저장</div>
						<div
							onClick={signUp}
							style={{ cursor: 'pointer', fontSize: '14px' }}
						>
							회원가입
						</div>
					</div>
					<div className={styles.rememInfo}>
						{isError && <div className={styles.errorMessage}>로그인 실패</div>}
					</div>
					<div
						className={styles.mainBtn}
						onClick={login}
					>
						로그인
					</div>
					{/* <div className={styles.loginTxt} onClick={onClickEmail}>계정 생성 및 사용 문의</div> */}
				</form>
			</CustomLayout>
		</>
	);
};
export default Login;
