"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"; // Added for smooth transitions

function Nav() {
    const pathname = usePathname(); 
    const navContent = ['Home', 'My projects', 'Contact'];
    const navLinks = ['', 'MyProjects', 'ContactMe'];
    
    const [menuList, setMenuList] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        function handleResize() {
            const desktop = window.innerWidth > 800;
            setIsDesktop(desktop);
            if (desktop) setMenuList(false);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const links = navContent.map((item, index) => {
        const href = `/${navLinks[index]}`;
        const isActive = pathname === href || (pathname === "/" && href === "/");

        return (
            <Link
                key={index}
                onClick={() => setMenuList(false)}
                className={`text-[1.2rem] transition-colors hover:text-[#c17b5c] 
                ${isActive ? "text-[#c17b5c] underline font-bold" : "text-[#4A3728] font-[500]"}`}
                href={href}
            >
                {item}
            </Link>
        );
    });

    return (
        <nav className="w-full py-[1rem] px-[1.5rem] font-[700] shadow-[0_1px_10px_#a6a1a1] fixed top-0 left-0 bg-[#F5E6D3] z-[9999]">
            <div className="w-full flex justify-between items-center">
                <div className="text-[#2c1810] text-[1.5rem]">#CREATING</div>

                {/* Desktop View */}
                {isDesktop ? (
                    <div className="flex gap-[2rem]">{links}</div>
                ) : (
                    /* Burger Icon - Wrapped in a div to control size */
                    <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">
                        <FontAwesomeIcon
                            icon={faBars}
                            className="text-[#2c1810] text-[1.5rem] cursor-pointer"
                            onClick={() => setMenuList(true)}
                        />
                    </div>
                )}

                {/* Mobile Slide-out Menu handled with AnimatePresence */}
                <AnimatePresence>
                    {menuList && (
                        <div className="fixed inset-0 z-[10000] flex">
                            {/* Dark Overlay Fade */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/30" 
                                onClick={() => setMenuList(false)} 
                            />
                            
                            {/* Sidebar Slide */}
                            <motion.div 
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "tween", duration: 0.3 }}
                                className="relative w-2/3 h-full bg-[#F5E6D3] p-8 shadow-2xl flex flex-col gap-8"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-[#2c1810]">Menu</span>
                                    <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className="text-[#2c1810] text-[1.5rem] cursor-pointer"
                                            onClick={() => setMenuList(false)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">{links}</div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

export default Nav;