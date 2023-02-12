import {Outlet, Link} from "react-router-dom";
import '../../asset/css/sidebar.css'

const SideBar = () => {
    return (
       <div className="sidebox d-flex flex-column justify-content-around align-items-start py-3">
         <Link to="/employee/display" className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-house-fill"></i> accueil</Link>
          <Link to="/employee/display" className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-people-fill"> Employes </i></Link>
          <Link to="/organism/display"  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-building-fill"></i> Organismes </Link>
          <Link to="/courses/display"  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-journal-text"></i> Formation</Link>
          <Link to="/assignement/display"  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-calendar-week-fill"></i> Assignements</Link>
          <Link to="/history/display"  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-card-list"></i> Historique </Link>
          <Link to=""  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-graph-up"></i> statistic </Link>
       </div>
      
    );

  };
  
  export default SideBar;