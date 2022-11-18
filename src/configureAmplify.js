import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
import { AmplifyBridge } from "./store";

export default (store) => {
	Amplify.Logger.LOG_LEVEL = "INFO";
	Amplify.configure(awsmobile);
	new AmplifyBridge(store);
};
