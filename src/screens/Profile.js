import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as awsCompanyAction from "../store/actions/awsCompany";

const Profile = ({ createCompany, company }) => {
	useEffect(() => {
		createCompany();
	}, [createCompany]);

	useEffect(() => {
		console.log(company);
		if (company && company.url) {
			window.location = company.url;
		}
	}, [company]);
	return <div>Profile</div>;
};
function mapStateToProps(state) {
	const { company } = state;
	return { ...company, company: company.company };
}
export default connect(mapStateToProps, awsCompanyAction)(Profile);
