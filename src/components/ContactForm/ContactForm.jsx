import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = { name: "", number: "" };
  const handleSubmit = (values, options) => {
    options.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
