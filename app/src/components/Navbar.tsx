import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/post">Posts</Link>
      <Link to="/user">Users</Link>
    </nav>
  );
}

export default Navbar;
