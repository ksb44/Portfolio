import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4"></div>
        <div className="mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Cavisson Systems  - (2023 - Present)"
            result="NOIDA"
            des="Contributed to projects involving React JS and Node JS, demonstrating proficiency in full-stack development and enhancing user experience with responsive web applications."
          />
          <ResumeCard
            title="Associate Software Engineer"
            subTitle="Cavisson Systems - (2023 - 2023)"
            result="NOIDA"
            des="Spearheaded the development and maintenance of network communication solutions using socket programming, resulting in a 50% increase in data transfer speed and improving seamless connectivity across multiple platforms.Streamlined and executed a state-of-the-art Reliable UDP (RUDP) protocol for Linux systems, enhancing data transmission optimization in a Unix environment; consequently, slashing packet loss by 50% and attaining a 20% acceleration in delivery times."
          />
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Experience;
