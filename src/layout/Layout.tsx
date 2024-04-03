import React from 'react';
import { Grid } from '@mui/material';
import Header from 'layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = (): JSX.Element => {
	return (
		<>
			<Grid container>
				<Grid id="body" container direction="column">
					<Grid>
						<Header />
					</Grid>
					<Grid>
						<Outlet />
					</Grid>
					<Grid>
						<Footer />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Layout;
