import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <div>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 500,
                top: -200,
                bottom: 250,
              }}
            >
              Gaetan HONTHAAS
            </motion.h1>
            <motion.h2
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 700,
                top: -200,
                bottom: 250,
              }}
            >
              <h2>Developpeur web</h2>
            </motion.h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </motion.div>
    </div>
  );
};

export default Home;
