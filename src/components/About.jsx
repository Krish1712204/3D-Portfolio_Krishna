import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, subtitle, icon }) => {
  const isEmoji = typeof icon === "string" && icon.length <= 4;

  return (
    <Tilt className='w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full rgb-hover-card shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='relative z-[1] bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          {isEmoji ? (
            <div className='text-5xl select-none'>{icon}</div>
          ) : (
            <img
              src={icon}
              alt={title}
              className={`${["Agentic AI", "Microsoft Fabric", "Adobe Photoshop"].includes(title) ? "w-20 h-20" : "w-16 h-16"} object-contain`}
            />
          )}

          <div className='flex flex-col items-center gap-2'>
            <h3 className='text-white text-[20px] font-bold text-center leading-[24px]'>
              {title}
            </h3>
            {subtitle && (
              <p className='text-secondary text-[14px] text-center font-medium leading-[18px]'>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a passionate Data Analyst and AI enthusiast specializing in data analytics, business intelligence, and intelligent automation. I work with tools like Power BI, SQL, Python, and Microsoft Fabric to transform raw data into meaningful insights, interactive dashboards, and data-driven solutions. I am also exploring Agentic AI systems to build intelligent applications that automate analysis, generate insights, and support smarter decision-making.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
