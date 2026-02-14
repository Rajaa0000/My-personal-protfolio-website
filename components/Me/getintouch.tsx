'use client'
import {motion} from 'framer-motion'

function GetInTouch(){
    return (
        <div className=" bg-gradient-to-br from-[#C9A88A] via-[#D4A574] to-[#C17B5C] py-[3rem]">
            <div className="px-6 text-center">
                {/* Wrapped content in motion.div for scaling effect */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold text-white mb-6" >
                    Let&apos;s Work Together</h2>
                    <p className="text-xl text-[#F5E6D3] mb-8 max-w-2xl mx-auto" >
                    Have a project or offer for me in your mind? I&apos;d love to hear about it and 
                    discuss how we can collaborate together.</p>
                    <a href="/ContactMe" 
                    className="inline-block px-8 py-4 bg-white text-[#C17B5C] rounded-full font-bold text-lg shadow-xl " 
                    >Get In Touch</a>
                </motion.div>
            </div>
        </div>
    )
}
export default GetInTouch;