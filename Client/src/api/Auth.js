import axios from "axios";

const Loginapi= async(body)=>{
 return await axios.post('http://localhost:8080/auth/login',body)
}
const Logoutapi= async(body)=>{
 return await axios.get('http://localhost:8080/auth/logout')
}
const DecryptToken= async(token)=>{
 return await axios.post('http://localhost:8080/auth/decrypt',{token:token})
}


export  {Loginapi,DecryptToken,Logoutapi}