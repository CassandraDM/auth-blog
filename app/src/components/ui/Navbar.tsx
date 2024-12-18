import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "1rem",
    backgroundColor: "#333",
    color: "#fff",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
    transition: "color 0.3s",
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={{ ...linkStyle, color: hovered ? "#ddd" : "#fff" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Sign Out
      </Link>
      <Link
        to="/post"
        style={{ ...linkStyle, color: hovered ? "#ddd" : "#fff" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Posts
      </Link>
      <Link
        to="/user"
        style={{ ...linkStyle, color: hovered ? "#ddd" : "#fff" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Users
      </Link>
    </nav>
  );
}

export default Navbar;
