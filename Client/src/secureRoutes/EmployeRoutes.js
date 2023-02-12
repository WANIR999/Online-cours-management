import { useState , useEffect } from "react";
import axios from "axios"
import { useNavigate, Outlet} from "react-router-dom";
import { DecryptToken } from "../src/api/Auth";

const EployeeRoutes = () => {
   const navigate=useNavigate()
   const [role,setRole]=useState("")
    const data= async ()=>{
     const user= await DecryptToken(localStorage.getItem('token'))
     setRole(user.data.data.user._id)
    }
    useEffect(()=>{
     data()
    },[])
 
   return (
        (role!=='63c438c763c74679664a0459') ? <Outlet/> :navigate('/employee/display')
 
   );
  };
  
  export default EployeeRoutes;