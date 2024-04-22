import React from "react";
import { motion } from "framer-motion";
import sahil from "../../assets/sahil.jpg";
import sourabh from "../../assets/sourabh.jpg"
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <div style={{display: "flex", gap: "20px"}}>
        <img src={sahil} alt="Founder" height={200} width={200} />
        <img src={sourabh} alt="Founder" height={200} width={200} />
        </div>
        <p>
          Hey, Everyone we are Sourabh and Sahil, the founder of Burger cafe.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
