import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./ui/Navbar";

function Layout() {
  const location = useLocation();
  const showNavbar =
    location.pathname !== "/" &&
    location.pathname !== "/signin" &&
    location.pathname !== "/signup";

  return (
    <div>
      {showNavbar && <Navbar />}
      <Outlet />
    </div>
  );
}

export default Layout;
