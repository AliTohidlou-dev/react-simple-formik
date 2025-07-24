import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

const FormikController=(props)=>{
  switch (props.element) {
    case "input":
      return <Input {...props}/>;
    case "textArea":
      return <TextArea {...props}/>;
    case "select":
      return <Select {...props}/>
    default:
      break;
  }
}

export default FormikController;