import { useContext, useState } from "react";
import LogContext from "../../contexts/authContext";
import "../../asset/css/App.css";
import FormInput from "../layout/Forminput";
import {Loginapi} from '../../api/Auth'
import { useNavigate, Link } from "react-router-dom";
import { DecryptToken } from "../../api/Auth";


const Login = () => {
  const navigate=useNavigate()
  const {isloged,setisloged,loginerr,setloginerr} = useContext(LogContext)
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
      required: true,
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const log= await Loginapi(values)
    if(log.data.errmsg){
       setloginerr(log.data.errmsg)
       setisloged(false)
      }
      if(log.data.msg){
        setloginerr(false)
        setisloged(true)
        localStorage.setItem('token',log.data.token)
       window.location.replace('/employee')
       }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="App auth fill">
      <form onSubmit={handleSubmit}  className="authform">
        <h1>login</h1>
        {loginerr ? (
          <div className="alert alert-danger text-center" role="alert">{loginerr}</div>
        ):""}
        {isloged ? (
          <div className="alert alert-info text-center" role="alert">loged in</div>
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