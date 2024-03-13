/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion as m } from "framer-motion";

export default function Hero() {
  return (
    <main className="bg-gray-200 md:mt-12 rounded-t-lg md:w-full h-screen flex flex-col px-4 md:px-6 justify-center">
      <div className="flex flex-col items-center">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <m.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900"
          >
            <span role="img" aria-label="wave">
              👋
            </span>{" "}
            Hi, I'm Saba.
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-sm md:text-base lg:text-lg text-center text-gray-500"
          >
            I'm a software engineer based in Georgia Tbilisi.
          </m.p>
          <m.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-sm md:text-base lg:text-lg text-center text-gray-500"
          >
            I'm currently learning NodeJS, MongoDB, and Next.js.
          </m.p>
        </m.div>
      </div>
      <div className="max-w-full md:max-w-3xl mx-auto">
        <m.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          src="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg"
          alt="Technology"
          className="w-full h-auto md:w-92 mt-6 rounded-lg"
        />
      </div>
    </main>
  );
}
