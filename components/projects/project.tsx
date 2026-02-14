"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

// 1. Define the Project interface based on your Sanity schema
interface ProjectItem {
  title: string;
  slug: { current: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  main_image: any;
  desc: string;
  field: string;
  link?: string;
  githublink?: string;
}

function Projects() {
  // 2. Type the state correctly
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function helper() {
      try {
        const dataNotReady = await fetch(`/api/projects`);
        const dataReady = await dataNotReady.json();
        setProjects(dataReady);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    helper();
  }, []);

  if (loading) return null;

  return (
    <main className="bg-[#3D2B1F] py-[4rem] px-[5%]">
      {projects && projects.length > 0 && (
        <div>
          <div className="flex flex-col items-center gap-[1rem] ">
            <h2 className="text-5xl font-bold text-[#f5e6d3]">My Projects</h2>
            <p className="text-xl text-[#C9A88A] max-w-2xl mx-auto text-center mb-[3rem]">
              A collection of my recent work showcasing creativity, technical skills, 
              passion for web development and AI
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
            {projects.map((item, index) => (
              /* NOTE: We use a <div> for the card instead of a <Link> 
                 because you have buttons (Links) inside the card. 
                 Nested <a> tags are invalid HTML.
              */
              <div 
                key={item.slug?.current || index} 
                className="flex flex-col gap-[1rem] bg-[#f5e6d3] rounded-[12px] overflow-hidden shadow-xl"
              >
                <Link href={`/MyProjects/${item.slug.current}`}>
                  <Image 
                    src={urlFor(item.main_image).width(800).height(600).format('webp').url()} 
                    width={600} 
                    height={450} 
                    alt={item.title} 
                    className="w-full h-[200px] object-cover hover:opacity-90 transition-opacity"
                  />
                </Link>
                
                <div className="px-[1rem] flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h1 className="text-[1.3rem] leading-tight font-bold text-[#2C1810]">{item.title}</h1>
                    <p className="text-[0.7rem] font-bold uppercase bg-[#C17B5C] text-white px-2 py-1 rounded">
                      {item.field}
                    </p>
                  </div>
                  <p className="text-[0.95rem] font-[400] text-[#2C1810] mb-4 line-clamp-3">
                    {item.desc}
                  </p> 

                  <div className="flex flex-wrap gap-[0.5rem] mt-auto pb-[1rem]"> 
                    {/* View Details Link */}
                    <Link 
                      href={`/MyProjects/${item.slug.current}`}
                      className="text-xs uppercase tracking-wider font-bold text-[#C17B5C] hover:underline mb-2 w-full"
                    >
                      View Full Case Study →
                    </Link>

                    {/* Live Demo Link */}
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-center rounded-full flex-1 py-[0.5rem] bg-gradient-to-r from-[#C17B5C] to-[#D4A574] text-white text-xs font-bold hover:shadow-md transition-shadow"
                      >
                        Live Demo
                      </a>
                    )}

                    {/* GitHub Link */}
                    {item.githublink && (
                      <a 
                        href={item.githublink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-center rounded-full flex-1 py-[0.5rem] bg-[#2C1810] text-white text-xs font-bold hover:shadow-md transition-shadow"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;