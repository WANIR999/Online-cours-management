import { useState , useEffect } from "react";
import "../../asset/css/App.css";
import FormInput from "../layout/Forminput";
import { useNavigate, Link, useParams } from "react-router-dom";


const UpdateOrganism = () => {
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
            placeholder:"organism name",
            value:data.name,
            errorMessage:
              "name should be 3-16 characters and shouldn't include any special character!",
            label: "organism name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          }
      ];
     

    const getCat= async ()=>{
       
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
        <h2>modifier cet organism</h2>
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

export default UpdateOrganism;