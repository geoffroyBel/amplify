import {
	CREATE_COMPANY,
	IS_LOADING,
	ERROR_CREATE_COMPANY,
	CLEAR_ERROR,
	FETCH_COMPANY,
	UPDATE_COMPANY,
} from "../types";
import Company from "../../models/Company";

const pagesNumber = ["company", "person", "external_account"];

const initialStates = {
	loading: false,
	step: 0,
	company: null,
	error: null,
	url: null,
	// initialValues: {
	// 	individual: {
	// 		last_name: "geoff",
	// 		first_name: "geoff",
	// 		dob: "11/11/1981",
	// 		email: "froy@l.fr",
	// 		phone: "7651010887",
	// 		address: {
	// 			line1: "rue du robec",
	// 			city: "rouen",
	// 			state: "normandie",
	// 			postal_code: "76000",
	// 		},
	// 	},
	// 	business_type: 2,
	// 	person: {
	// 		last_name: "geoff",
	// 		first_name: "geoff",
	// 		dob: "11/11/1981",
	// 		email: "froy@l.fr",
	// 		phone: "7651010887",
	// 		address: {
	// 			line1: "rue du robec",
	// 			city: "rouen",
	// 			state: "normandie",
	// 			postal_code: "76000",
	// 		},
	// 		relationship: {
	// 			director: 1,
	// 		},
	// 	},
	// 	company: {
	// 		name: "Cours",
	// 		phone: "7761234552",
	// 		address: {
	// 			line1: "rue du robec ta mere la chagattte del morté",
	// 			line2: "rez de chaussez",
	// 			state: "normandie",
	// 			city: "rouen",
	// 			postal_code: "76000",
	// 		},
	// 		tax_id: "000000000",
	// 	},
	// 	external_account: {
	// 		currency: "EUR",
	// 		account_number: "FR1420041010050500013M02606",
	// 		country: "FR",
	// 	},
	// 	business_profile: {
	// 		mcc: "5555",
	// 		url: "http//url",
	// 	},
	// },
};
export default (state = initialStates, action) => {
	switch (action.type) {
		case FETCH_COMPANY:
			return {
				...state,
				company: action.payload.company
					? { ...action.payload.company /*, tarifs: action.payload.tarifs */ }
					: null,
			};
		case CREATE_COMPANY:
			const company = new Company(
				action.payload.id,
				action.payload.name,
				action.payload.accountID,
				action.payload.url,
				action.payload.status
			);
			return {
				...state,
				step: 1,
				loading: false,
				company,
			};
		case UPDATE_COMPANY:
			return {
				...state,
				url: action.payload.url,
			};
		case IS_LOADING:
			return { ...state, loading: action.payload };
		case ERROR_CREATE_COMPANY:
		case CLEAR_ERROR:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};
