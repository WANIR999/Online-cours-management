import { Outlet, Link } from "react-router-dom";
import "../../asset/css/App.css"
import SideBar from "./Sidebar";
import UserInfo from "./UserInfo";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";


const Navbar = () => {
  // const {name}= useContext(AuthContext)
  return (
    <div>
      <nav className="navbar navbar-dark navcolor">
        <h3 className="navbar-brand ms-3">name</h3>
      </nav>
      <div className="d-flex justify-content-between align-items-center">
        <SideBar/>
        <Outlet />
        <UserInfo />
      </div>
    </div>
  );
};

export default Navbar;