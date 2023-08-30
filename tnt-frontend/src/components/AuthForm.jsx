import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/AuthForm.css";
import { useNavbarContext } from "../context/NavbarContext";

const AuthForm = ({ isLogin }) => {
  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };
  const { setShowNavbar } = useNavbarContext();
  setShowNavbar(false);
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
    <div className="auth-form-container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <div className="card-body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="auth-form">
                <h2 className="mb-4 text-center">
                  {isLogin ? "Login" : "Sign Up"}
                </h2>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    className={`form-control ${
                      touched.username && errors.username ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                {!isLogin && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className={`form-control ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
