import {Outlet, Link} from "react-router-dom";
import '../../asset/css/sidebar.css'

const SideBar = () => {
    return (
       <div className="sidebox d-flex flex-column justify-content-around align-items-start py-3">
         <Link  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-house-fill"></i> accueil</Link>
          <Link to="/auth/manager/users" className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-people-fill"> Employes </i></Link>
          <Link to="/auth/manager/categorie/list"  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-building-fill"></i> Organismes </Link>
          <Link to="/auth/manager/plat/list"  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-journal-text"></i> Formation</Link>
          <Link to="/auth/manager/payment/list"  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-calendar-week-fill"></i> Assignements</Link>
          <Link to=""  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-card-list"></i> Historique </Link>
          <Link to=""  className="btn navbar-brand text-white ms-2 hover" ><i class="bi bi-graph-up"></i> statistic </Link>
       </div>
      
    );

  };
  
  export default SideBar;