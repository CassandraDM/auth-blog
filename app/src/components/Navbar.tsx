import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Sign Out</Link>
      <Link to="/post">Posts</Link>
      <Link to="/user">Users</Link>
    </nav>
  );
}

export default Navbar;
