import axios from "axios";

const Login= async(body)=>{
  const log= await axios.post('http://localhost:8080/assignement/checkvalidassignement',body)
  console.log(log.data)
}


export default {Login}