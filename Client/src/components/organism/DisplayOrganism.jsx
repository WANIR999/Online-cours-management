import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../../asset/css/App.css";

const DisplayOrganism = ()=> {
  const navigate=useNavigate()
    const [Data,setvalues]=useState([])
     
    const data= async ()=>{
       

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


  return (
    <div>
       <div className=" ">
           <h3 className="ms-5">Organismes</h3>
           <hr></hr>   
      <div className="container shadow d-flex flex-column justify-content-start tblw ">
      <h2><Link to="/auth/add"  className="text-secondary" ><i class="bi bi-building-fill"></i></Link></h2>
       <div className="bg-white mt-3">
        
        <table className="table table-bordered">
        <thead>
            <tr>
            <th scope="col" className='text-center'>Nom d'organism </th>  
            <th scope="col" className='text-center'>Action</th>  
            </tr>
        </thead>
        <tbody >
          {
           Data.map((e)=>(
                    <tr key={e._id}>
                    <td className='text-center'>{e.name}</td>
                    <td className='text-center'>
                        <button type="submit"  value={e._id} onClick={update}  className="btn btn-primary w-25 h-25 "></button>
                        </td>
                        <td className='text-center'>
                        <button type="submit"  value={e._id} onClick={remove}  className=" btn btn-danger w-25 h-25 "></button>
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
export default DisplayOrganism