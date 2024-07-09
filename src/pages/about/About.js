import "./About.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../assets/chad-kirchoff-xe-e69j6-Ds-unsplash.jpg";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <section className="about__section__one">
          <img src={Hero} className="" />
          <div className="overlay" />
          <div className="about__section__hero">
            <h1>About US</h1>
          </div>
        </section>
        <section className="about__section__two">
          <div className="about__section__two__div__one">
            <p>
              At Evajay Farms Limited, we are a forward-thinking and innovative
              agricultural company, dedicated to transforming the agricultural
              landscape in Delta State, Nigeria. With over 45+ hectares of
              fertile farmland, we take pride in producing high-quality and
              sustainable farm products, including yam, cassava, sweet potato,
              corn, and plantain.
            </p>
          </div>
          <div className="about__section__two__div__two">
            <p>
              At Evajay Farms Limited, we are a forward-thinking and innovative
              agricultural company, dedicated to transforming the agricultural
              landscape in Delta State, Nigeria.
            </p>
          </div>
        </section>
        <section className="about__section__four">
          <img src={Hero} className="" />
          <div className="overlay" />
          <div className="about__section__hero">
            <h1>Partnership and collaboration</h1>
            <p>
              {" "}
              At Evajay Farms Limited, we are a forward-thinking and innovative
              agricultural company, dedicated to transforming the agricultural
              landscape in Delta State, Nigeria. With over 45+ hectares of
              fertile farmland, we take pride in producing high-quality and
              sustainable farm products, including yam, cassava, sweet potato,
              corn, and plantain.
            </p>
          </div>
        </section>
        <section className="about__section__three">
          <div className="about__section__three__div__one">
            <p>Our Vision and Mission</p>
            <h1>Nurturing the future</h1>
          </div>
          <div className="about__section__three__div__two">
            <div className="about__vision__card">
              <h1>Vision</h1>
              <p>
                {" "}
                At Evajay Farms Limited, we are a forward-thinking and
                innovative agricultural company, dedicated to transforming the
                agricultural landscape in Delta State, Nigeria. With over 45+
                hectares of fertile farmland, we take pride in producing
                high-quality and sustainable farm products, including yam,
                cassava, sweet potato, corn, and plantain.
              </p>
            </div>
            <div className="about__vision__card">
              <h1>Mission</h1>

              <p>
                {" "}
                At Evajay Farms Limited, we are a forward-thinking and
                innovative agricultural company, dedicated to transforming the
                agricultural landscape in Delta State, Nigeria. With over 45+
                hectares of fertile farmland, we take pride in producing
                high-quality and sustainable farm products, including yam,
                cassava, sweet potato, corn, and plantain.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
