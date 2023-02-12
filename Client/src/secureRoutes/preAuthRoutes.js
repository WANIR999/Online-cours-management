import { useNavigate, Outlet} from "react-router-dom";

const NoauthRoutes = () => {
  return (
      !localStorage.getItem('token') ? <Outlet/> : window.history.go(-1)
  );
};

export default NoauthRoutes;