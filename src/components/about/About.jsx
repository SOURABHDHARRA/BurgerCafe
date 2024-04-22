import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import rampal from "../../assets/sourabh.jpg"
import sahil from "../../assets/sahil.jpg"

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>BURGER CAFE</h4>
          <p>
            We are BURGER CAFE. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={sahil} alt="Founder" />
              <img src={rampal} alt="Founder" />
              <h3>Sahil and Sourabh </h3>
            </div>

            <p>
              we are Sahil and Sourabh , the founder of BURGER CAFE. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
