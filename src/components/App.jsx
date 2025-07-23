import { ErrorMessage, FastField, Form, Formik } from "formik";
import * as yup from "yup";
import ErrorHandler from "./ErrorHandler";
const initialValues = {
  name: "",
  email: "",
  password: "",
  bio: "",
};
const onSubmit = (values,submitProps) => {
  console.log(submitProps);
  setTimeout(()=>{
    submitProps.setSubmitting(false);
  },10000)
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
          console.log(formik);
          return (
            <Form className="registerForm">
              <label htmlFor="name">Full Name:</label>
              <FastField type="text" name="name" id="name" />
              <ErrorMessage name="name" component={ErrorHandler} />
              <label htmlFor="email">Email:</label>
              <FastField type="text" name="email" id="email" />
              <ErrorMessage name="email" component={ErrorHandler} />
              <label htmlFor="password">Password:</label>
              <FastField type="password" name="password" id="password" />
              <ErrorMessage name="password">
                {(props) => <p className="errorMsg">{props}</p>}
              </ErrorMessage>
              <label htmlFor="bio">bio:</label>
              <FastField type="text" name="bio" id="bio" as="textarea" />
              <ErrorMessage name="bio" component={ErrorHandler} />
              <button type="submit" disabled={(!(formik.dirty && formik.isValid)||formik.isSubmitting)?true:false}>Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;
