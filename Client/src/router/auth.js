import React, { useState } from 'react';
import "../asset/css/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Login from '../components/auth/Login';
import LogContext from '../contexts/authContext';



function AuthRoutes() {
const [isloged,setisloged]=useState()
const [loginerr,setloginerr]=useState()
const [logtoken,setlogtoken]=useState()
    return (
        <LogContext.Provider value={{isloged,setisloged,loginerr,setloginerr,logtoken,setlogtoken}}>
      <Router>
       
        <Routes>

          

          <Route path='login' element={<Login/>}/>
   

        </Routes>
      </Router>
      </LogContext.Provider>
  
    );
  }
  
  export default AuthRoutes;