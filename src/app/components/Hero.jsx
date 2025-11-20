"use client"

import Image from "next/image";
import React from "react";
import profile from "../public/hero.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto mt-32 flex flex-col items-center justify-center gap-4">
            <div className="rounded-full bg-[#1f1f1f] w-[200px h-[200px] relative">
                <Image 
                    src={profile}
                    alt="profile image" 
                    className="rounded-full w-48 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
            </div>
            <h3 className="text-gray-700 flex items-end gap-2 text-xl md:text-2xl mb-1">
                Hi I'm Sowjanya Betha
            </h3>
            <div className=" text-gray-700 text-3xl sm:text-6xl lg:text-[46px] font-bold">
                <TypeAnimation 
                  sequence={[
                    "Full Stack Developer",
                    1000,
                ]}
                // wrapper="span"
                // speed={50}
                // repeat={Infinity}
                />
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto">
                Full Stack Developer with 6.5 years of experience in React, Next.js, 
                Java, Spring Boot, building responsive and user-friendly applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact" className="px-10 py-3 rounded-full border border-gray-500 bg-[#f6f5f6] text-gray-700 flex items-center gap-2 hover:text-gray-500">
                    Contact Me
                </a>
                <a href="/resume.pdf" download className="px-10 py-3 rounded-full border border-gray-500  text-gray-700 flex items-center gap-2 hover:text-gray-500">
                    My Resume
                </a>
            </div>
        </div>
    );

};

export default Hero;