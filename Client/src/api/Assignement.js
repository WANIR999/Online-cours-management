import axios from "axios";

const Getallassignement= async ()=>{
    return await axios.get('http://localhost:8080/assignement/getall')
}
const Getassignement= async (body)=>{
    return await axios.get('http://localhost:8080/assignement/getone',{id:body})
}
const AssignementsChecker= async ()=>{
    return await axios.get('http://localhost:8080/assignement/checkvalidassignement')
}
const AssignementsCreat= async (array,cours)=>{
    return await axios.post('http://localhost:8080/assignement/creat',{users:array,cours:cours})
}
const RemoveAssignement= async (id)=>{
    return await axios.post('http://localhost:8080/assignement/remove',{id:id})
}

export {Getallassignement,AssignementsChecker,AssignementsCreat,Getassignement,RemoveAssignement}