import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import PageNotFound from 'app/PageNotFound';
import Login from 'app/Login';
import Shop from 'app/main/Shop';
import UserInfo from 'app/main/UserInfo';
import Main from 'app/main/Main';

const pageNotFoundRoutes: RouteObject = {
	path: '*',
	element: <PageNotFound />,
};

const loginRoutes: RouteObject = {
	path: '/',
	element: <Login />,
};

const mainRoutes: RouteObject = {
	path: '/main',
	element: <Main />,
	children: [
		{
			index: true,
			element: <Shop />,
		},
		{
			path: 'user',
			element: <UserInfo />,
		},
	],
};

const Routes = (): React.ReactElement | null => {
	const routeObjects: RouteObject[] = [loginRoutes, mainRoutes, pageNotFoundRoutes];
	return useRoutes(routeObjects);
};

export default Routes;
