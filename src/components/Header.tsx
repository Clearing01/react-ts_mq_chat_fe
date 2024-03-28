import React from 'react';
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
const menuArray = [
	{ id: 1, label: 'Shop', path: '/main' },
	{ id: 2, label: 'UserInfo', path: '/main/user' },
	{ id: 3, label: 'Login', path: '/' },
];

const Header = (): JSX.Element => {
	const navigatge = useNavigate();
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
						{menuArray.map((item) => {
							return (
								<Button
									key={item.id}
									color="inherit"
									onClick={() => {
										navigatge(item.path);
									}}
								>
									{item.label}
								</Button>
							);
						})}
					</Toolbar>
				</AppBar>
			</Box>
		</Grid>
	);
};

export default Header;
