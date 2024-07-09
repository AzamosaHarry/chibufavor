import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import image1 from "../../assets/kenny-eliason-60krlMMeWxU-unsplash.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <section className="home__section__one">
          <div className="home__section__one__start">
            <h3>WELCOME TO CHIBUFAVOR AUTOMOBILES</h3>
            <h1>
              Maintainance and sales of vehicles and driving school
              certification
            </h1>
            <p>
              Commodo sit incididunt et eu velit quis reprehenderit elit quis
              amet voluptate ad. Culpa reprehenderit cupidatat ipsum ex
              exercitation qui ex.
            </p>
          </div>
          <div className="home__section__one__end"></div>
        </section>
        <section className="home__section__two">
          <img alt="" src={image1} className="home__section__two__img" />
          <div className="home__section__two__text">
            <h3>PREMIUM QUALITY IS ALWAYS ENSURED</h3>
            <h1>
              Here in Chibufavor, we ensure that the best industry standards for
              quality maintenance and repairs is met
            </h1>
          </div>
        </section>
        <section className="home__section__three">
          <div className="home__section__two__text">
            <h3>PREMIUM QUALITY IS ALWAYS ENSURED</h3>
            <h1>
              Here in Chibufavor, we ensure that the best industry standards for
              quality maintenance and repairs is met
            </h1>
          </div>
          <img alt="" src={image1} className="home__section__two__img" />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
