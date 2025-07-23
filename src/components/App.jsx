import { ErrorMessage, FastField, Form, Formik } from "formik";
import * as yup from "yup";
import ErrorHandler from "./ErrorHandler";
const initialValues = {
  name: "",
  email: "",
  password: "",
  bio: ""
};
const onSubmit = (values) => {
  console.log(values);
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
      "your pass must be 7 currecter with atleast oneOf !@#$%^&*+"
    ),
});
const App = () => {
  return (
    <div className="register">
      <h1>register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validate}
      >
        <Form className="registerForm">
          <label htmlFor="name">Full Name:</label>
          <FastField type="text" name="name" id="name" />
          <ErrorMessage name="name" component={ErrorHandler}/>
          <label htmlFor="email">Email:</label>
          <FastField type="text" name="email" id="email" />
          <ErrorMessage name="email" component={ErrorHandler}/>
          <label htmlFor="password">Password:</label>
          <FastField type="text" name="password" id="password" />
          <ErrorMessage name="password">
            {(props)=><p className="errorMsg">{props}</p>}
          </ErrorMessage>
          <label htmlFor="bio">bio:</label>
          <FastField type="text" name="bio" id="bio" as="textarea" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
