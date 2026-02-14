'use client'
import { useEffect, useState } from "react";
import { urlFor } from "@/lib/sanity.client";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loader from "../essentials/Loader";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
// 1. Import the specific block type to replace 'any[]'
import type { PortableTextBlock } from "@portabletext/types";

// 2. Use Type Aliases instead of Interfaces for union types
type SanityImageValue = SanityImageSource & {
  alt?: string;
  caption?: string;
};

type SanityCodeValue = {
  code: string;
  language?: string;
};

interface ProjectData {
  title: string;
  date: string;
  desc: string;
  main_image: SanityImageSource;
  link?: string;
  githublink?: string;
  // 3. NO MORE ANY: Use the formal block type
  content: PortableTextBlock[]; 
}

function Project() {
  const params = useParams();
  const projectname = typeof params?.projectname === 'string' ? params.projectname : '';
  
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    async function helper() {
      if (!projectname) return;
      try {
        const data = await fetch(`/api/${decodeURIComponent(projectname)}`);
        if (!data.ok) throw new Error("Failed to fetch");
        const dataready = await data.json();
        setProject(dataready);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    }
    helper();
  }, [projectname]);

  // 4. Component functions now use inferred types from PortableTextComponents
  const mycomponents: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-[2rem] font-[600] mb-[0.5rem]">{children}</h1>,
      h2: ({ children }) => <h2 className="text-[1.8rem] font-[600] mb-[0.5rem]">{children}</h2>,
      h3: ({ children }) => <h3 className="text-[1.6rem] font-[600] mb-[0.5rem]">{children}</h3>,
      normal: ({ children }) => <p className="text-[1.2rem] font-[400] mb-4">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 pl-4 italic text-gray-600 my-4 border-[#C17B5C]">
          {children}
        </blockquote>
      )
    },

    types: {
      image: ({ value }: { value: SanityImageValue }) => {
        const src = urlFor(value).width(1200).auto('format').url();
        return (
          <figure className="my-6">
            <Image
              src={src}
              alt={value.alt || 'Project screenshot'}
              width={1200}
              height={800}
              className="h-auto rounded-lg object-cover w-full md:w-[80%] py-[1rem]"
            />
            {value.caption && <figcaption className="text-sm text-gray-500 mt-2">{value.caption}</figcaption>}
          </figure>
        );
      },
      code: ({ value }: { value: SanityCodeValue }) => (
        <pre className="bg-gray-900 text-white p-4 rounded-lg my-4 overflow-auto font-mono text-sm">
          <code>{value.code}</code>
        </pre>
      )
    },

    marks: {
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-[#C17B5C]">
          {children}
        </code>
      ),
      link: ({ value, children }) => {
        // Casting the unknown value.href to a string safely
        const href = typeof value?.href === 'string' ? value.href : '#';
        const isExternal = href.startsWith('http');
        return (
          <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="text-[#C17B5C] hover:underline font-medium"
          >
            {children}
          </a>
        );
      }
    },

    list: {
      bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal pl-6 space-y-2 mb-4">{children}</ol>,
    },

    listItem: {
      bullet: ({ children }) => <li className="text-[1.2rem] font-[400]">{children}</li>,
      number: ({ children }) => <li className="text-[1.2rem] font-[400]">{children}</li>
    },
  };

  if (!project) return <Loader />;

  return (
    <main className="pt-[4rem] px-[1rem] max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-[2rem]">
        <div className="flex-1">
          <h1 className="text-[3rem] font-[700] text-[#2C1810] leading-tight">{project.title}</h1>
          <p className="font-[400] my-[0.5rem] text-[1.25rem] text-gray-500">{project.date}</p>
          <p className="text-[1.25rem] font-[400] text-[#C17B5C] mb-6">{project.desc}</p>
          
          <div className="flex flex-wrap gap-[1rem]">
            {project.link && (
              <Link 
                href={project.link} 
                target="_blank" 
                className="rounded-full px-[1.5rem] py-[0.7rem] bg-gradient-to-r from-[#C17B5C] to-[#D4A574] text-white font-bold hover:shadow-xl transition-all"
              >
                Live Demo
              </Link>
            )}
            {project.githublink && (
              <Link 
                href={project.githublink} 
                target="_blank" 
                className="rounded-full px-[1.5rem] py-[0.7rem] bg-[#2C1810] text-white font-bold hover:shadow-xl transition-all"
              >
                GitHub Code
              </Link>
            )}
          </div>
        </div>

        <div className="w-full md:w-[45%]">
          <Image 
            src={urlFor(project.main_image).height(600).width(800).url()} 
            width={800} 
            height={600} 
            alt={project.title} 
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>

      <hr className="my-12 border-gray-200" />

      <div className="max-w-none pb-20">
        <PortableText value={project.content} components={mycomponents} />
      </div>
    </main>
  );
}

export default Project;