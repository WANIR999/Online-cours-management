import React from 'react'
import { useState,useEffect ,useContext} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../../asset/css/App.css";
import { GetallUsers,RemoveUser } from '../../api/User';
import GlobalContext from '../../contexts/GlobalContext';

const Displayemployee= ()=> {
  const {setid}=useContext(GlobalContext)
    const [Data,setdata]=useState([])
     
    const data= async ()=>{
       const users= await GetallUsers()
      if(users.data.data)setdata(users.data.data)

    }
    useEffect(()=>{
        data();
        setid('one')
    },[])

    const update= async (e)=>{
      e.preventDefault()
     
    }

    const remove= async (e)=>{
      e.preventDefault()
      const removed= await RemoveUser(e.target.value)
      console.log(removed)
      window.location.reload()   
    }
  
console.log(Data)
  return (
    <div>
       <div className=" ">
           <h3 className="ms-5">Employes</h3>
           <hr></hr>   
      <div className="container shadow d-flex flex-column justify-content-start tblw ">
      <h2><Link to="/employee/add"  className="text-secondary" ><i class="bi bi-person-plus-fill"></i></Link></h2>
       <div className="bg-white tbl mt-3">
        
        <table className="table table-bordered">
        <thead>
            <tr>
            <th scope="col" className='text-center emlsize'>image</th>  
            <th scope="col" className='text-center emlsize'>Nom d'employee </th>  
            <th scope="col" className='text-center emlsize'>l'organisme</th>  
            <th scope="col" className='text-center emlsize'>email</th>  
            <th scope="col" className='text-center emlsize'>role</th>   
            <th scope="col" className='text-center emlsize'>Action</th>  
            </tr>
        </thead>
        <tbody >
          {
           Data.map((e)=>(
             e.organism!=null ?       
                    <tr key={e._id}>
                    <td className='text-center emlsize'> {e.image==""?"-":<img src={`http://localhost:8080/public/${e.image}`} className=" imgsize mx-auto rounded-circle" alt="img"/>}</td>
                    <td className='text-center emlsize'>{e.name}</td>
                    <td className='text-center emlsize'>{e.organism==null?"-":e.organism.name?e.organism.name:"-"}</td>
                    <td className='text-center emlsize'>{e.email}</td>
                    <td className='text-center emlsize'>{e.role.label}</td>
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
export default Displayemployee