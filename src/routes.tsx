import React from 'react';

import Layout from './layout/Layout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LogoutPage from './pages/LogoutPage';

const routes = [
	{
		element: <Layout />,
		children: [
			{path: '/', element: <HomePage />},
			{path: '/about', element: <AboutPage />},
			{path: '/logout', element: <LogoutPage />},
		],
	},
];
export default routes;
