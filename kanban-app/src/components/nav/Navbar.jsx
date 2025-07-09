import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="rotating-logo" />
      </Link>
      <h1>K-Lane Board App</h1>
    </div>
  );
};

export default Navbar;
