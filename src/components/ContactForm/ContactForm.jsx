import { Field, Form, Formik } from "formik";

const ContactForm = () => {
  const initialValues = { name: "", number: "" };
  const handleSubmit = (values, options) => {
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" />
          <Field name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
