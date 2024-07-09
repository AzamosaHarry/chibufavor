import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import image2 from "../../assets/img5.jpg";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img6.jpg";

import "./Home.css";
import { BsArrowRight } from "react-icons/bs";
import { HiOfficeBuilding } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { PiTireBold } from "react-icons/pi";
import { FaGear, FaPeopleCarryBox } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { FaCarAlt, FaCarSide } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="home">
        <section className="home__section__one">
          <h3>WELCOME TO CHIBUFAVOR AUTOMOBILE COMPANY</h3>
          <h1>
            Maintainance and sales of vehicles and driving school certification
          </h1>
          <p>Address: ZONE C, Mechanic Village, Ohiiya, Umuahia South</p>
        </section>
        <section className="home__section__two">
          <div className="home__section__two__start">
            <h1>WE ARE A TEAM OF PROFESSIONALS</h1>
            <h3>
              Skilled And Certified Auto Experts To Help Address Your Car Or
              Machine Repair, Maintenance And Servicing Need
            </h3>
          </div>
          <div className="home__section__two__end">
            <button>
              <a
                href="tel:+2348060909770"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Call
              </a>
            </button>
          </div>
        </section>
        <section className="home__section__three">
          <h1>WHY CHOOSE US?</h1>
          <h3>We Provide The Best Services</h3>
          <div className="home__section__three__div">
            <div className="home__section__three__div__block">
              <PiTireBold className="home__icons" />
              <h3>Quality materials</h3>
            </div>
            <div className="home__section__three__div__block">
              <LiaMoneyBillWaveSolid className="home__icons" />
              <h3>Affordable rates</h3>
            </div>
            <div className="home__section__three__div__block">
              <FaGear className="home__icons" />
              <h3>Team of automotive expert</h3>
            </div>
            <div className="home__section__three__div__block">
              <FaPeopleCarryBox className="home__icons" />
              <h3>Customer centric</h3>
            </div>
            <div className="home__section__three__div__block">
              <SiAdguard className="home__icons" />
              <h3>High professionals standards</h3>
            </div>
          </div>
        </section>
        <section className="home__section__four">
          <div className="home__section__four__div1">
            <h1>About us</h1>
            <h2>A Technology Based Automobile Repair Shop</h2>
            <p>
              Welcome to CHIBUFAVOR Auto Mechaboile, an automobile and machine
              repair registered company in Nigeria. Chibufavor AutoMobile is a
              technology based automobile repair shop that is well equipped with
              the state-of-the-arth facilities to handle all repair, maintenance
              and servicing needs. Our team is composed of certified and
              qualified mechanics, diagnosticians, body and electronic
              specialists that are committed to delivering quality service to
              our highly esteemed customers. We pride ourselves over our
              undeniable ability to solve all maintenance and repair problems of
              modern vehicles in Nigeria. We are committed to rebuilding the
              trust that is typically lost between skilled auto repair
              personnels and vehicle users.
            </p>
            <button onClick={() => navigate("/about")}>learn more</button>
          </div>
          <div className="home__section__four__div2">
            <img src={image2} alt="" />
            <span>
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </span>
          </div>
        </section>
        <section className="home__section__three">
          <h1>Our Services</h1>
          <h3>We aslo offer upgraded services</h3>
          <div className="home__section__three__div">
            <div className="home__section__five__div__block">
              <FaCarSide className="home__icons2" />
              <div>
                <h1>REPAIRS</h1>
                <h2>
                  We provide repair services for diverse vehicle problems and
                  models.
                </h2>
              </div>
            </div>
            <div className="home__section__five__div__block">
              <GiSpanner className="home__icons2" />
              <div>
                <h1>SPARE PARTS</h1>
                <h2>
                  We also sell diverse spare parts for different brands and
                  models of your vehicles.
                </h2>
              </div>
            </div>
            <div className="home__section__five__div__block">
              <FaCarAlt className="home__icons2" />
              <div>
                <h1>PRE PURCHASE INSPECTION</h1>
                <h2>
                  WWe also assist our customers to inspect vehicles before they
                  purchase them..
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="home__section__two">
          <div className="home__section__two__start">
            <h1>OUR TEAM MEMBERS ARE</h1>
            <h3>
              Adequately Equipped With Excellent Training And Hands-On
              Experience To Handle A Wide Range Of Auto Repair Needs
            </h3>
          </div>
          <div className="home__section__two__end">
            <button>
              <a
                href="tel:+2348060909770"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact us <BiPhone />
              </a>
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
