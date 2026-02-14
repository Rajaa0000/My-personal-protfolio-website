'use client'
import { useRef, FormEvent } from "react"; // Added FormEvent
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function ContactPage() {
  // 1. Specify HTMLFormElement to allow the .reset() method
  const form = useRef<HTMLFormElement>(null); 

  // 2. Use FormEvent for the handler
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    
    // This check satisfies TypeScript's null safety
    if (!form.current) return;

    emailjs.sendForm('service_45dypjf', 'template_pmtmmte', form.current, 'sVcnC6YKdHGEgY_f-')
      .then(() => {
          alert("Message sent successfully to habouchichahinez9@gmail.com!");
          // 3. Optional chaining ensures it only runs if form.current still exists
          form.current?.reset();
      }, (error) => {
          alert("Failed to send: " + error.text);
      });
  };

  return (
    <main className="flex flex-col items-center bg-[#3D2B1F] mb-[5rem] px-[2rem] overflow-hidden" id="#main">   
      
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center mt-10"
      >
        <h2 className="text-5xl font-bold text-[#f5e6d3] mb-[1rem]">Get In Touch</h2>
        <p className="text-xl text-[#C9A88A] max-w-2xl mx-auto">
          Have a project in mind or an offer for me? I&apos;d love to hear from you!
        </p>
      </motion.div>

      <div className="min-h-screen py-16 px-4 md:px-20 flex justify-center items-center w-full">
        
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full"
        >
          
          <div className="lg:col-span-2 bg-[#EAD8C3] p-10 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-[#2C1810] mb-8">Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#2C1810] font-semibold">Name *</label>
                <input type="text" name="user_name" placeholder="Your name" required
                  className="w-full px-2 py-1 bg-white text-gray-900
                   rounded-lg border-2 transition-all duration-300 focus:outline-none border-[#C9A88A] " />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[#2C1810] font-semibold">Email *</label>
                <input type="email" name="user_email" placeholder="your.email@example.com" required
                  className="w-full px-2 py-1 bg-white text-gray-900
                   rounded-lg border-2 transition-all duration-300 focus:outline-none border-[#C9A88A] " />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#2C1810] font-semibold">Message *</label>
                <textarea name="message" rows={6} placeholder="Tell me about your project..." required
                    className="w-full px-2 py-1 bg-white text-gray-900
                   rounded-lg border-2 transition-all duration-300 focus:outline-none border-[#C9A88A] " />
              </div>

              <button type="submit" 
                className="mt-4 bg-gradient-to-r from-[#C17B5C] to-[#D4A574] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-md">
                <FontAwesomeIcon icon={faPaperPlane} />
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between gap-[1rem]">
            
            <div className="bg-[#EAD8C3] p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold text-[#2C1810] mb-6">Connect With Me</h2>
              <div className="flex flex-col gap-4">
                <Link   
                  target="_blank" 
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/chahinez-habouchi-b715a0390" 
                  className="flex items-center gap-4 bg-[#0077B5] text-white p-3 rounded-lg hover:brightness-110 transition-all"
                >
                  <div className="w-10 h-10 flex items-center justify-center border-r border-white/20 mr-2">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </div>
                  <span className="font-semibold">LinkedIn</span>
                </Link>
                <Link 
                  target="_blank" 
                  rel="noopener noreferrer"
                  href="https://github.com/Rajaa0000" 
                  className="flex items-center gap-4 bg-[#333] text-white p-3 rounded-lg hover:brightness-110 transition-all"
                >
                  <div className="w-10 h-10 flex items-center justify-center border-r border-white/20 mr-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </div>
                  <span className="font-semibold">GitHub</span>
                </Link>
                
                <div className="flex items-center gap-4 bg-[#FF5A5F] text-white p-3 rounded-lg hover:brightness-110 transition-all w-full">
                  <a className="w-10 h-10 flex items-center justify-center border-r border-white/20 mr-2" href="https://mail.google.com/mail/?view=cm&to=habouchichahinez9@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                  <span className="font-semibold">Email</span>
                </div>
              </div>
            </div>

            <div className="bg-[#EAD8C3] p-8 rounded-3xl shadow-xl flex-grow">
              <h2 className="text-2xl font-bold text-[#2C1810] mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C17B5C]/20 p-3 rounded-lg text-[#C17B5C]">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <p className="text-sm text-[#2C1810]/60 font-bold">Email</p>
                    <p className="text-[#2C1810] break-all">habouchichahinez9@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#C17B5C]/20 p-3 rounded-lg text-[#C17B5C]">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <p className="text-sm text-[#2C1810]/60 font-bold">Phone</p>
                    <p className="text-[#2C1810]">+213 798193431</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#C17B5C]/20 p-3 rounded-lg text-[#C17B5C]">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <p className="text-sm text-[#2C1810]/60 font-bold">Location</p>
                    <p className="text-[#2C1810]">Algiers, Algeria</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default ContactPage;