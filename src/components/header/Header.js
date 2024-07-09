import "./Header.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      {/* <img src={logo} alt="" className="header__logo" />
       */}
      <h1 onClick={() => navigate("/")}>CHIBUFAVOR</h1>
      <ul className="header__nav">
        <li onClick={() => navigate("/about")}>About us</li>
        <li onClick={() => navigate("/driving-school")}>Driving school</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
}

export default Header;
