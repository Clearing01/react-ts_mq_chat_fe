import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomLayout from 'components/CustomLayout';
const Login = (): JSX.Element => {
	const navigate = useNavigate();

	const buttonClick = (): void => {
		navigate('main');
	};
	return (
		<>
			<CustomLayout>
				<Typography variant="h3">로그인 페이지 입니다. </Typography>
				<Button variant="contained" sx={{ width: 300, height: 100, mt: '10px' }} onClick={buttonClick}>
					<Typography variant="h3">로그인 </Typography>
				</Button>
			</CustomLayout>
		</>
	);
};
export default Login;
