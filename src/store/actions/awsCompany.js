import { API, graphqlOperation } from "aws-amplify";

import {
	createAccount as createStripeAccountQuery,
	createCompany as createCompanyQuery,
} from "../../graphql/mutations";
import { CREATE_COMPANY } from "../types";
const _INDIVIDUAL = {
	first_name: "bla",
	last_name: "blas",
	email: "ghfd@lo.com",
};
const _COMPANY = {
	name: "cours",
};
export const createCompany = () => async (dispatch) => {
	const {
		data: { createCompany },
	} = await API.graphql({
		query: createCompanyQuery,
		variables: { input: { ..._COMPANY } },
	});
	const { accountID, url } = await addStripeAccount({
		id: createCompany.id,
		individual: _INDIVIDUAL,
	});
	console.log(createCompany);
	dispatch({
		type: CREATE_COMPANY,
		payload: { ...createCompany, accountID, url },
	});
};

const addStripeAccount = async (input) => {
	try {
		const data = await API.graphql(
			graphqlOperation(createStripeAccountQuery, {
				input,
			})
		);
		return Promise.resolve(data.data.createAccount);
		// console.log(data);
		// return data.createAccount;
	} catch (error) {
		console.log(error);
	}
};
