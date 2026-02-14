"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { 
  faDownload, faCode, faDatabase, faDesktop, faMicrochip, faCloud
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // 1. Imported Variants

function WhoIam() {
  const links = ["https://github.com/Rajaa0000", "https://www.linkedin.com/in/chahinez-habouchi-b715a0390", "https://smallpdf.com/file#s=cb94e0b6-a71f-4022-89f4-6838a676c8c7"]
  const colors = [
    "bg-gradient-to-r from-[#C17B5C] to-[#D4A574] text-white",
    "bg-gradient-to-r from-[#8B7355] to-[#A0826D] text-white shadow-lg hover:shadow-2xl",
    "bg-gradient-to-r from-[#C9A88A] to-[#E8D5C4] text-[#2C1810] shadow-lg hover:shadow-2xl"
  ]
  const names = ["GitHub", "LinkedIn", "Resume"]

  const floatingIcons = [
    { icon: faCode, top: "5%", left: "5%", delay: 0 },
    { icon: faDatabase, top: "10%", right: "10%", delay: 1 },
    { icon: faDesktop, bottom: "15%", right: "10%", delay: 2 },
    { icon: faMicrochip, top: "70%", left: "2%", delay: 1.5 },
    { icon: faCloud, top: "10%", left: "30%", delay: 0.8 },
  ];

  // 2. Added : Variants type here
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 }
    }
  };

  // 3. Added : Variants type here
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "linear" } }
  };

  const iconsList = [faGithub, faLinkedin, faDownload].map((item, index) => {
    return (
      <Link href={links[index]}
        key={index}
        target="_blank"
        rel="noopener noreferrer"
        className={"rounded-full flex items-center justify-center px-[0.7rem] py-[0.5rem] gap-[0.4rem] transition-transform hover:scale-105 " + colors[index]}>
        <FontAwesomeIcon icon={item} className="text-[1rem]" />
        <p className="font-[400]">{names[index]}</p>
      </Link>)
  })

  return (
    <section className="relative py-[4rem] px-[1rem] flex flex-col gap-[4rem] items-center justify-center lg:flex-row lg:px-[5%]">
      
      <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map((item, idx) => (
            <motion.div
              key={idx}
              className="absolute text-[#C17B5C]/15 text-2xl md:text-5xl -z-10"
              style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 20, -20, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </motion.div>
          ))}
      </div>

      <motion.div 
        className="flex items-center justify-center z-10"
        initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "backOut" }}
      >
        <div className="rounded-full p-[0.4rem] bg-gradient-to-br from-[#C17B5C] to-[#D4A574]">
          <div className="p-[0.4rem] bg-[#F5E6D3] rounded-full">
            <div className="relative rounded-full w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 overflow-hidden border-4 border-[#F5E6D3]">
              <Image
                src="/rajaa.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="flex items-center lg:items-start flex-col justify-center gap-[1rem] lg:w-1/2 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-bold text-[#2C1810] mb-4 text-center lg:text-left">
          Hello, I&apos;m <span className="text-[#C17B5C]">Chahinez Habouchi</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-[#4A3728] leading-[1.5] text-[1.25rem] font-[400] text-center lg:text-left">
          I&apos;m a Full-Stack Web Developer specializing in React and Next.js for the frontend and Python for backend development.
        </motion.p>

        <motion.p variants={itemVariants} className="text-[#4A3728] leading-[1.5] text-[1.25rem] font-[400] text-center lg:text-left">
          I&apos;m also an AI student, passionate about creating modern, efficient, and user-friendly web applications.
        </motion.p>

        <motion.p variants={itemVariants} className="leading-[1.5] text-[#8b7355] text-[1.125rem] font-[400] text-center lg:text-left">
          Feel free to explore my projects, connect with me on LinkedIn, or download my resume to learn more.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-[1rem] justify-center lg:justify-start w-full mt-2">
          {iconsList}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhoIam;