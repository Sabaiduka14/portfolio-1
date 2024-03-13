import React from "react";
import Ecommerce from "@/app/assets/Ecommerce1.png";
import Expence from "@/app/assets/Expence1.png";
import Reddit from "@/app/assets/Reddit1.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion as m } from "framer-motion";

export default function Projects() {
  return (
    <main className="w-full h-[1200px] sm:h-[1300px] md:h-[1800px] bg-gray-800 pt-12 px-6 md:px-0 rounded-b-lg">
      <h1 className="text-3xl text-center mb-6 text-white font-bold">
        My Projects
      </h1>
      <div className="flex flex-col items-center gap-6 px-4">
        <m.div>
          <Image
            className="w-full md:max-w-[1000px] rounded-lg"
            src={Ecommerce}
            alt=""
          />
          <Button className="font-semibold w-full md:w-full mt-3 py-6">
            <a href="https://sabashop-app.netlify.app/">View Site</a>
          </Button>
        </m.div>
        <m.div>
          <Image
            className="w-full md:max-w-[1000px] rounded-lg"
            src={Expence}
            alt=""
          />
          <Button className="font-semibold w-full md:w-full mt-3 py-6">
            <a href="https://saba-tracker.netlify.app/">View Site</a>
          </Button>
        </m.div>
        <m.div>
          <Image
            className="w-full md:max-w-[1000px] rounded-lg"
            src={Reddit}
            alt=""
          />
          <Button className="w-full md:w-full font-semibold mt-3 py-6">
            <a href="https://sabashop-app.netlify.app/">View Site</a>
          </Button>
        </m.div>
      </div>
    </main>
  );
}
