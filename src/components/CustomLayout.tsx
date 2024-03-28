import React from 'react';
import 'styles/reset.scss';
import { Grid, Stack } from '@mui/material';
const CustomLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item>
					<Stack
						sx={{
							width: '600px',
							height: '300px',
							border: 'solid 2px #1976D2',
							p: '20px',
							borderRadius: '20px',
							backgroundColor: '#ffff',
						}}
						justifyContent="center"
						alignItems="center"
					>
						{children}
					</Stack>
				</Grid>
			</Grid>
		</>
	);
};
export default CustomLayout;
