import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 justify-center  "
    >
      <div className="flex">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 "></div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech (IT)"
            subTitle="Ajay Kumar Garg Engineering college (2019 - 2023)"
            result="8.2/10"
            des="I have achieved a commendable CGPA of 8.29 during my Bachelor of Technology (B.Tech) studies."
          />
          <ResumeCard
            title="Intermediate School Education"
            subTitle="S.S.Children Academy (2017 - 2018)"
            result="93.6%"
            des="CBSE"
          />
          <ResumeCard
            title="High School Education"
            subTitle="S.S.Children Academy (2015 - 2016)"
            result="9.4/10"
            des="CBSE"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
