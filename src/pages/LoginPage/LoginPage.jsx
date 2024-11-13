import { ErrorMessage, Field, Form, Formik } from "formik";
import { DocumentTitle } from "../../components/DocumentTitle";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginPage.module.css";

const inputSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, "Password is too Short!")
    .max(50, "Password is too long!")
    .required("This field cannot be empty!"),
  email: Yup.string()
    .email()
    .min(3, "Email is too Short!")
    .max(50, "Email is too long!")
    .required("This field cannot be empty!"),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn({ ...values }));
    actions.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <>
      <DocumentTitle>Login page</DocumentTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={inputSchema}
      >
        <Form className={css.form}>
          <div className={css["form-boby"]}>
            <div>
              <label className={css.label} htmlFor={emailId}>
                E-mail
              </label>
              <Field
                className={css.input}
                type="email"
                name="email"
                id={emailId}
              />
              <ErrorMessage name="email" as="span" />
            </div>
            <div>
              <label className={css.label} htmlFor={passwordId}>
                Password
              </label>
              <Field
                className={css.input}
                type="password"
                name="password"
                id={passwordId}
              />
              <ErrorMessage name="password" as="span" />
            </div>
          </div>
          <button className={css.btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
}
