"use client"

import Image from "next/image";
import React from "react";
import profile from "../public/hero.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto mt-32 flex flex-col items-center justify-center gap-4">
            <div className="rounded-full bg-[#1f1f1f] w-[100px h-[100px] relative">
                <Image 
                    src={profile}
                    alt="profile image" 
                    className="rounded-full w-48 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
            </div>
            <h1 className="text-gray-800 text-2xl md:text-3xl font-semibold">
                 Sowjanya Betha
            </h1>
            <div className=" text-gray-700 text-2xl sm:text-3xl lg:text-[36px] font-bold">
                <TypeAnimation 
                  sequence={[
                    "Senior Software Engineer",
                    2000,
                    "Java • Spring Boot • React",
                    2000,
                    "Backend & Microservices Developer",
                    2000
                ]}
                // wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </div>
            <p className="text-gray-500 text-sm md:text-base">
Java • Spring Boot • React • Microservices • Cloud
</p>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
Software Engineer with <b>7+ years of experience</b> building scalable backend
systems and modern web applications using <b>Java, Spring Boot, and React</b>.
Experienced in developing microservices, REST APIs, and cloud-ready platforms.
</p>
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <a
          href="#projects"
          className="px-10 py-3 rounded-full border border-gray-500 bg-[#f6f5f6] text-gray-700 hover:text-gray-500 transition"
        >
          View Projects
        </a>
        <a href="/Sowjanya Betha Resume.pdf" download className="px-10 py-3 rounded-full border border-gray-500  text-gray-700 flex items-center gap-2 hover:text-gray-500">
                    My Resume
                </a>
                <a href="#contact" className="px-10 py-3 rounded-full border border-gray-500 bg-[#f6f5f6] text-gray-700 flex items-center gap-2 hover:text-gray-500">
                    Contact Me
                </a>
                
            </div>
            <div className="flex gap-6 mt-4 text-gray-600">
<a href="https://github.com/sowjanyabetha" className="hover:text-gray-900 transition" target="_blank">GitHub</a>
<a href="https://www.linkedin.com/in/sowjanya-betha/" className="hover:text-gray-900 transition" target="_blank">LinkedIn</a>
</div>
        </div>
    );

};

export default Hero;