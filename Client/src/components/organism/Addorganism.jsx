import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../asset/css/App.css";
import FormInput from "../layout/Forminput";


const AddOrganism = () => {
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState(false)
  const [msg,setmsg]=useState(false)
  const [values, setValues] = useState({
    name: "",
  });

  const inputs = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Title",
        errorMessage:
          "name should be 3-16 characters and shouldn't include any special character!",
        label: "Title",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth mx-auto justify-content-center mb-5">
      <form onSubmit={handleSubmit}>
        <h1>Ajout d'organism</h1>
        {errmsg ? (
          <div className="alert alert-danger text-center" role="alert">{errmsg}</div>
        ):msg? (
          <div className="alert alert-success text-center" role="alert">{msg}</div>
        ):""}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddOrganism;