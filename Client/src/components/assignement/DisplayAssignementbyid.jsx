import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../../asset/css/App.css";
import { Getassignement ,AssignementsChecker} from '../../api/Assignement';
import { DecryptToken } from '../../api/Auth';

const DisplayAssignementById= ()=> {

  const navigate=useNavigate()
    const [Data,setdata]=useState([])
     
    const data= async ()=>{
        // AssignementsChecker()

        const token=  await DecryptToken(localStorage.getItem('token'))
       const assignements= await Getassignement(token.data.data.user._id)
    //   if(assignements.data)setdata(assignements.data)
    console.log(assignements)

    }
    useEffect(()=>{
        data();
    },[])

    const update= async (e)=>{
      e.preventDefault()
     
    }

    const remove= async (e)=>{
      e.preventDefault()
     
    }
  console.log(Data)

  return (
    <div>
       <div className=" ">
           <h3 className="ms-5">Assignement</h3>
           <hr></hr>   
      <div className="container shadow d-flex flex-column justify-content-start tblw ">
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
                    <tr key={e._id}>
                    <td className='text-center emlsize'> {e.user.image==""?"":<img src={`http://localhost:8080/public/${e.user.image}`} className=" imgsize mx-automy my-auto rounded-circle" alt="img"/>}{e.user.name}</td>
                    <td className='text-center emlsize'>{e.cours.image==""?"":<img src={`http://localhost:8080/public/${e.cours.image}`} className=" imgsize mx-automy my-auto rounded-circle" alt="img"/>}{e.cours.name}</td>
                    <td className='text-center emlsize'> {new Date(e.cours.end).getDate()-new Date(e.cours.start).getDate()} days</td>
                    <td className='text-center emlsize'>{new Date(e.cours.end).getDate()-new Date().getDate()}days</td>
                    <td className='text-center emlsize'>
                        <button type="submit"  value={e._id} onClick={update}  className="btn btn-danger w-25 h-25 "></button>
                        </td>
                    <td className='text-center'>
                        <button type="submit"  value={e._id} onClick={update}  className="btn btn-primary w-25 h-25 "></button>
                        </td>
                    </tr>
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
export default DisplayAssignementById