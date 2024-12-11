import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <div>
      {showNavbar && <Navbar />}
      <Outlet />
    </div>
  );
}

export default Layout;
