import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../../asset/css/App.css";
import FormInput from "../layout/Forminput";

const Forget_pass_confirm = () => {
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState(false)
  const [msg,setmsg]=useState(false)
  const {token}= useParams()
  const [values, setValues] = useState({
    password: "",
  });

  const inputs = [
    {
        id: 1,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 2,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Passwords don't match!",
        label: "Confirm Password",
        pattern: values.password,
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
    <div className="App auth fill">
      <form onSubmit={handleSubmit}>
        <h1>Forget password</h1>
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
        <div className="w-100 d-flex justify-content-between align-items-center pb-3">
        <Link to="/login"  className="btn text-secondary fw-bold fs-6" >sign-in?</Link>
        </div>
      </form>
    </div>
  );
};

export default Forget_pass_confirm;