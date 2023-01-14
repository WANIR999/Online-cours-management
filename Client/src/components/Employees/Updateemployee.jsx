import { useState , useEffect } from "react";
import "../../asset/css/App.css";
import FormInput from "../layout/Forminput";
import { useNavigate, Link, useParams } from "react-router-dom";


const Updateemployee = () => {
    const navigate=useNavigate()
    const {token}=useParams()
    const [data,setData]=useState([])
    const getdata= async ()=>{
       
       }
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
          {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
          },
          {
            id: 3,
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
     

    const getOrganism= async ()=>{
       
       }
    
    useEffect(()=>{
        getdata();
    },[])


    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value });
      };


  const handleSubmit = async (e) => {
    e.preventDefault();
   
  };
  
  return (
    <div className="auth mx-auto mb-5">
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <h2>modifier ces infos d'employe</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Updateemployee;