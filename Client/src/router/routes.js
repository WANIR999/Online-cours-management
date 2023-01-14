import React from 'react';
import "../asset/css/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Login from '../components/auth/Login';
import AddOrganism from '../components/organism/Addorganism';
import UpdateOrganism from '../components/organism/UpdateOrganism';
import DisplayOrganism from '../components/organism/DisplayOrganism';
import AddEmployee from '../components/Employees/Addemployee';
import Updateemployee from '../components/Employees/Updateemployee';
import Displayemployee from '../components/Employees/Displayemployee';

function Routesysteme() {

    return (
      <Router>
       
        <Routes>

  
  
         
  
           
  
  
  
       
          <Route path='auth' element={<Navbar/>}>
          <Route path='addorganisme' element={<AddOrganism/>}/>
          <Route path='updateorganisme' element={<UpdateOrganism/>}/>
          <Route path='displayorganismes' element={<DisplayOrganism/>}/>
          <Route path='displayemployes' element={<Displayemployee/>}/>
          <Route path='addemploye' element={<AddEmployee/>}/>
          <Route path='updateemployee' element={<Updateemployee/>}/>

          </Route>
         

          
          <Route path='test' element={<Login/>}/>
   
  
       
  
     
               
         {/* <Route path='*' element={<Error/>}/> */}
        </Routes>
      </Router>
  
  
    );
  }
  
  export default Routesysteme;