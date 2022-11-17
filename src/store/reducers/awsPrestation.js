//import Prestation from "../../models/prestation";
import { LIST_PRESTATIONS } from "../types";

const initialstates = {
	availablePrestations: {},
	userPrestations: [],
	initialValues: {},
	error: null,
	loading: false,
	currentPrestation: null,
};

export default (state = initialstates, action) => {
	switch (action.type) {
		case LIST_PRESTATIONS:
			return {
				...state,
				availablePrestations: action.payload.map(
					(p) => new Prestation(p.id, p.name, p.companyName)
				),
			};
		default:
			return state;
	}
};
