'use client'

import { motion, Variants } from 'framer-motion' // Added Variants import


function Education() {

  const times = ["2024,Present", "2024"];
  const content = [
    "Engineering Degree in Artificial Intelligence (2nd Year)",
    "Scientific Baccalaureate"
  ];
  const titles = [
    "National Higher School of Artificial Intelligence (ENSIA) – Algiers, Algeria",
    "Mathematics High School of Kouba – Algiers, Algeria"
  ];
  const courses = [
    "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++ & Python), Web Development ",
    " Mathematics Specialization"
  ]

  // 1. Define Animation Variants with explicit Types
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const educationDivs = content.map((cont, index) => {
    return (
      <motion.div 
        key={index} 
        variants={itemVariants} 
        className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 duration-300
        flex justify-between items-start flex-col md:flex-row'
      >
        <div>
          <h3 className="text-2xl font-bold text-[#2C1810] mb-[0.7rem]">{cont}</h3>
          <p className="text-[1.125rem] text-[#8B7355] ">{titles[index]}</p>
          <p className="text-[1.125rem] text-[#8B7355] ">{courses[index]}</p> 
        </div>
        <div className="text-[#C17B5C] font-medium mt-2 md:mt-0">{times[index]}</div>
      </motion.div>
    )
  })

  return (
    <section className='flex flex-col gap-[2rem] lg:mx-[5%] sm:mx-[2%] mx-[1rem] my-[4rem]'>
      <h2 className="text-3xl font-bold text-[#2C1810]">Education</h2>
      
      <motion.div 
        className='flex flex-col gap-[1.5rem] font-[400]'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {educationDivs}
      </motion.div>
    </section>
  )
}

export default Education;