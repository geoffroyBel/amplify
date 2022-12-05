import React, { useState, useEffect, useCallback } from "react";
import {
	Stepper,
	Step,
	StepLabel,
	Button,
	Container,
	Box,
	Typography,
	CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Formik, Form } from "formik";
import * as companyActions from "../store/actions/companyActions";

import PrestationSuccess from "../components/forms/PrestationCreationSucces";

import { CompanyValidationSchema as validationSchema } from "../components/forms/formModels/validationSchema";
import CompanyFormModel from "../components/forms/formModels/CompanyFormModel";
import formInitialValues from "../components/forms/formModels/formInitialValues";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import CompanyForm from "../components/forms/CompanyForm";
import { useParams } from "react-router-dom";
import CompanySucces from "../components/forms/CompanySucces";

const useStyles = makeStyles((theme) => ({
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
	wrapper: {
		margin: theme.spacing(1),
		position: "relative",
	},
	buttonProgress: {
		position: "absolute",
		top: "50%",
		left: "50%",
	},
}));

const steps = [
	"Information Personnel",
	"Creer votre compte Stripe",
	"Votre Compagnie est valider",
];
//810619
const { formId, formField } = CompanyFormModel;
const containerVariants = {
	hidden: {
		x: "-100vw",
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			when: "beforeChildren",
		},
	},
	exit: {
		x: "100vw",
		opacity: 0,
		transition: {
			//delay: 0.5,
			duration: 0.5,
			when: "beforeChildren",
		},
	},
};
const MyComponent = ({ currentItem, children }) => (
	<AnimatePresence exitBeforeEnter>
		<Box
			component={motion.div}
			key={currentItem}
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
			}}>
			{children}
		</Box>
	</AnimatePresence>
);
function _renderStepContent(step) {
	switch (step) {
		case 0:
			return (
				<MyComponent currentItem={0}>
					<CompanyForm {...{ step }} currentItem={0} formField={formField} />
				</MyComponent>
			);
		case 1:
			return (
				<MyComponent currentItem={1}>
					<CompanySucces {...{ step }} currentItem={1} formField={formField} />
				</MyComponent>
			);
		default:
			return <div>Not Found</div>;
	}
}

export default () => {
	const { step } = useParams({ step });
	const classes = useStyles();
	const dispatch = useDispatch();
	const user = useSelector(({ user }) => user);
	const { loading, company, url } = useSelector(({ company }) => company);
	const [activeStep, setActiveStep] = useState(0);
	const currentValidationSchema = validationSchema[activeStep];
	const isLastStep = activeStep === steps.length - 1;

	useEffect(() => {
		if (typeof step !== "undefined") {
			console.log(step);
			console.log("-----", Number(step));
			setActiveStep(Number(step) - 1);
		}
	}, [step]);

	useEffect(() => {
		if (url) {
			window.location = url;
		}
	}, [url]);

	useEffect(() => {
		if (company?.status === "pending") {
			//window.location = url;
			console.log("--------COMPANY------------------ set new link account");
			console.log(company);
			dispatch(companyActions.updateCompany(company));
		}
	}, [company]);
	const handleSubmit = useCallback(() => {
		if (!company) {
			_handleSubmit(values, actions);
		}
	}, [activeStep, company]);
	function _handleSubmit(values, actions) {
		if (activeStep === 0) {
			dispatch(companyActions.createCompany(values, user));
		} else if (isLastStep) {
			//dispatch(awsActions.postPrestation(values, user));
			actions.setSubmitting(false);

			setActiveStep(activeStep + 1);
		} else {
			setActiveStep(activeStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	}

	function _handleBack() {
		setActiveStep(activeStep - 1);
	}

	return (
		<Box
			component={"div"}
			sx={{
				display: "flex",
				flexDirection: "column",
			}}>
			<Box
				sx={{
					position: "absolute",
					left: 0,
					top: 0,
					right: 0,
					height: 100,
					zIndex: 10,
					overflow: "scroll",
				}}>
				<Stepper activeStep={activeStep} className={classes.stepper}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
			</Box>
			<Container
				disableGutters
				maxWidth='sm'
				sx={{
					display: "flex",
					flex: 1,
					flexDirection: "column",
					backgroundColor: "red",
				}}>
				{/* {activeStep === steps.length ? (
					<PrestationSuccess />
				) : (
					<Formik
						initialValues={formInitialValues}
						validationSchema={currentValidationSchema}
						onSubmit={_handleSubmit}>
						{({ isSubmitting }) => (
							<Form
								id={formId}
								style={{
									//flex: 1,

									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									marginTop: 100,
									marginBottom: 100,
								}}>
								{_renderStepContent(activeStep)}
								<div className={classes.buttons}>
									{activeStep !== 0 && (
										<Button onClick={_handleBack} className={classes.button}>
											Back
										</Button>
									)}

									<Button
										disabled={isSubmitting}
										type='submit'
										variant='contained'
										color='primary'
										className={classes.button}>
										{isLastStep ? "Place order" : "Next"}
									</Button>
									{isSubmitting && (
										<CircularProgress
											size={24}
											className={classes.buttonProgress}
										/>
									)}
								</div>
								<Box
									sx={{
										// position: "absolute",
										// left: 0,
										// bottom: 0,
										// right: 0,
										// height: 100,
										paddingRight: 1,
									}}></Box>
							</Form>
						)}
					</Formik>
				)} */}
			</Container>
		</Box>
	);
};
