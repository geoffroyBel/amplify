/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
var aws = require("aws-sdk");
var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// Stripe parameters
const stripe = require("stripe")("sk_test_h6xp0uBCgjfwslSFGASNX33P00kj71BsYV");
const endpointSecret = "whsec_EXPDwaO3ug3XwelFUjhu3u7ygnl3gJUb";
//Company-kvoqldofbzcixpevne7w6kpdqu-dev
// declare a new express app
// Table parameters
let companyTable = "Company-kvoqldofbzcixpevne7w6kpdqu-dev";
// Stripe parameters
var docClient = new aws.DynamoDB.DocumentClient();
if (process.env.ENV === "prod") {
	// Set prod env
	console.log("Prod env");
	companyTable = "Company-dp3c7ycdm5cljmekfvj2cpva3q-main";
	// Stripe parameters
	// stripe = require("stripe")("sk_live_********");
	endpointSecret = "whsec_dsrWDo8CMartpgO81py532GUHMQN8EmD";
}
var app = express();
//app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use(
	bodyParser.json({
		verify: function (req, res, buf) {
			req.rawBody = buf.toString();
		},
	})
);
//https://www.youtube.com/watch?v=Yjv1zA-EGqA
//https://vzwvqf3cjg.execute-api.eu-west-2.amazonaws.com/dev/webhook
app.post("/webhook", async function (request, response) {
	const sig = request.headers["stripe-signature"];
	let event;

	try {
		event = stripe.webhooks.constructEvent(
			request.rawBody,
			sig,
			endpointSecret
		);
		console.log(event);
	} catch (err) {
		response.status(400).send(`Webhook Error: ${err.message}`);
	}

	// Handle the event
	switch (event.type) {
		case "account.updated":
			const account = event.data.object;
			console.log(account);
			// const query_params = {
			// 	TableName: companyTable,
			// 	IndexName: "getByStripeId",
			// 	KeyConditionExpression: "accountID = :accountID",
			// 	ExpressionAttributeValues: {
			// 		":accountID": account.id,
			// 	},
			// };

			const update_params = {
				TableName: companyTable,
				Key: {
					id: account.metadata.id,
				},
				UpdateExpression:
					"set #MyVariable1 = :status, #MyVariable2 = :accountID",
				ExpressionAttributeNames: {
					"#MyVariable1": "status",
					"#MyVariable2": "accountID",
				},
				ExpressionAttributeValues: {
					":status": "completed",
					":accountID": account.id,
				},
			};
			try {
				// const {
				// 	Items: [company = null],
				// } = await docClient.query(query_params).promise();
				// console.log(company);
				await docClient.update({ ...update_params }).promise();
			} catch (error) {
				console.log("Status code : 400, Error code : ", error.stack);
				return response.status(400).json(error);
			}
			// Then define and call a function to handle the event account.updated
			break;
		case "checkout.session.completed":
			console.log("Payment checkout session was successful!");
			break;
		default:
			// Unexpected event type
			return response.status(400).end();
	}

	// Return a response to acknowledge receipt of the event
	response.json({ received: true });
});

app.listen(4242, () => console.log("Running on port 4242"));

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
