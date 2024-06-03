"use client";
import React from 'react';
import {motion} from "framer-motion";

interface TechIcon {
  name: string;
  icon: string;
}

const TechIcons: React.FC = () => {
  const technologies: TechIcon[] = [
    { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'Tensorflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg' },
    { name: 'PostGreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' },
    { name: 'express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'},
    { name : 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg'},
    { name : 'Prisma', icon : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg'}
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {technologies.map((tech) => (
        <motion.div 
          key={tech.name} 
          className="flex flex-col items-center justify-center h-[55px] w-[55px] sm:h-auto sm:w-auto" // Use lighter gradient background
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          transition={{ type: 'spring', stiffness: 200 }} // Smooth spring transition
        >
          <motion.img 
            src={tech.icon} 
            alt={tech.name} 
            style={{ maxWidth: '50px', maxHeight: '50px' }} // Make icon outline spherical
            initial={{ scale: 0 }} // Initial scale for entrance animation
            animate={{ scale: 1 }} // Scale up on entrance
            transition={{ duration: 0.5, delay: 0.2 }} // Smooth entrance transition
          />  
          <motion.p 
            className="hidden md:block text-sm font-medium mt-1" 
            initial={{ opacity: 0 }} // Initial opacity for entrance animation
            animate={{ opacity: 1 }} // Fade in on entrance
            transition={{ duration: 0.5, delay: 0.3 }} // Smooth entrance transition
          >
            {tech.name}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default TechIcons;