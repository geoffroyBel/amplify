import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { AmplifyBridge } from "./store";

export default (store) => {
	Amplify.Logger.LOG_LEVEL = "INFO";
	Amplify.configure(config);
	new AmplifyBridge(store);
};
