import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import PageNotFound from 'pages/PageNotFound';
import Login from 'pages/login/Login';
import Main from 'pages/main/main';
import Layout from 'layout/Layout';
import SignUp from 'pages/login/SignUp';
import ChatRoom from 'pages/chatRoom/ChatRoom';

const pageNotFoundRoutes: RouteObject = {
	path: '*',
	element: <PageNotFound />,
};

const loginRoutes: RouteObject = {
	path: '/login',
	element: <Login />,
};

const signUpRoutes: RouteObject = {
	path: '/sign-up',
	element: <SignUp />,
};

const mainRoutes: RouteObject = {
	path: '/',
	element: <Layout />,
	children: [
		{
			index: true,
			element: <Main />,
		},
		{
			path: '/room/:chatRoomId',
			element: <ChatRoom />,
		},
	],
};

const Routes = (): React.ReactElement | null => {
	const routeObjects: RouteObject[] = [loginRoutes, signUpRoutes, mainRoutes, pageNotFoundRoutes];
	return useRoutes(routeObjects);
};

export default Routes;
