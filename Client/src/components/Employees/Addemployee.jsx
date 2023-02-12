import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../asset/css/App.css";
import FormInput from "../layout/Forminput";
import { GetallOrganism } from "../../api/Organism";
import { CreateUser } from "../../api/User";


const AddEmployee = () => {

  const navigate=useNavigate()
  const [image,setmg]=useState([])
  const [err,seterr]=useState()
  const [organism,setorganism]=useState([])
  const [values, setValues] = useState({
    name: "",
    email: "",
    organism: "",
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
        pattern: "^[A-Za-z0-9 ]{3,26}$",
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
         
  ];
  const getorganismes=async ()=>{
    const organismes= await GetallOrganism()
    setorganism(organismes.data)
  }

  useEffect(()=>{
    getorganismes();
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data= new FormData()
    data.append('name',values.name)
    data.append('email',values.email)
    data.append('organism',values.organism)
    data.append('image',image)

    const createduser= await CreateUser(data)
    if(createduser.data && !createduser.data.errmsg){ 
      navigate('/employee/display')
    }
    if(createduser.data.errmsg) seterr(createduser.data.errmsg)
  };

  const handlechange = async (e) => {
    e.preventDefault();
    setmg(e.target.files[0])

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className=" mx-auto justify-content-center mb-5">
      <form onSubmit={handleSubmit}>
        <h1>Ajout d'employe</h1>
        {err?<h6 className="alert-danger">{err}</h6>:""}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
         <FormInput
            type="file"
            name="image"
            onChange={handlechange}
            label="image"
          />

       <select name="organism" class="form-select" aria-label="Default select example" onChange={onChange}>
            <option selected>none</option>
            {
                organism.map(c=>(
                    <option value={c._id}>{c.name}</option>
                ))
            }
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddEmployee;