import React from 'react';
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = (): JSX.Element => {
	const navigatge = useNavigate();
	const logout = () => {
		localStorage.removeItem('id');
		navigatge('/login');
	}
	return (
		<Grid container>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							News
						</Typography>
							<Button
								color="inherit"
								onClick={logout}
							>
								LOGOUT
							</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</Grid>
	);
};

export default Header;
