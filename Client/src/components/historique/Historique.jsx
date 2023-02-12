import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../../asset/css/App.css";
import { Getallhistories } from '../../api/Historique';

const DisplayHistoriques= ()=> {

  const navigate=useNavigate()
    const [Data,setdata]=useState([])
     
    const data= async ()=>{
       const histories= await Getallhistories()
      if(histories.data)setdata(histories.data)

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
           <h3 className="ms-5">Historique</h3>
           <hr></hr>   
      <div className="container shadow d-flex flex-column justify-content-start tblw ">
       <div className="bg-white tbl mt-3">
        
        <table className="table table-bordered">
        <thead>
            <tr> 
            <th scope="col" className='text-center emlsize'>Nom d'employe </th>    
            <th scope="col" className='text-center emlsize'>formation assignee</th>   
            <th scope="col" className='text-center emlsize'>debut de formation</th>   
            <th scope="col" className='text-center emlsize'>fin de formation</th>   
            <th scope="col" className='text-center emlsize'>duree de formation</th>   
            </tr>
        </thead>
        <tbody >
          {
           Data.map((e)=>(
            e.cours.start!=null?
                    <tr key={e._id}>
                    <td className='text-center emlsize'> {e.user.image==""?"":<img src={`http://localhost:8080/public/${e.user.image}`} className=" imgsize mx-automy my-auto rounded-circle" alt="img"/>}{e.user.name}</td>
                    <td className='text-center emlsize'>{e.cours.image==""?"":<img src={`http://localhost:8080/public/${e.cours.image}`} className=" imgsize mx-automy my-auto rounded-circle" alt="img"/>}{e.cours.name}</td>
                    <td className='text-center emlsize'>{e.cours.start.split('T')[0].split('-').reverse().join('-')}</td>
                    <td className='text-center emlsize'>{e.cours.end.split('T')[0].split('-').reverse().join('-')}</td>
                    <td className='text-center emlsize'>{new Date(e.cours.end).getDate()-new Date(e.cours.start).getDate()} days</td>

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
export default DisplayHistoriques