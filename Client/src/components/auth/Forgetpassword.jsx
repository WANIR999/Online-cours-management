import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../asset/css/App.css";
import FormInput from "../layout/Forminput";


const Forget = () => {
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState(false)
  const [msg,setmsg]=useState(false)
  const [values, setValues] = useState({
    email: "",
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

export default Forget;