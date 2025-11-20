"use client"

import React, { useState, useTransition } from "react";
import { TAB_DATA } from "../data";
import { motion } from "framer-motion"; 

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)"},
};

const About = () => {
    const [tab, setTab] = useState("skills")
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
                    <p className="text-base lg:text-lg text-gray-700">
                        I am a Full Stack Developer with expertise in React.js, 
                        Next.js, Java, Spring Boot. I build responsive, user-friendly
                        applications that blend performance with great design. Passionate
                        about creating seamless digital experiences.
                    </p>
                </motion.div>
                <motion.div className="flex flex-col h-full"
                    initial={{ opacity: 0, scale: 0.5}}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5}}
                >
                <div className="flex flex-row justify-start mt-8">
                    {TAB_DATA.map(({id, title}) => (
                        <button key={id} onClick={() => handleTabChange(id)}>
                            <p className={`mr-3 font-semibold cursor-pointer hover:text-gray-700 ${
                                tab === id ? "text-gray-700" : "text-[#b173af]"
                                }`}>{title}
                            </p>
                            <motion.div 
                                animate={tab === id ? "active" : "default"} 
                                variants={variants}
                                className="h-1 bg-[#b895bc] mt-2 mr-3"
                            />
                        </button>
                    ))}
                </div>
                <div className="mt-8">
                    <ul className="list-disc pl-2">
                        {TAB_DATA.find((t) => t.id === tab)?.content.map(
                            (item, index) => (
                                <li key={index} className="text-gray-700">{item}</li>
                            )
                        )}
                    </ul>
                </div>
            </motion.div>
            </div>
        </section>
    )
}

export default About;