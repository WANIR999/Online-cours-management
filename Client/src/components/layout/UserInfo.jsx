import {Outlet, Link} from "react-router-dom";
import '../../asset/css/sidebar.css'
import profilepic from '../../asset/images/pngwing.png'

const UserInfo = () => {
    return (
       <div className="rightbox d-flex flex-column justify-content-between align-items-start py-3">
        <div className="card sidecolor mt-2">
            <img src={profilepic} className="card-img-top w-50 mx-auto " alt="img"/>
            <div className="card-body ">
                <h4 className="card-title text-center">mohammed</h4>
                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
       </div>
       <Link to=""  className="btn navbar-brand text-white mx-auto hover" ><i class="bi bi-box-arrow-right"></i> logout </Link>

      </div>
      
    );

  };
  
  export default UserInfo;