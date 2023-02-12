import { useState , useEffect } from "react";
import "../App.css";
import FormInput from "./Forminput";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'

const AddCours = () => {
    const navigate=useNavigate()
    const [file,setFile]=useState([])
    const [cat,setCat]=useState([])
    const [values, setValues] = useState({
        name: "",
        composent: "",
        prix: "",
        categorie:"",
      });
    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "name",
            errorMessage:
              "Username should be 3-16 characters and shouldn't include any special character!",
            label: "plat name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
          {
            id: 2,
            name: "description",
            type: "text",
            placeholder: "description",
            errorMessage:
              "description area should be 3-16 characters and shouldn't include any special character!",
            label: "description",
            pattern: " /^[a-zA-Z][a-zA-Z\\s]+{3,16}$",
            required: true,
          },
          {
            id: 3,
            name: "start",
            type: "date",
            placeholder: "start at",
            errorMessage:
              "price area should be 3-10 characters and shouldn't include any special character!",
            label: "start date",
            required: true,
          },
      ];

    const getorg= async ()=>{
      
       }
    
    useEffect(()=>{
        getorg();
    },[])
    

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

   const handlechange = async (e) => {
    e.preventDefault();
    setFile(e.target.files[0])

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData= new FormData();
    formData.append("name",values.name)
    formData.append("categorie",values.categorie)
    formData.append("Composent",values.Composent)
    formData.append("file",file)
    formData.append("prix",values.prix)
    
  };
  
  return (
    <div className="App auth mx-auto mb-5">
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <h1>ajout d'une formation</h1>
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
            name="file"
            onChange={handlechange}
            label="image"
          />
          <label>organism</label>
          <select name="categorie" class="form-select" aria-label="Default select example" onChange={onChange}>
            <option selected>none</option>
            {
                cat.map(c=>(
                    <option value={c._id}>{c.label}</option>
                ))
            }
           
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddCours;