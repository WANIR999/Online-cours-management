import "../../asset/css/App.css";
import"../../asset/css/sidebar.css"
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate= useNavigate()
  const onClick = async(e) => {
   e.preventDefault()
  };

  return (
    <div>
     <button  onClick={onClick} className="btn  h-25 text-center text-light p-0 m-0 hover">log out</button>
    </div>
  );
};

export default Logout;