import axios from "axios";

const GetallCourses= async ()=>{
    return await axios.get('http://localhost:8080/cours/getall')
}
const CreateCours= async (body)=>{
    return await axios.post('http://localhost:8080/cours/creat',body)
}
const GetCours= async (body)=>{
    return await axios.post('http://localhost:8080/cours/getone',{id:body})
}
const removeCours= async (body)=>{
    return await axios.post('http://localhost:8080/cours/remove',{id:body})
}

export {GetallCourses,CreateCours,GetCours,removeCours}