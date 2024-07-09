import Hero from "../../assets/img7.jpg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./About.css";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <section className="about__section__one">
          <img src={Hero} className="" />
          <div className="overlay" />
          <div className="about__section__hero">
            <h1>About us</h1>
          </div>
        </section>
        <section className="about__section__two">
          <div className="about__section__two__div__one">
            <p>
              Welcome to CHIBUFAVOR Auto Mechaboile, an automobile and machine
              repair registered company in Nigeria. Chibufavor AutoMobiles is a
              technology based automobile repair shop that is well equipped with
              the state-of-the-art facilities to handle all repair, maintenance
              and servicing needs.
            </p>
            <p>
              Our team is composed of certified and qualified mechanics,
              diagnosticians, body and electronic specialists that are committed
              to delivering quality service to our highly esteemed customers. We
              pride ourselves over our undeniable ability to solve all
              maintenance and repair problems of modern vehicles in Nigeria. We
              are committed to rebuilding the trust that is typically lost
              between skilled auto repair personnels and vehicle users. This is
              why we do not renege on our commitment to deliver excellent auto
              repair services.
            </p>
          </div>
          <div className="about__section__two__div__two">
            <p>
              Our team is composed of certified and qualified mechanics,
              diagnosticians, body and electronic specialists that are committed
              to delivering quality service to our highly esteemed customers. We
              pride ourselves over our undeniable ability to solve all
              maintenance and repair problems of modern vehicles in Nigeria.
            </p>
          </div>
        </section>
        <section className="about__section__four">
          <h1>
            “THE TEAM IS VERY RESPONSIVE. THEY ASSISTED WITH THE REFURBISHMENT
            OF MY CAR. AND IT CAME OUT GREAT. I RECOMMEND FOR AUTO REPAIR AND
            MECHANICAL SERVICES”
          </h1>
          <p>- Samuel (Customer)</p>
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
                At Chibufacor Automobile, our mission is to deliver top-quality
                automotive repair and maintenance services with integrity,
                reliability, and excellence. We are committed to ensuring the
                safety and satisfaction of our customers in Umuahia and beyond
                by providing expert solutions and exceptional customer service.
              </p>
            </div>
            <div className="about__vision__card">
              <h1>Mission</h1>

              <p>
                Our vision is to become the leading automotive service provider
                in Abia State, known for our innovative approach, technical
                expertise, and dedication to community development. We aim to
                set the standard for excellence in the automotive industry,
                fostering long-term relationships with our clients through trust
                and superior service.
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
