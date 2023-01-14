import { useState } from "react";
import "../../asset/css/App.css";
import FormInput from "../layout/Forminput";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState(false)
  const [msg,setmsg]=useState(false)
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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
      <form onSubmit={handleSubmit}  className="authform">
        <h1>Login</h1>
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
        <button className="authbtn">Submit</button>
        <div className="w-100 d-flex justify-content-around align-items-center pb-3">
        <Link to="/forgetpassword"  className="btn text-secondary fw-bold fs-6" >forget ur password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;