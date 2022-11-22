import User from "../../models/User";
import {
	SIGN_IN,
	FETCH_USER,
	SIGN_UP,
	AWS_SIGN_IN,
	SWITCH_USER,
} from "../types";

const initialStates = {
	error: null,
	token: null,
	id: null,
	user: null,
	temporyUser: null,
	loading: false,
};

export default (state = initialStates, action) => {
	switch (action.type) {
		case AWS_SIGN_IN:
			return {
				...state,
				user:
					action.payload &&
					new User(
						action.payload.attributes.sub,
						action.payload.username,
						action.payload.attributes.email
					),
				token: "no need",
				error: null,
				loading: false,
			};
		case SIGN_IN:
			return {
				...state,
				...action.payload,
				error: null,
				loading: false,
			};
		case FETCH_USER:
		case SIGN_UP:
			const temporyUser = new User(
				action.payload.id || null,
				action.payload.username,
				action.payload.email || null,
				null
			);
			return {
				...state,
				error: null,
				loading: false,
				temporyUser: temporyUser,
				user: temporyUser,
			};
		// case SIGN_UP:
		// 	return {
		// 		...state,
		// 		user: action.payload,
		// 		error: null,
		// 		loading: false,
		// 	};
		// case ERROR_AUTH:
		// 	return {
		// 		...state,
		// 		error: action.payload,
		// 	};
		// case CLEAR_ERROR:
		// 	return {
		// 		...state,
		// 		error: null,
		// 	};
		// case IS_LOADING:
		// 	return {
		// 		...state,
		// 		loading: action.payload,
		// 	};
		default:
			return state;
	}
};
