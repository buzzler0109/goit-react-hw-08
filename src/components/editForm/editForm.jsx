import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

import css from "./editForm.module.scss";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

const inputSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too Short!")
    .max(50, "Name is too long!")
    .required("This field cannot be empty!"),
  number: Yup.string()
    .min(3, "Number is too Short!")
    .max(50, "Number is too long!")
    .required("This field cannot be empty!"),
});

const EditForm = ({ contact }) => {
  const dispatch = useDispatch();
  const id = contact.id;
  console.log(id);

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(updateContact({ id, ...values }));
    actions.resetForm();
    toast.success("Information has been successefully updated", {
      position: "bottom-center",
    });
  };

  const initialValues = {
    name: "",
    number: "",
  };

  return (
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
            <Field className={css.input} type="text" name="name" id={nameId} />
            <ErrorMessage name="name" as="span" />
          </div>
          <div>
            <label className={css.label} htmlFor={numberId}>
              Number
            </label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberId}
            />
            <ErrorMessage name="number" as="span" />
          </div>
        </div>
        <>
          <button className={css.btn} type="submit">
            Update info
          </button>
          <Toaster />
        </>
      </Form>
    </Formik>
  );
};

export default EditForm;
