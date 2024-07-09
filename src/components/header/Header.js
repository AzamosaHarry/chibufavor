import "./Header.css";
import logo from "../../assets/logo2.png";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(1);

  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setActiveId(1);
        break;
      case "/about":
        setActiveId(2);
        break;
      case "/work":
        setActiveId(3);
        break;
      case "/pricing":
        setActiveId(4);
        break;
      default:
        setActiveId(1);
        break;
    }
  }, [location]);

  const [active, setActive] = useState(false);
  const handleSidebar = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <img
        src={logo}
        alt="logo"
        className="header__logo"
        onClick={() => navigate("/")}
      />
      <ul className="header__nav">
        <li
          onClick={() => {
            navigate("/about");
            setActiveId(1);
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            navigate("/driving-school");
            setActiveId(2);
          }}
        >
          Driving school
        </li>
      </ul>
      <span className="header__acc">
        <button>
          <a
            href="tel:+2348060909770"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>Contact us</h3>
          </a>
        </button>
        <CiMenuFries className={`header__menu`} onClick={handleSidebar} />
      </span>

      {/* SIDE BAR ELEMENTS */}
      <div className={`sidebar${active ? "--active" : ""}`}>
        <span className="sidebar__header">
          <img src={logo} alt="logo" className="header__logo" />
          <button onClick={handleSidebar}>Close</button>
        </span>
        <ul className="sidebar__nav">
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/driving-school")}>Driving school</li>
        </ul>
        <span className="sidebar__acc">
          <button>
            <a
              href="tel:+2348060909770"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Contact us</h3>
            </a>
          </button>
        </span>
      </div>
    </div>
  );
}

export default Header;
