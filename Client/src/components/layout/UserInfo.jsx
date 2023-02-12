import {Outlet, Link} from "react-router-dom";
import '../../asset/css/sidebar.css'
import profilepic from '../../asset/images/pngwing.png'

const UserInfo = (props) => {
  const {name,role,email,image,onClick}=props
    return (
       <div className="rightbox d-flex flex-column justify-content-between align-items-start py-3">
        <div className="card sidecolor mt-2">
            {image==""?<img src={profilepic} className="card-img-top w-50 mx-auto " alt="img"/>:<img src={`http://localhost:8080/public/${image}`} className="card-img-top w-50 mx-auto rounded-circle" alt="img"/>}
            <div className="card-body mx-auto ">
                <h4 className="card-title text-center text-white fsmin maxw">nom:{name}</h4>
                <h3 className=" text-center text-white fsmin maxw">role: {role} {(role=="Admin")?<i class="bi bi-robot text-dark"></i>:<i class="bi bi-person text-dark"></i>}</h3>
               { role=="Admin"?"":<h3 className=" text-center text-white fsmin maxw"></h3>}
               <h4 className="text-center fsmin text-white maxw">email:<p className="fsminp">{email}</p></h4>
            </div>
       </div>
       <Link to=""  className="btn navbar-brand text-white mx-auto " > <button className="btn text-white hover" onClick={onClick}><i class="bi bi-box-arrow-right"></i>logout </button></Link>

      </div>
      
    );

  };
  
  export default UserInfo;