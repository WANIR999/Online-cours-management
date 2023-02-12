import axios from "axios";

const Getallhistories= async ()=>{
    return await axios.get('http://localhost:8080/historique/getall')
}

export {Getallhistories}