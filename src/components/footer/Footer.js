import "./Footer.css";
import logo from "../../assets/logo.png";
import { BiArrowToTop } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer__header">
        <img src={logo} alt="logo" className="header__logo" />
        <span>
          <h1 onClick={backToTop}>
            Back to top <BiArrowToTop />
          </h1>
          <p>&copy;CHIBUFAVOR 2024</p>
        </span>
      </div>
      <div className="footer__body">
        <ul className="footer__body__nav">
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/driving-school")}>Driving school</li>
          <li>
            <a
              href="tel:+2348060909770"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>CALL US</h3>
            </a>
          </li>
        </ul>
        <span className="footer__body__socials">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </span>
      </div>
    </div>
  );
}

export default Footer;
