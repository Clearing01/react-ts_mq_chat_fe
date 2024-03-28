import React from 'react';
import 'styles/reset.scss';
import { Button, Typography } from '@mui/material';
import CustomLayout from 'components/CustomLayout';
import { useNavigate } from 'react-router-dom';
const PageNotFound = (): JSX.Element => {
	const navigate = useNavigate();
	const buttonClick = (): void => {
		navigate(-1);
	};
	return (
		<>
			<CustomLayout>
				<Typography variant="h3"> Page not found</Typography>
				<Button variant="contained" sx={{ width: 300, height: 100, mt: '10px' }} onClick={buttonClick}>
					<Typography variant="h3">돌아가기 </Typography>
				</Button>
			</CustomLayout>
		</>
	);
};

export default PageNotFound;
