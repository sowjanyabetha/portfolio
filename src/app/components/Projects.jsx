"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { PROJECTS_DATA } from "../data";
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

const Projects = () => {
    return (
        <section id="projects" className="container mt-10 mx-auto px-12 py-4">
            <h2 className="text-center text-4xl font-bold text-gray-700 mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            
            <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                {PROJECTS_DATA.map((project, index) => (
                    <motion.li 
                        key={index}
                        // variants={cardVariants}
                        initial="initial"
                        // animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}>
                        <div>
                            <div 
                                className="h-52 md:h-72 rounded-t-xl relative group"
                                style={{
                                    backgroundImage: ``,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full
                                bg-opacity-0 hidden group-hover:flex group-hover:opacity-90 group-hover:bg-[#181818] transition-all duration-500">
                                    <Link href={project.gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link">
                                        <CodeBracketIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
                                    </Link>
                                    <Link href={project.previewUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link">
                                        <GlobeAltIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                                <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
                                <p className="text-[#adb7be]">{project.description}</p>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;