import axios from "axios";

const GetallUsers= async ()=>{
    return await axios.get('http://localhost:8080/user/getall')
}
const CreateUser= async (body)=>{
    return await axios.post('http://localhost:8080/user/creat',body)
}
const RemoveUser= async (body)=>{
    return await axios.post('http://localhost:8080/user/remove',{id:body})
}

export {GetallUsers,CreateUser,RemoveUser}