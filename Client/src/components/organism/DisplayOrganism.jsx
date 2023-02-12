import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../../asset/css/App.css";
import { GetallOrganism ,removeOrganism} from '../../api/Organism';

const DisplayOrganism= ()=> {

  const navigate=useNavigate()
    const [Data,setdata]=useState([])
     
    const data= async ()=>{
       const organismes= await GetallOrganism()
      if(organismes.data)setdata(organismes.data)
      // console.log(organismes)

    }
    useEffect(()=>{
        data();
    },[])

    const update= async (e)=>{
      e.preventDefault()
     
    }

    const remove= async (e)=>{
      e.preventDefault()
      const removed= await removeOrganism(e.target.value)
      window.location.reload(false)
    }
  console.log(Data)

  return (
    <div>
       <div className=" ">
           <h3 className="ms-5">Organismes</h3>
           <hr></hr>   
      <div className="container shadow d-flex flex-column justify-content-start tblw ">
      <h2><Link to="/organism/add"  className="text-secondary" ><i class="bi bi-building-fill-add"></i></Link></h2>
       <div className="bg-white tbl mt-3">
        
        <table className="table table-bordered">
        <thead>
            <tr> 
            <th scope="col" className='text-center emlsize'>Nom d'organisme </th>    
            <th scope="col" className='text-center emlsize'>action</th>   
            </tr>
        </thead>
        <tbody >
          {
           Data.map((e)=>(
            e._id!=null?
                    <tr key={e._id}>
                    <td className='text-center emlsize'>{e.name}</td>
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
export default DisplayOrganism