import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../../asset/css/App.css";
import { Getallassignement ,AssignementsChecker} from '../../api/Assignement';
import { GetallUsers } from '../../api/User';
import { GetallCourses } from '../../api/Cours';
import { GetCours } from '../../api/Cours';
import { AssignementsCreat } from '../../api/Assignement';

const Addassignement= ()=> {

  const navigate=useNavigate()
    const [courses,setcourses]=useState([])
    const [cours,setcours]=useState()
    const [err,seterr]=useState()
    const [test,settest]=useState()
    const [users,setusers]=useState([])
    let array=[]
     
    const data= async ()=>{
       const Users= await GetallUsers()
       if(Users.data && !Users.data.errmsg) setusers(Users.data.data)
       const Courses= await GetallCourses()
       if(Courses.data && !Courses.data.errmsg) setcourses(Courses.data)

    }
    const onChange=async (e)=>{
    array=[]
    const name= await GetCours(e.target.value)
     setcours(e.target.value)
    settest(name.data.organism.name)
    }
 
    useEffect(()=>{
        data();
    },[])

  const onClick=(a)=>{
      if(array.includes(a.target.id)){
        array=array.filter(e=> e!=a.target.id)
        console.log(array)
      }else{
        array.push(a.target.id)
        console.log(array)
      }
  }
  const submit= async ()=>{
    const creat= await AssignementsCreat(array,cours)
    if(creat.data.msg) navigate('/assignement/display')
    if(creat.data.errmsg) seterr(creat.data.errmsg)
    console.log(creat)
  }
  return (
    <div>
      <div className=" ">
           <h3 className="ms-5">Assignement</h3>
           <hr></hr>   
      <div className="container shadow d-flex justify-content-around tblw ">
      <div className='multi'>
      {err?<h2 className='alert-danger emlsize mb-3'>{err}</h2>:""}
      <h3 className='navbar-brand text-center text-white hover'>liste des employes</h3>
            {users.map(e=>(
             (e.organism!=null && e.organism.name==test)?
            <div className='mini mx-auto mt-2 d-flex justify-content-center align-items-center'>
            <input type="checkbox" id={e._id} className='mx-0 ' />
            <label id={e._id} for={e._id} className="rowsize" onClick={onClick}>{e.email}</label>
            </div>:""))
            }
      </div>
      <div className='multi d-flex flex-column justify-content-center'>
      <h3 className='navbar-brand text-center text-white hover'>selectione une formation</h3>
      <select name="organism" className="form-select"  aria-label="Default select example" onChange={onChange}>
            <option selected>none</option>
            {
               courses? courses.map(c=>(
                    <option value={c._id}>{c.name}</option>
              )) :"" 
            }
        </select>
        <button onClick={submit}>Submit</button>
      </div>
       
    </div>
    </div>
       
    </div>
  )
}
export default Addassignement