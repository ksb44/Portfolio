import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certification = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 justify-center"
    >
      <div className="flex">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 text-left"></div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Ethical Hacking,Penetration Testing and Bug Bounty Hunting (Udemy, Unschool)"
            result="Completed"
            des="For ethical hacking we use a system with fully fledged tools of exploits like kali linux,parrot os."
          />
          <ResumeCard
            title="Web Development (Internshala)"
            result="Completed"
            des="PHP, SQL, HTML, CSS, BOOTSTRAP use these technologies for making a e-commerce website."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certification;
