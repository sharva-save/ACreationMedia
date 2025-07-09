import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[350px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col m-10"
        >
          <img
            src={icon}
            alt="photoshop"
            className="w-28 h-28 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {/* <p className={styles.sectionSubText}>
          <br></br>Introduction
        </p> */}

        <h2 className={styles.sectionHeadText}>
          <p className="text-center sm:text-left align-middle">Overview</p>
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        <p className="mt-6 text-justify tracking-wider p-10 sm:p-4 md:p-6">
          we are a full-service graphic design studio and media agency consultancy dedicated to helping brands tell their stories with impact and clarity. Blending creativity with strategy, we specialize in visual identity, branding, digital content creation, marketing campaigns, and media consulting for businesses ready to elevate their presence.
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard  key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
