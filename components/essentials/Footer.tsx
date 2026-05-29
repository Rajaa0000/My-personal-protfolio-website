"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Footer() {
    const links = [
        "https://github.com/Rajaa0000",
        "https://www.linkedin.com/in/chahinez-habouchi-b715a0390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
       "https://mail.google.com/mail/?view=cm&to=habouchichahinez9@gmail.com"

    ]

    // Staggered variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    const iconsList = [faGithub, faLinkedin, faEnvelope].map((item, index) => {
        // Fix: Removed the / prefix for external links
        const isMail = links[index].includes('mailto');
        return (
            <motion.div variants={itemVariants} key={index}>
                <a 
                    href={links[index]} 
                    target={isMail ? "_self" : "_blank"} 
                    rel="noopener noreferrer"
                    className="rounded-full h-[3rem] bg-[#F5E6D3] w-[3rem] flex items-center justify-center transition-transform hover:scale-110"
                > 
                    <FontAwesomeIcon icon={item} className="text-[1.7rem] text-[#2C1810] "/>
                </a>
            </motion.div>
        )
    })

    return (
        <motion.footer 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-full py-[3rem] bg-gradient-to-br from-[#2C1810] via-[#4A3728] to-[#8B7355] flex flex-col items-center px-[0.5rem]"
        >
            <div className="flex flex-col gap-[2rem] items-center">
                <div className="flex gap-[1rem] ">{iconsList}</div>
                <div className="flex flex-col gap-[0.5rem] items-center text-center">
                    <motion.p variants={itemVariants} className="text-[#E8D5C4] font-[700] text-[1.5rem]">
                        Ready to collaborate 
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-[#c9a88a]">connect</motion.p>
                </div>
            </div>

            <motion.div 
                variants={itemVariants} 
                className="w-full my-[2rem] max-w-md h-px bg-gradient-to-r from-transparent via-[#C9A88A] to-transparent" 
            />

            <div className="flex flex-col items-center gap-[1.5rem]">
                <motion.p variants={itemVariants} className="text-[#E8D5C4] text-center">
                    Made with 
                    <motion.span
                        animate={{ color: ["#C17B5C", "#ef4444", "#8B7355", "#C17B5C"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="mx-2 inline-block"
                    >
                        <FontAwesomeIcon icon={faHeart} className="text-[1rem]"/>
                        
                    </motion.span>
                    By Chahinez Habouchi
                   
                </motion.p>
                
                <motion.p 
                    variants={itemVariants} 
                    className="text-[#D4A574] text-sm italic text-center max-w-lg"
                >
&quot;لا غنى كالعقل، ولا فقر كالجهل، ولا ميراث كالأدب&quot;
                    <br />
                    — علي بن أبي طالب رضي الله عنه
                </motion.p>
            </div>
        </motion.footer>
    )
}

export default Footer;