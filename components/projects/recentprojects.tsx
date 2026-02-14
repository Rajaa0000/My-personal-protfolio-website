'use client'
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client"
import { useState, useEffect } from "react";
import Link from "next/link";
// Import the proper type for Sanity images
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// 1. Define the Project interface with proper types
interface Project {
  title: string;
  main_image: SanityImageSource; // Fixed: replaced 'any'
  field: string;
  desc: string;
}

function RecentProjects() {
  // 2. Type the state and initialize with an empty array
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function helper() {
      try {
        const data = await fetch('/api/recentprojects');
        if (!data.ok) throw new Error('Failed to fetch');
        const dataReady = await data.json();
        setProjects(dataReady);
      } catch (error) {
        console.error("Error fetching recent projects:", error);
      } finally {
        setLoading(false);
      }
    }
    helper();
  }, []);

  return (
    <section className="lg:px-[4rem] mb-[3rem] lg:mx-[5%] sm:mx-[2%] mx-[1rem]">
      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-bold text-[#2C1810] mb-[2.5rem]">
          See some of my projects
        </h2>
      </div>
      
      <div className="flex flex-col gap-[2rem] md:flex-row flex-wrap">
        {loading ? (
          <p className="text-[#8B7355]">Loading projects...</p>
        ) : (
          projects.map((item, index) => (
            <div 
              key={index}
              className="rounded-2xl p-[2rem] shadow-lg hover:shadow-2xl bg-white px-[1rem] py-[1rem] sm:w-[500px] transition-all duration-300"
            >
              {/* Added a check to ensure main_image exists before calling urlFor */}
              {item.main_image && (
                <Image 
                  src={urlFor(item.main_image).width(600).height(400).url()} 
                  width={500} 
                  height={400} 
                  alt={item.title || "project image"} 
                  className="w-full h-auto object-cover rounded-[12px]" 
                />
              )}
              
              <div className="flex justify-between my-[1rem]">
                <div className="text-[1.4rem] font-[500] leading-none">
                  {item.title}
                </div>
                <div className="text-[1.1rem] font-[600] leading-none my-[0.6rem] text-[#c17b5c] uppercase">
                  {item.field}
                </div>
              </div>
              <div className="text-[1rem] font-[400] leading-relaxed text-gray-700"> 
                {item.desc}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-start pt-[2rem]">
        <Link 
          href="/MyProjects" 
          className="rounded-full flex items-center justify-center px-[1rem] py-[0.7rem] gap-[0.4rem] bg-gradient-to-r from-[#C17B5C] to-[#D4A574] text-white shadow-lg font-[500] hover:shadow-2xl duration-300"
        >
          see more
        </Link>
      </div>
    </section>
  );
}

export default RecentProjects;