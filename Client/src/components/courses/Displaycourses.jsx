import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../../asset/css/App.css";
import { GetallCourses,removeCours } from '../../api/Cours';

const DisplayCourses= ()=> {

    const [Data,setdata]=useState([])
     
    const data= async ()=>{
       const courses= await GetallCourses()
      if(courses.data)setdata(courses.data)
  
    }
    useEffect(()=>{
        data();
    },[])

    const update= async (e)=>{
      e.preventDefault()
     
    }

    const remove= async (e)=>{
      e.preventDefault()
      const removed= await removeCours(e.target.value)
        window.location.reload(false)
    }
  console.log()

  return (
    <div>
       <div className=" ">
           <h3 className="ms-5">Formations</h3>
           <hr></hr>   
      <div className="container shadow d-flex flex-column justify-content-start tblw ">
      <h2><Link to="/courses/add"  className="text-secondary" ><i class="bi bi-file-plus-fill"></i></Link></h2>
       <div className="bg-white tbl mt-3">
        
        <table className="table table-bordered">
        <thead>
            <tr>
            <th scope="col" className='text-center emlsize'>image</th>  
            <th scope="col" className='text-center emlsize'>Nom de formation</th>  
            <th scope="col" className='text-center emlsize'>description</th>  
            <th scope="col" className='text-center emlsize'>l'organisme</th>  
            <th scope="col" className='text-center emlsize'>debute le</th>   
            <th scope="col" className='text-center emlsize'>fini le</th>  
            </tr>
        </thead>
        <tbody >
          {
         Data.map((e)=>(
          e.organism!=null?
                    <tr key={e._id}>
                    <td className='text-center emlsize'> {e.image==""?"-":<img src={`http://localhost:8080/public/${e.image}`} className=" imgsize mx-auto rounded-circle" alt="img"/>}</td>
                    <td className='text-center emlsize'>{e.name}</td>
                    <td className='text-center emlsize'>{e.description}</td>
                    <td className='text-center emlsize'>{e.organism==null?"-":e.organism.name?e.organism.name:"-"}</td>
                    <td className='text-center emlsize'>{e.start.split('T')[0].split('-').reverse().join('-')}</td>
                    <td className='text-center emlsize'>{e.end.split('T')[0].split('-').reverse().join('-')}</td>
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
export default DisplayCourses