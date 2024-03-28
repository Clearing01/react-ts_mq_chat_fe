import React from 'react';
import { Grid } from '@mui/material';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const Main = (): JSX.Element => {
	return (
		<>
			<Grid container>
				<Grid id="body" container direction="column">
					<Grid>
						<Header></Header>
					</Grid>
					<Grid item xs style={{ padding: '32px 40px 40px 40px' }}>
						<Outlet></Outlet>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Main;
