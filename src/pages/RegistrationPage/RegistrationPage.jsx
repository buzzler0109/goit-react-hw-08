import { useDispatch } from "react-redux";
import { DocumentTitle } from "../../components/DocumentTitle";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegistrationPage.module.css";
import { register } from "../../redux/auth/operations";

const inputSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too Short!")
    .max(50, "Name is too long!")
    .required("This field cannot be empty!"),
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

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register({ ...values }));
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <>
      <DocumentTitle>Registration form</DocumentTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={inputSchema}
      >
        <Form className={css.form}>
          <div className={css["form-boby"]}>
            <div>
              <label className={css.label} htmlFor={nameId}>
                Name
              </label>
              <Field
                className={css.input}
                type="text"
                name="name"
                id={nameId}
              />
              <ErrorMessage name="name" as="span" />
            </div>
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
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}
