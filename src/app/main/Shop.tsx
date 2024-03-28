import React from 'react';
import CustomLayout from 'components/CustomLayout';
import 'styles/reset.scss';
import { Typography } from '@mui/material';
const Shop = (): JSX.Element => {
	return (
		<>
			<CustomLayout>
				<Typography variant="h3">Shop 페이지 입니다. </Typography>
			</CustomLayout>
		</>
	);
};
export default Shop;
