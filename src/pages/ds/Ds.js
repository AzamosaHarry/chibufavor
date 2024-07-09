import Hero from "../../assets/img8.jpg";
import image1 from "../../assets/img9.jpg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Ds.css";

function Ds() {
  return (
    <>
      <Header />
      <div className="ds">
        <section className="about__section__one">
          <img src={image1} className="" />
          <div className="overlay" />
          <div className="about__section__hero">
            <h1>Driving school</h1>
          </div>
        </section>
        <section className="ds__section__two">
          <div className="ds__section__two__div1">
            <h1>TOP TRAINING</h1>
            <h2>We offer quality hands on driving school training</h2>
            <p>
              We offer quality hands-on experience with our training programme
              for people seeking to start a career in automotive diagnosis and
              repairs. We expose the practical issues of the automotive industry
              to our learners by allowing them to work in our service centres to
              gain love experience.
            </p>
            <button>
              <a
                href="tel:+2348060909770"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3>Book Training</h3>
              </a>
            </button>
          </div>
          <div className="ds__section__two__div2">
            <img src={Hero} alt="" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Ds;
