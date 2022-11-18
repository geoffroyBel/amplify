import {
	UPDATE_PROFILE,
	SWITCH_USER,
	DELETE_PROFILE,
	SIGN_UP,
	IS_LOADING,
	ERROR_AUTH,
	AWS_SIGN_IN,
} from "../types";
import { Auth, DataStore } from "aws-amplify";

export const switchUser = (user) => {
	console.log("switch ---------user");
	console.log(user);
	return {
		type: AWS_SIGN_IN,
		payload: user,
	};
};

// when user updates profile
export const updateProfile = (profile) => async (dispatch) => {
	return {
		type: UPDATE_PROFILE,
		profile,
	};
};

// when user sign out
export const deleteProfile = () => {
	return { type: DELETE_PROFILE };
};

export const checkUser = () => async (dispatch) => {
	try {
		const user = await Auth.currentAuthenticatedUser();

		dispatch({
			type: SWITCH_USER,
			user,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: SWITCH_USER,
			user: null,
		});
	}
};

export const signUp =
	(values, completion = () => {}) =>
	async (dispatch) => {
		const { username, password, email, phone: phone_number } = values;
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const { user } = await Auth.signUp({
				username,
				password,
				attributes: {
					email, // optional
					phone_number, // optional - E.164 number convention
					// other custom attributes
				},
			});

			dispatch({ type: SIGN_UP, payload: user });
			completion();
		} catch (error) {
			console.log("error signing up:", error.message);

			dispatch({
				type: ERROR_AUTH,
				payload: error,
			});
		}
		dispatch({ type: IS_LOADING, payload: false });
	};
export const signUpConfirm =
	(values, completion = () => {}) =>
	async (dispatch) => {
		const { username, confirmCode: code } = values;
		dispatch({ type: IS_LOADING, payload: true });
		try {
			await Auth.confirmSignUp(username, code);
			completion();
		} catch (error) {
			console.log("error confirming sign up", error);
			dispatch({
				type: ERROR_AUTH,
				payload: error,
			});
		}
		dispatch({ type: IS_LOADING, payload: false });
	};

export const signIn =
	(values, completion = () => {}) =>
	async (dispatch) => {
		const { username, password, email } = values;
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const user = await Auth.signIn(username, password);
			dispatch({ type: AWS_SIGN_IN });
			completion();
		} catch (error) {
			console.log("error signing in", error);
			dispatch({
				type: ERROR_AUTH,
				payload: error,
			});
		}
		dispatch({ type: IS_LOADING, payload: false });
	};

export const signOut =
	(completion = () => {}) =>
	async (dispatch) => {
		try {
			await Auth.signOut();
			completion();
		} catch (error) {
			console.log("error signing out: ", error);
		}
	};
