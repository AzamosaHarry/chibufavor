import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <section className="footer__section__one">
        <div>
          <h1>Company</h1>
          <p
            onClick={() => {
              navigate("/list-property");
            }}
          >
            About us
          </p>
          <p>Driving School</p>
        </div>
        <div>
          <h1>Contact</h1>

          <p>Get in touch</p>
        </div>
      </section>
      <section className="footer__section__two">
        <p> &copy; Copyright Chibufavor Automobiles 2024</p>
      </section>
    </div>
  );
}

export default Footer;
