'use client'
import { motion, Variants } from 'framer-motion' // 1. Imported Variants
import { faCalculator, faMicrophone, faCode } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hobbies() {
  const desc = [
    "Math is my favorite subject. I like knowing and solving math problems and really using my brain cells. I also enjoy puzzles and anything that challenges the way I think.",
    "I like solving algorithmic and coding problems constantly. I’m passionate about LeetCode. solving its problems raises my dopamine level to its highest value .",
    "Even though I’m not very good at learning spoken languages, I really enjoy learning programming languages. I find it interesting to explore how different languages work. Next, I would like to learn Java and Go.",
    "I like public speaking. I enjoy presenting ideas to people, convincing them about what I believe in, animating events, and making people engaged and happy."
  ]
  const icons = [faCalculator, faCode, faJava, faMicrophone];
  const hobbiesTitles = [
    "Math",
    "Solving Algorithmic & Coding Problems",
    "Learning New Programming Languages",
    "Public Speaking"
  ];

  const iconColors = [
    "text-[#5D4037]", 
    "text-[#7a511e]", 
    "text-[#795548]", 
    "text-[#4E342E]"  
  ];

  // 2. Applied : Variants type here
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 
      }
    }
  };

  // 3. Applied : Variants type here
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const hobbiesDivs = desc.map((item, index) => {
    return (
      <motion.div 
        key={index}
        variants={itemVariants} 
        className='bg-white rounded-2xl p-[2rem] shadow-lg hover:shadow-2xl hover:scale-105 duration-300 text-[#2C1810]
                   flex flex-col items-center justify-start text-center gap-[1.5rem] hover:text-[#c17b5c]'
      >
        <div className='flex justify-center items-center bg-[#F5E6D3] w-[4.5rem] h-[4.5rem] rounded-full shrink-0'>
          <FontAwesomeIcon 
            icon={icons[index]} 
            className={`text-[2rem] ${iconColors[index]}`} 
          />
        </div>

        <div className='flex flex-col gap-[0.5rem]'>
          <h3 className='font-bold text-lg'>{hobbiesTitles[index]}</h3>
          <p className='font-[400] text-gray-700 leading-relaxed'>{item}</p>
        </div>
      </motion.div>
    );
  });

  return (
    <section className="lg:mx-[5%] sm:mx-[2%] mx-[1rem] my-[4rem]">
      <h2 className="text-3xl font-bold text-[#2C1810] mb-[2.5rem]">Hobbies &amp; Interests</h2>
      
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {hobbiesDivs}
      </motion.div>
    </section>
  );
}

export default Hobbies;