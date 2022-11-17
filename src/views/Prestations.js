import React, { useState, useEffect } from "react";
import { styled } from "@mui/styles";
import { connect, useSelector } from "react-redux";
import * as actions from "../store/actions/awsPrestation";

const Layout = styled("div")(({ theme }) => ({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-between",
	padding: 20,
}));

const Prestations = ({ listPrestations }) => {
	useEffect(() => {
		listPrestations();
	}, [listPrestations]);

	return <Layout></Layout>;
};
export default connect(null, actions)(Prestations);
// export default Prestations;
