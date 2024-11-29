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
            title="Software Development Engineer (SDE) - 1"
            subTitle="Amigo Softcom - (Sept 2024 - Present)"
            result="GURGAON"
            des="Spearheaded the development of a fully-functional food delivery platform, including a responsive web application built with Next.js and Express, and a Swift-based iOS app. Integrated AI features for personalized recommendations and real-time delivery tracking, enhancing user satisfaction. Resolved a critical authentication bug, improving system security and reliability. Boosted code quality by 30% through implementing unit tests and increased test coverage by 25% with comprehensive Playwright-based end-to-end tests."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Cavisson Systems  - (Nov 2023 - July 2024)"
            result="NOIDA"
            des="Contributed to React JS and Node JS projects, enhancing user experience and responsiveness of web applications, which led to 20% improvement in load times.Refactored application state management by replacing local state with Redux store in React.js projects, improving scalability and reducing state-related bugs by 30%.Optimized Next.js applications by implementing server-side rendering and code-splitting, resulting in a 25% reduction in page load times and improved overall performance."
          />
          <ResumeCard
            title="Associate Software Engineer"
            subTitle="Cavisson Systems - (Feb 2023 - Oct 2023)"
            result="NOIDA"
            des="Spearheaded the development and maintenance of network communication solutions using socket programming, resulting in a 50% increase in data transfer speed and improving seamless connectivity across multiple platforms.Streamlined and executed a state-of-the-art Reliable UDP (RUDP) protocol for Linux systems, enhancing data transmission optimization in a Unix environment; consequently, slashing packet loss by 50% and attaining a 20% acceleration in delivery times.Facilitated rigorous testing and debugging initiatives in Linux environments, expertly troubleshooting platform-specific issues and guaranteeing seamless compatibility, resulting in a 30% reduction in post-release bug reports and delivering a superior user
experience.."
          />
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Experience;
