import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const link1 = "https://github.com/ksb44/INotebook";
  const link2 = "https://github.com/ksb44/Ecommerce";
  const link3 = "https://github.com/ksb44/forum";

  const web1="https://i-notebook-u78v.vercel.app/login";
  const web2="https://i-notebook-u78v.vercel.app/login";
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="INote Website"
          des="Led the development of a note-taking application, empowering users to sign up, log in, and manage their task lists, including the ability to update, delete, and mark tasks as completed.Demonstrated proficiency in full-stack development by integrating frontend and backend components, resulting in a user-friendly and responsive application."
          src={projectOne}
          link={link1}
          web={web1}
        />
        <ProjectsCard
          title="Ecommerce Website"
          des="Developed an e-commerce platform enabling users to sign up, log in, and browse products, with the ability to add items to their cart. The platform calculates the total cost of all products in the cart.Utilized Tailwind CSS for rapid UI development, ensuring a modern and visually appealing interface."
          src={projectTwo}
          link={link2}
          web={web2}
        />

        <ProjectsCard
          title="Discussion Website"
          des="Headed the establishment of an innovative knowledge-sharing platform, fostering an impressive 25% increase in user engagement. Demonstrated proficiency in utilizing PHP for backend functionalities, optimizing database management efficiency with MySQL,and enhancing user experience with Bootstrap."
          src={projectThree}
          link={link3}
          web={link3}
        />
      </div>
    </section>
  );
};

export default Projects;
