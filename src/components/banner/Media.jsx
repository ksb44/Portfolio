import React from 'react'
import { FaGithub,  FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs,SiNodedotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 my-2">
            Find me in
          </h2>
          <div className="flex gap-4 justify-center">
          
            <span className="bannerIcon">
            <a href="https://github.com/ksb44" target="_blank" rel="noopener noreferrer">
            <FaGithub />
      </a>
           
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/kuldeep-singh-bartwal/
" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
      </a>

            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 my-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4  justify-center">
            <span className="bannerIcon">
             
              <a href="https://react.dev/learn " target="_blank" rel="noopener noreferrer">
             <FaReact />
      </a>
            </span>
            <span className="bannerIcon">
             
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
           <SiNextdotjs />
      </a>
            </span>
            <span className="bannerIcon">
              
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
           <SiTailwindcss />
      </a>
            </span>
            <span className="bannerIcon">
           
            <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" target="_blank" rel="noopener noreferrer">
             <SiNodedotjs />
      </a>
            </span>
          </div>
        </div>
      
      </div>
  )
}

export default Media