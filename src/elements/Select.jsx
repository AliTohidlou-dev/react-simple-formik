import { ErrorMessage, FastField } from "formik";
import ErrorHandler from "../components/ErrorHandler";

const Select=(props)=>{
  const {name,label,values}=props
  return(
    <>
    <label htmlFor={name}>{label}</label>
    <FastField as="select" name={name} id={name} >
      <option value="">select</option>
      {values.map((value)=>(
        <option key={value.id} value={value.value}>{value.value}</option>
      ))}
    </FastField>
    <ErrorMessage name={name} component={ErrorHandler}/>
    </>
  )
}

export default Select;    