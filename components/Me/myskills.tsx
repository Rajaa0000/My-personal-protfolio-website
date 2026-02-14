"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

export default function Myskills() {
  const [type, setType] = useState(0);
  const [active, setActive] = useState([1, 0, 0, 0]);
  
  const skillIcons = [
    ["devicon-javascript-plain", "devicon-typescript-plain", "devicon-python-plain", "devicon-cplusplus-plain"],
    ["devicon-react-original", "devicon-nextjs-plain colored", "devicon-tailwindcss-original"],
    ["devicon-django-plain-wordmark", "devicon-djangorest-plain"],
    ["devicon-git-plain", "devicon-docker-plain", "devicon-postgresql-plain", "devicon-vercel-original"]
  ];

  const skills = [
    {
      name: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "C++"],
      levels: ["Expert", "Proficient", "Expert", "Strong"],
      colors: ["text-yellow-500", "text-red-900", "text-blue-900", "text-black"]
    },
    {
      name: "Frontend",
      items: ["React", "Next.js", "TailwindCSS"],
      levels: ["Expert", "Proficient", "Expert"],
      colors: ["text-cyan-500", "text-gray-900", "text-teal-500"]
    },
    {
      name: "Backend",
      items: ["Django", "Django REST Framework"],
      levels: ["Expert", "Proficient"],
      colors: ["text-green-500", "text-emerald-400"]
    },
    {
      name: "Tools",
      items: ["Git", "Docker", "PostgreSQL", "Vercel / render"],
      levels: ["Proficient", "Beginner", "Intermediate", "Proficient"],
      colors: ["text-orange-500", "text-blue-400", "text-sky-400", "text-black"]
    }
  ];

  const typedivs = skills.map((item, index) => {
    return (
      <button key={index} onClick={() => {
        const array = [0, 0, 0, 0]; array[index] = 1; setActive(array), setType(index)
      }}
        className={`relative px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${active[index] == 0 ? "text-[#C9A88A] bg-[#4A3728]/50 hover:bg-[#4A3728] hover:text-[#F5E6D3]" : "text-[#2C1810] bg-[#f5e6d3]"}`}
      >
        {item.name}
      </button>
    )
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.1 } 
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const typeThings = skills[type].items.map((item, index) => {
    return (
      <motion.div 
        layout
        variants={itemVariants}
        key={item} 
        className="bg-white flex-1 rounded flex flex-col items-center gap-[0.5rem] hover:scale-105 duration-300 justify-center p-6 rounded-xl shadow-md border border-[#E8D5C4] hover:border-[#C17B5C] cursor-default "
      >
        <div className="bg-[#F5E6D3] rounded-full w-[4rem] h-[4rem] flex justify-center items-center">
          <i className={skillIcons[type][index] + " text-[1.9rem] " + skills[type].colors[index]}> </i>
        </div>
        <p className="text-black font-semibold">{item}</p>
        <p className="font-[400] rounded-[14px] bg-[#f5ddbe] px-[0.7rem]">{skills[type].levels[index]}</p>
      </motion.div>
    )
  })

  return (
    <section className="bg-[#2C1810] py-[3rem] flex flex-col gap-[2rem] overflow-hidden">
      {/* Animated Title and Subtitle */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-[2rem] items-center mb-[1rem]"
      >
        <h2 className="text-3xl font-bold text-[#f5e6d3] mt-[3rem]">My skills</h2>
        <p className="text-[#f5e6d3] text-center px-4">A comprehensive overview of my technical abilities and the tools I use to bring ideas to life.</p>
      </motion.div>
      
      <div className="justify-center grid grid-cols-2 sm:flex sm:flex-row gap-[1rem] mx-[1rem] lg:mx-[5%]">
        {typedivs}
      </div>

      <div className="min-h-[250px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={type} 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row gap-[1rem] px-[1rem] lg:px-[5%]"
          >
            {typeThings}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}