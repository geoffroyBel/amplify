import { API } from "aws-amplify";
import { listPrestations as fetchPrestations } from "../../graphql/queries";
import { ERROR_PRESTATION, LIST_PRESTATIONS } from "../types";

export const listPrestations = () => async (dispatch) => {
	console.log("prestations");
	try {
		const { data } = await API.graphql({ query: fetchPrestations });
		dispatch({ type: LIST_PRESTATIONS, payload: data[LIST_PRESTATIONS].items });
	} catch (error) {
		dispatch({ type: ERROR_PRESTATION, payload: error });
	}
};
