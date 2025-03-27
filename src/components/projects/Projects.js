import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree,projectFour, projectFive, projectSix ,projectSeven,projectEight, projectNine, projectTen, projectEleven, projectTwelve, projectThirteen, projectFourteen, projectFifteen,projectSixteen} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const link1 = "https://github.com/ksb44/INotebook";
  const link2 = "https://github.com/ksb44/Ecommerce-Next";
  const link3 = "https://github.com/ksb44/forum";
  const link4 = "https://github.com/ksb44/movie-watchlist";
  const link5 = "https://github.com/ksb44/homepage-UI";
  const link6 = "https://github.com/ksb44/netflix-clone";
  const link7 = "https://github.com/ksb44/realtime-coding";
  const link8 = "https://github.com/ksb44/design-frontend";
  const link9 = "https://github.com/ksb44/messaging-app";
  const link10 = "https://github.com/ksb44/dynamic-dashboard-widget-manager" 
  const link11 = "https://github.com/ksb44/grid-view" 
  const link12 = "https://github.com/ksb44/Task-scheduler" 
  const link13 = "https://github.com/ksb44/news-web-frontend" 
  const link14 = "https://github.com/ksb44/task-manager" 
  const link15 = "https://github.com/ksb44/college-mangement-simple" 
  const link16 = "https://github.com/ksb44/Tax-Invoice-"
  
  const web1 ="https://i-notebook-u78v.vercel.app/login";
  const web2 ="https://ecommerce-next-x3mg.onrender.com";
  const web4 ="https://movie-watchlist-kd.netlify.app";
  const web5 ="https://fastidious-paletas-aa7140.netlify.app";
  const web6 ="https://netflix-clone-phi-silk.vercel.app";
  const web7 ="https://room-coding.netlify.app";
  const web8 ="https://edunova-design.netlify.app";
  const web9  ="https://messaging-app-sigma-ebon.vercel.app";
  const web10 ="https://famous-blini-05ae67.netlify.app"
  const web11 ="https://storied-squirrel-573aca.netlify.app"
  const web12 ="https://task-scheduler-pearl-phi.vercel.app"
  const web13 ="https://acowale-project.web.app"
  const web14 ="https://famous-sunflower-7ac9ed.netlify.app"
  const web15 ="https://college-mangement-simple.vercel.app"
  const web16 ="https://stellar-biscotti-9cda02.netlify.app"
  
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
          title="Messaging App"
          des="A modern anonymous messaging app built with Next.js and TypeScript, featuring secure authentication through NextAuth, elegant UI components from Shadcn, and intelligent message suggestions powered by Gemini AI to enhance user interaction."
          src={projectOne}
          link={link9}
          web={web9}
        />
             <ProjectsCard
          title="NetFlix-Clone"
          des="Develop a comprehensive clone of Netflix using React for the frontend and Firebase for backend services. Additionally, integrate the application with Gemini AI to provide advanced movie suggestions and personalized recommendations for users, enhancing their overall viewing experience."
          src={projectTwo}
          link={link6}
          web={web6}
        />
            <ProjectsCard
          title="Realtime-Coding"
          des="In this, I have used the Socket.IO library for communication. One can create a room, share the room ID with others, and they can also join. The code written in the editor is live-transmitted to others in the room."
          src={projectTen}
          link={link7}
          web={web7}
        />
           <ProjectsCard
          title="Event-Scheduler"
          des="This project features an event scheduler with customizable recurrence patterns, allowing events to repeat daily, monthly, or yearly. Users can select start and end dates, and the scheduler will display all relevant event dates within the specified range."
          src={projectFive}
          link={link12}
          web={web12}
        />
           <ProjectsCard
          title="Task-Manager"
          des="This task management application allows users to create, edit, and delete tasks. Users can mark tasks as completed or incomplete, and apply filters based on task status and priority. The app also features pagination to manage and view tasks efficiently."
          src={projectSix}
          link={link14}
          web={web14}
        />
            <ProjectsCard
          title="Dynamic Dashboard"
          des="This is a dynamic dashboard application built with React and Tailwind CSS. The dashboard allows users to manage categories and widgets dynamically, providing an intuitive interface to add, remove, and manage widgets within different categories."
          src={projectThree}
          link={link10}
          web={web10}
        />
            <ProjectsCard
          title="Grid-view"
          des="This project includes a horizontal hamburger menu with single-level sub-menus, and a main content area that shows data in both grid and tile views. Each tile features options for editing, flagging, or deleting, and clicking a tile reveals detailed information in an expanded view or pop-up. The data is dynamically fetched using a public API."
          src={projectFour}
          link={link11}
          web={web11}
        />
         
            <ProjectsCard
          title="News-app"
          des="Build a news app using the gnews.io API to fetch and display articles. Design a responsive, user-friendly interface for mobile, tablet, and desktop views. Deploy the app on Firebase and share your project link and repository along with a brief development overview."
          src={projectSeven}
          link={link13}
          web={web13}
        />
           
              <ProjectsCard
          title="College-Management"
          des="The College Management System, built with Next.js, enables users to select their role (either User or Admin) during signup and login. Admins have access to advanced features, including database interactions and record creation, while regular users have limited access. The system ensures role-based feature availability for effective management and usability."
          src={projectEight}
          link={link15}
          web={web15}
        />

               <ProjectsCard
          title="Tax Invoice"
          des="A React-based Invoice Generator that lets users create, edit, and manage invoices, including logo upload and dynamic line items. Users can calculate totals and download invoices as PDFs."
          src={projectNine}
          link={link16}
          web={web16}
        />
            
      
        <ProjectsCard
          title="INote Website"
          des="Led the development of a note-taking application, empowering users to sign up, log in, and manage their task lists, including the ability to update, delete, and mark tasks as completed.Demonstrated proficiency in full-stack development by integrating frontend and backend components, resulting in a user-friendly and responsive application."
          src={projectEleven}
          link={link1}
          web={web1}
        />
        <ProjectsCard
          title="Ecommerce Website"
          des="Developed an e-commerce platform enabling users to sign up, log in, and browse products, with the ability to add items to their cart. The platform calculates the total cost of all products in the cart.Utilized Tailwind CSS for rapid UI development, ensuring a modern and visually appealing interface."
          src={projectFifteen}
          link={link2}
          web={web2}
        />
                <ProjectsCard
          title="Movie-watchlist Website"
          des="The Movie Watchlist project is a web application that allows users to manage a list of movies they want to watch. Users can add, edit, delete movies, mark them as watched/unwatched, and provide ratings and reviews. The application uses a React frontend, Redux for state management, and MongoDB as the backend database."
          src={projectTwelve}
          link={link4}
          web={web4}
        />
                <ProjectsCard
          title="Homepage UI"
          des="This project is a company homepage built using Next.js, a React framework for building fast and user-friendly web applications. The project focuses on the frontend part, providing an interactive and visually appealing user interface for visitors."
          src={projectThirteen}
          link={link5}
          web={web5}
        />
         
       
                         <ProjectsCard
          title="Edunova-design UI"
          des="This project is a company homepage built using Next.js, a React framework for building fast and user-friendly web applications. The project focuses on the frontend part, providing an interactive and visually appealing user interface for visitors."
          src={projectFourteen}
          link={link8}
          web={web8}
        />
            
       
              {/* <ProjectsCard
          title="Discussion Website"
          des="Headed the establishment of an innovative knowledge-sharing platform, fostering an impressive 25% increase in user engagement. Demonstrated proficiency in utilizing PHP for backend functionalities, optimizing database management efficiency with MySQL,and enhancing user experience with Bootstrap."
          src={projectThree}
          link={link3}
          web={link3}
        /> */}
            
      </div>
    </section>
  );
};

export default Projects;
