import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../../asset/css/App.css";
import { Getallassignement ,AssignementsChecker,RemoveAssignement} from '../../api/Assignement';

const DisplayAssignement= ()=> {

  const navigate=useNavigate()
    const [Data,setdata]=useState([])
     
    const data= async ()=>{
        if(localStorage.getItem('token')){ 
        AssignementsChecker()
       const assignements= await Getallassignement()
      if(assignements.data)setdata(assignements.data)}

    }
 
    useEffect(()=>{
        data();
    },[])

    const update= async (e)=>{
      e.preventDefault()
     
    }

    const remove= async (e)=>{
      e.preventDefault()
      const removed = await RemoveAssignement(e.target.value)
      window.location.reload(false) 
    }
     console.log(Data)
  return (
    <div>
       <div className=" ">
           <h3 className="ms-5">Assignement</h3>
           <hr></hr>   
      <div className="container shadow d-flex flex-column justify-content-start tblw ">
      <h2><Link to="/assignement/add"  className="text-secondary" ><i class="bi bi-plus-circle-fill"></i></Link></h2>
       <div className="bg-white tbl mt-3">
        
        <table className="table table-bordered">
        <thead>
            <tr> 
            <th scope="col" className='text-center emlsize'>Nom d'employe </th>    
            <th scope="col" className='text-center emlsize'>formation assignee</th>   
            <th scope="col" className='text-center emlsize'>duree de formation</th>   
            <th scope="col" className='text-center emlsize'>duree restante</th>   
            </tr>
        </thead>
        <tbody >
          {
         Data.map((e)=>(
          e._id?
                   <tr key={e._id}>
                    <td className='text-center emlsize'> {e.user.image==""?"":<img src={`http://localhost:8080/public/${e.user.image}`} className=" imgsize mx-automy my-auto rounded-circle" alt="img"/>}{e.user.name}</td>
                    <td className='text-center emlsize'>{e.cours.image==""?"":<img src={`http://localhost:8080/public/${e.cours.image}`} className=" imgsize mx-automy my-auto rounded-circle" alt="img"/>}{e.cours.name}</td>
                    <td className='text-center emlsize'> {new Date(e.cours.end).getDate()-new Date(e.cours.start).getDate()} days</td>
                    <td className='text-center emlsize'>{new Date(e.cours.end).getDate()-new Date().getDate()}days</td>
                    <td className='d-flex justify-content-around'>
                        <button type="submit"  value={e._id} onClick={update}  className="btn btn-primary btntxt">editer</button>
                        <button type="submit"  value={e._id} onClick={remove}  className="btn btn-danger  btntxt ">suprimer</button>
                    </td>
                    </tr>
                    :""           
            ))
          }
        
        </tbody>
        </table>

        </div>
       
    </div>
    </div>
    </div>
  )
}
export default DisplayAssignement