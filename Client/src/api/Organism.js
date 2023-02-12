import axios from "axios";

const GetallOrganism= async ()=>{
    return await axios.get('http://localhost:8080/organism/getall')
}
const CreateOrganism= async (body)=>{
    return await axios.post('http://localhost:8080/organism/creat',body)
}
const removeOrganism= async (body)=>{
    return await axios.post('http://localhost:8080/organism/remove',{id:body})
}

export {GetallOrganism,CreateOrganism,removeOrganism}