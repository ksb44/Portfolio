import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree,projectFour, projectFive } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const link1 = "https://github.com/ksb44/INotebook";
  const link2 = "https://github.com/ksb44/Ecommerce-Next";
  const link3 = "https://github.com/ksb44/forum";
  const link4 = "https://github.com/ksb44/movie-watchlist";
  const link5 = "https://github.com/ksb44/homepage-UI";
  const link6 = "https://github.com/ksb44/netflix-clone";

  const web1="https://i-notebook-u78v.vercel.app/login";
  const web2="https://ecommerce-next-x3mg.onrender.com";
  const web4="https://movie-watchlist-kd.netlify.app";
  const web5="https://fastidious-paletas-aa7140.netlify.app";
  const web6="https://netflix-clone-phi-silk.vercel.app";
  
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
          title="Movie-watchlist Website"
          des="The Movie Watchlist project is a web application that allows users to manage a list of movies they want to watch. Users can add, edit, delete movies, mark them as watched/unwatched, and provide ratings and reviews. The application uses a React frontend, Redux for state management, and MongoDB as the backend database."
          src={projectFour}
          link={link4}
          web={web4}
        />
                <ProjectsCard
          title="Homepage UI"
          des="This project is a company homepage built using Next.js, a React framework for building fast and user-friendly web applications. The project focuses on the frontend part, providing an interactive and visually appealing user interface for visitors."
          src={projectFive}
          link={link5}
          web={web5}
        />
                      <ProjectsCard
          title="NetFlix-Clone"
          des="Develop a comprehensive clone of Netflix using React for the frontend and Firebase for backend services. Additionally, integrate the application with Gemini AI to provide advanced movie suggestions and personalized recommendations for users, enhancing their overall viewing experience."
          src={projectFour}
          link={link6}
          web={web6}
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
