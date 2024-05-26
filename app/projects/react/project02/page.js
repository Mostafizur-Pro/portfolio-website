"use client";

import React from "@/components/main/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Project02() {
  return (
    <React>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="grow m-2  rounded-xl flex flex-col bg-slate-500 bg-opacity-5"
      >
        <Image src="/images/projects/corner1.png" width={100} height={100} alt="spin" />
        <div className="sm:px-8 px-4 grow">
          <div className="text-white font-bold text-3xl ml-6 mt-2">
            Accounting Software
          </div>

         
        </div>

        <div className="flex flex-row justify-end">
          <Image
            src="/images/projects/corner2.png"
            width={100}
            height={100}
            alt="spin"
          />
        </div>
      </motion.main>
    </React>
  );
}
