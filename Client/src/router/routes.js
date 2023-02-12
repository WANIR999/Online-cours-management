import React, { useState } from 'react';
import "../asset/css/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import AddOrganism from '../components/organism/Addorganism';
import UpdateOrganism from '../components/organism/UpdateOrganism';
import DisplayOrganism from '../components/organism/DisplayOrganism';
import AddEmployee from '../components/Employees/Addemployee';
import Updateemployee from '../components/Employees/Updateemployee';
import Displayemployee from '../components/Employees/Displayemployee';
import DisplayHistoriques from '../components/historique/Historique';
import DisplayCourses from '../components/courses/Displaycourses';
import AddCours from '../components/courses/Addcourses';
import DisplayAssignement from '../components/assignement/displayassignement';
import Addassignement from '../components/assignement/Addassignement';
import DisplayAssignementById from '../components/assignement/DisplayAssignementbyid';
import GlobalContext from '../contexts/GlobalContext';
// import AdminRoutes from '../../secureRoutes/AdminRoutes';
// import EployeeRoutes from '../../secureRoutes/EmployeRoutes';


function Routesysteme() {
  const [id,setid]=useState('one')

    return (
      <GlobalContext.Provider value={{id,setid}}>
      <Router>
       
        <Routes>

        <Route path='/' element={<Navbar/>}>
        <Route path='/display' element={<DisplayAssignementById/>}/>
        </Route> 
               
         {/* <Route  element={<EployeeRoutes/>}> */}

        <Route path='/Assignement' element={<Navbar/>}>
          <Route path='display' element={<DisplayAssignement/>}/>
      </Route> 

         {/* </Route> */}


        


         {/* <Route  element={<AdminRoutes/>}> */}

         <Route path='employee' element={<Navbar/>}>
          <Route path='display' element={<Displayemployee/>}/>
          <Route path='add' element={<AddEmployee/>}/>
          <Route path='update' element={<Updateemployee/>}/>         
      </Route>


         <Route path='/organism' element={<Navbar/>}>
          <Route path='add' element={<AddOrganism/>}/>
          <Route path='update' element={<UpdateOrganism/>}/>
          <Route path='display' element={<DisplayOrganism/>}/>
      </Route>      
         

      <Route path='/history' element={<Navbar/>}>
          <Route path='display' element={<DisplayHistoriques/>}/>
      </Route> 

         <Route path='/Assignement' element={<Navbar/>}>
          <Route path='display' element={<DisplayAssignement/>}/>
          <Route path='add' element={<Addassignement/>}/>
          <Route path='displaybyid' element={<DisplayAssignement/>}/>
      </Route> 

        <Route path='/courses' element={<Navbar/>}>
          <Route path='add' element={<AddCours/>}/>
          <Route path='update' element={<UpdateOrganism/>}/>
          <Route path='display' element={<DisplayCourses/>}/>
       </Route> 

         {/* </Route> */}

         <Route path='*' element={<DisplayAssignement/>}/>
        </Routes>
      </Router>
      </GlobalContext.Provider>
  
    );
  }
  
  export default Routesysteme;