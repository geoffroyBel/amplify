const stripe = require("stripe")("sk_test_h6xp0uBCgjfwslSFGASNX33P00kj71BsYV");
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
	let options = { business_type: "individual" };
	console.log(`EVENT: ${JSON.stringify(event)}`);
	const { arguments } = event;

	if (!arguments || !arguments.input) {
		throw new Error("No Input ");
	}

	if (!arguments.input.company && !arguments.input.individual) {
		throw new Error("No Argument input for company creation ");
	}

	if (arguments.input.company) {
		options = {
			...options,
			company: arguments.input.company,
			business_type: "company",
		};
	} else {
		options = { ...options, individual: arguments.input.individual };
	}
	try {
		const account = await stripe.accounts.create({
			country: "FR",
			type: "express",
			capabilities: {
				card_payments: { requested: true },
				transfers: { requested: true },
			},
			...options,
			metadata: { id: arguments.input.id },
			business_profile: { url: "http://www.slideguide.com" },
		});
		const accountLink = await stripe.accountLinks.create({
			account: account.id,
			refresh_url: "http://localhost:8000/company/create/1",
			return_url: "http://localhost:8000/company/create/2",
			type: "account_onboarding",
		});

		return {
			accountID: account.id,
			url: accountLink.url,
		};
	} catch (error) {
		throw new Error(error.message);
	}
};
