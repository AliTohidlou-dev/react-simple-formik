import { Form, Formik } from "formik";
import * as yup from "yup";
import FormikController from "../elements/FormikController";
const initialValues = {
  name: "",
  email: "",
  password: "",
  bio: "",
  address: {
    city: "",
    postalCode: "",
  },
  gender: "",
};
const genderOptions = [
  { id: "1", value: "male" },
  { id: "2", value: "female" },
];
const onSubmit = (values, submitProps) => {
  console.log(values);

  setTimeout(() => {
    console.log(submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  }, 5000);
};
const validate = yup.object({
  name: yup
    .string()
    .required("please complete name feild")
    .min(3, "please complete name feild correctly"),
  email: yup.string().required("required").email("email is inccorect"),
  password: yup
    .string()
    .required("required")
    .matches(
      /^(?=.+[A-Z])(?=.+[a-z])(?=.+[0-9])(?=.+[!@#$%^&*+]).{7,}$/,
      "7 currecter with atleast oneOf !@#$%^&*+"
    ),
  bio: yup
    .string()
    .matches(/^[\u0600-\u06FF\s0-9A-Za-z]+$/, "you can only use word and num"),
  address: yup.object({
    city: yup.string().required("required"),
    postalCode: yup.number().required("required"),
  }),
  gender:yup
  .string()
  .required('required')
});
const App = () => {
  return (
    <div className="register">
      <h1>register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validate}
        validateOnMount
      >
        {(formik) => {
          return (
            <Form className="registerForm">
              <FormikController
                element="input"
                type="text"
                name="name"
                label="Full Name:"
              />
              <FormikController
                element="input"
                type="email"
                name="email"
                label="Email:"
              />
              <FormikController
                element="input"
                type="password"
                name="password"
                label="Password:"
              />
              <FormikController
                element="textArea"
                type="text"
                name="bio"
                label="Bio:"
              />
              <div className="inputGroup">
                <div>
                  <FormikController
                    element="input"
                    type="text"
                    name="address.city"
                    label="City:"
                  />
                </div>
                <div>
                  <FormikController
                    element="input"
                    type="number"
                    name="address.postalCode"
                    label="PostalCode:"
                  />
                </div>
              </div>
              <FormikController
                element="select"
                name="gender"
                label="Gender:"
                values={genderOptions}
              />
              <button
                type="submit"
                disabled={
                  !(formik.dirty && formik.isValid) || formik.isSubmitting
                    ? true
                    : false
                }
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;
