import { useState , useEffect } from "react";
import "../../asset/css/App.css";
import FormInput from "../layout/Forminput";
import { useNavigate } from "react-router-dom";
import { GetallOrganism } from "../../api/Organism";
import { CreateCours } from "../../api/Cours";

const AddCours = () => {
    const navigate=useNavigate()
    const [image,setmg]=useState([])
    const [organisme,setorg]=useState([])
    const [values, setValues] = useState({
        name: "",
        descrption: "",
        organism: "",
        start: "",
        end:"",
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
            pattern: "^[A-Za-z0-9 ]{3,26}$",
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
            pattern: "^[A-Za-z0-9 ]{3,36}$",
            required: true,
          },
          {
            id: 3,
            name: "start",
            type: "date",
            label: "debute le",
            required: true,
          },
          {
            id: 4,
            name: "end",
            type: "date",
            label: "fini le",
            required: true,
          },
      ];

    const getorg= async ()=>{
       const organismes= await GetallOrganism()
       setorg(organismes.data)
       }
    
    useEffect(()=>{
        getorg();
    },[])
    

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

   const handlechange = async (e) => {
    e.preventDefault();
    setmg(e.target.files[0])

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data= new FormData()
    data.append('name',values.name)
    data.append('description',values.description)
    data.append('organism',values.organism)
    data.append('start',values.start)
    data.append('end',values.end)
    data.append('image',image)
   const createdcours= await CreateCours(data)
    if(createdcours.data && !createdcours.data.errmsg) navigate('/courses/display')
  };
  
  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <h2 className="text-center">ajout d'une formation</h2>
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
          <label>organism</label>
          <select name="organism" class="form-select" aria-label="Default select example" onChange={onChange}>
            <option selected>none</option>
            {
                organisme.map(c=>(
                    <option value={c._id}>{c.name}</option>
                ))
            }
           
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddCours;