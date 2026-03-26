"use client"

import React, { useState, useTransition } from "react";
import { TAB_DATA } from "../data";
import { motion } from "framer-motion"; 

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)"},
};

const About = () => {
    const [tab, setTab] = useState("backend")
    // enables non-blocking state updates with startTransition()
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return (
        <section id="about" className="container mt-10 mx-auto px-12 py-4">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <motion.div 
                    className="mt-4 md:mt-0 text-left flex flex-col h-full"
                    initial={{ opacity: 0, scale: 0.5}}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5}}
                >
                    <h2 className="text-4xl font-bold text-gray-700 mb-4">About Me</h2>
                    <div className="space-y-4 text-base lg:text-lg text-gray-700 leading-relaxed">
  <p>
    Senior Software Engineer with 7+ years of experience building scalable, high-performance
    systems in production environments.
  </p>

  <p>
I design and develop high-performance backend services using Java and Spring Boot, with deep expertise in microservices, API design, and distributed systems. 
I’ve worked on large-scale platforms handling high-volume data and critical business workflows.
  </p>

  <p>
    I also build modern frontend applications using React and Next.js, enabling complete ownership of product features from backend to UI.
    I focus on solving complex problems, optimizing systems at scale, and delivering engineering solutions that create tangible value.
  </p>
</div>  
                </motion.div>
                <motion.div className="flex flex-col h-full"
                    initial={{ opacity: 0, scale: 0.5}}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5}}
                >
                <div className="flex flex-row justify-start mt-6">
                    {TAB_DATA.map(({ id, title }, index) => (
    <React.Fragment key={id}>
      <button onClick={() => handleTabChange(id)}>
        <p
          className={`font-semibold cursor-pointer hover:text-gray-700 ${
            tab === id ? "text-gray-700" : "text-[#b173af]"
          }`}
        >
          {title}
        </p>

        <motion.div
          animate={tab === id ? "active" : "default"}
          variants={variants}
          className="h-1 bg-[#b895bc] mt-2"
        />
      </button>

      {index !== TAB_DATA.length - 1 && (
        <span className="mx-3 text-gray-400">|</span>
      )}
    </React.Fragment>
  ))}
                </div>
                <ul className="list-disc pl-5 space-y-2 mt-6">
  {TAB_DATA.find((t) => t.id === tab)?.content.map((item, index) => (
    <li key={index} className="text-gray-700">
      {item}
    </li>
  ))}
</ul>
            </motion.div>
            </div>
        </section>
    )
}

export default About;