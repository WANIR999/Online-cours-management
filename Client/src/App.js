import Routesysteme from './router/routes';
import './asset/css/App.css'
import {useState} from 'react'
import AuthContext from '../contexts/authContext';

function App() {
  const [name,setname]=useState("")
  return (
    <AuthContext.Provider value={{name,setname}} >
    <div className='auth'>

   <Routesysteme/>

    </div>
    </AuthContext.Provider>

  );
}

export default App;
