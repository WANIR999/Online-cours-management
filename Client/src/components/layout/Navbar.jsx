import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import "../../asset/css/App.css"
import SideBar from "./Sidebar";
import UserInfo from "./UserInfo";
import { useContext, useEffect, useState } from "react";
import { DecryptToken } from "../../api/Auth";
import { Logoutapi } from "../../api/Auth";


const Navbar = () => {
  const [name,setname]=useState()
  const [email,setemail]=useState()
  const [role,setrole]=useState()
  const [image,setimage]=useState()
  const [organism,setorganism]=useState()
  const getUserData=async ()=>{
   const UserData= await DecryptToken(localStorage.getItem('token'))
    // console.log(UserData.data.data.user)
  setname(UserData.data.data.user.name)
  setrole(UserData.data.data.user.role.label)
  setemail(UserData.data.data.user.email)
  setimage(UserData.data.data.user.image)
  }
  useEffect(()=>{getUserData()},[])
 const onClick=async ()=>{
    const logout= await Logoutapi()
    if(logout.data.msg) {
      localStorage.clear()
      window.location.replace('http://localhost:3000/login')
    }
 }
  return (
    <div>
      <nav className="navbar navbar-dark navcolor">
        <h3 className="navbar-brand ms-3">courses</h3>
      </nav>
      <div className="d-flex justify-content-between align-items-center">
        <SideBar/>
        <Outlet />
        <UserInfo name={name} role={role} email={email} image={image} onClick={onClick}/>
      </div>
    </div>
  );
};

export default Navbar;