import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
const excludeRoutes = ["/signin", "/signup", "/signupConfirm"];

export default function AuthProvider({ location }) {
	const navigate = useNavigate();
	const { pathname } = location;
	const { token, temporyUser: user } = useSelector(({ auth }) => auth);
	useEffect(() => {
		//si il y a token laisser la navigation se faire
		//car tt requette avec rtr token expired or not found
		// will send back to login

		if (!token && !excludeRoutes.includes(pathname)) {
			navigate("/signin");
		}
		// aws noti auth always set user to null untill
		else if (pathname === "/signupConfirm" && !user) {
			navigate("/signup");
		}
	}, [pathname, token]);
	return <Outlet />;
}
