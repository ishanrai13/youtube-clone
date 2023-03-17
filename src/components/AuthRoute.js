import React, { useEffect, useState } from 'react';
import { getCookie, isValidAuthCookie } from '../utils/utilFunctions';

const AuthRoute = ({ children }) => {
	const auth = getCookie('auth');
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	useEffect(() => {
		async function fetchData() {
			const isValidAuth = await isValidAuthCookie();
			setIsUserLoggedIn(auth && isValidAuth);
		}
		fetchData();
	}, [auth]);
	if (!isUserLoggedIn) {
		return <div className="flex justify-center items-center">Please Login</div>;
	}
	return <div>{children}</div>;
};

export default AuthRoute;
