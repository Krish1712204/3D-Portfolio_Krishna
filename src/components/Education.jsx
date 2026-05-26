import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { scoe_logo } from "../assets";

const EducationCard = ({ index, degree, school, date, grade, description, logo }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-6 sm:p-8 rounded-2xl w-full sm:w-[500px] flex flex-col gap-4 shadow-card border border-[#232631] hover:border-[#915EFF] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),_0_0_15px_rgba(145,94,255,0.2)] hover:-translate-y-2 transition-all duration-300'
  >
    <div className='flex flex-row items-center gap-5'>
      {/* Logo Wrapper */}
      <div className='w-24 h-16 sm:w-28 sm:h-18 rounded-xl bg-white flex items-center justify-center p-2 shadow-inner overflow-hidden flex-shrink-0'>
        <img 
          src={logo} 
          alt={school} 
          className='w-full h-full object-contain'
        />
      </div>
      
      {/* Title block */}
      <div className='flex flex-col'>
        <h3 className='text-white text-[20px] sm:text-[22px] font-black leading-[26px]'>{degree}</h3>
        <p className='text-secondary text-[13px] sm:text-[14px] font-bold mt-1 tracking-wider uppercase'>{school}</p>
        <p className='text-secondary text-[12px] sm:text-[13px] font-semibold mt-1'>{date}</p>
      </div>
    </div>

    {grade && (
      <div className='mt-2'>
        <p className='text-white font-bold text-[15px] sm:text-[16px]'>
          Grade: <span className='text-[#915EFF] font-black'>{grade}</span>
        </p>
      </div>
    )}

    <p className='text-secondary text-[14px] sm:text-[15px] leading-[24px] mt-2'>
      {description}
    </p>
  </motion.div>
);

const Education = () => {
  const educationList = [
    {
      degree: "BTECH, CSE",
      school: "SANJIVANI COE, KOPARGAON",
      date: "2022 - 2026",
      grade: "CGPA: 8.9",
      description: "Currently pursuing Bachelor of Technology in Computer Science Engineering. Gaining strong foundation in programming, algorithms, and software development.",
      logo: scoe_logo
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My academic journey</p>
        <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center sm:justify-start'>
        {educationList.map((edu, index) => (
          <EducationCard key={`edu-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
