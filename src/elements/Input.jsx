import { ErrorMessage, FastField } from "formik";
import ErrorHandler from "../components/ErrorHandler";

const Input = (props) => {
  const {type,name,label}=props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <FastField type={type} name={name} id={name} />
      <ErrorMessage name={name} component={ErrorHandler} />
    </>
  );
};
export default Input