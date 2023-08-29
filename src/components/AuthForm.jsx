import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/AuthForm.css";

const AuthForm = ({ isLogin }) => {
	const initialValues = {
		username: "",
		password: "",
		confirmPassword: "",
	};

	const validationSchema = Yup.object().shape({
		username: Yup.string().required("Username is required"),
		password: Yup.string().required("Password is required"),
		confirmPassword: isLogin
			? Yup.string()
			: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
	});

	const handleSubmit = (values, { setSubmitting }) => {
		// Simulate API call or other actions
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	};

	return (
		<div className="auth-form-container">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className="auth-form">
					<h2>{isLogin ? "Login" : "Sign Up"}</h2>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<Field type="text" name="username" />
						<ErrorMessage
							name="username"
							component="div"
							className="error-message"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<Field type="password" name="password" />
						<ErrorMessage
							name="password"
							component="div"
							className="error-message"
						/>
					</div>
					{!isLogin && (
						<div className="form-group">
							<label htmlFor="confirmPassword">Confirm Password</label>
							<Field type="password" name="confirmPassword" />
							<ErrorMessage
								name="confirmPassword"
								component="div"
								className="error-message"
							/>
						</div>
					)}
					<button type="submit" className="btn">
						{isLogin ? "Login" : "Sign Up"}
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default AuthForm;
