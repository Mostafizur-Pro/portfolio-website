"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import Skill from "@/components/main/skill";

export default function FrontendInfo() {
  return (
    <Skill>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="grow m-2  rounded-xl flex flex-col bg-slate-500 bg-opacity-5"
      >
        <Image
          src="/images/projects/corner1.png"
          width={100}
          height={100}
          alt="spin"
        />
        <div className="px-8 grow">
          <div className="text-white font-bold text-3xl ml-6 mt-2">
            Frontend Info
          </div>

          <div className="ml-6 mt-8 text-white">
            {/* <div className='text-white text-base flex gap-2'>
            <div className='font-bold text-red-500'> Objectve - </div>
            <div className='font-semibold'> hbjhbj jhjhbjbjbh hjbhjbhjbh</div>
          </div>
          <div className='text-white text-base flex gap-2'>
            <div className='font-bold'> Tools uesed - </div>
            <div className='font-semibold'> hbjhbj jhjhbjbjbh hjbhjbhjbh</div>
          </div>
          <div className='text-white text-base flex gap-2'>
            <div className='font-bold'> Source code - </div>
            <div className='font-semibold'> hbjhbj jhjhbjbjbh hjbhjbhjbh</div>
          </div> */}

            <table>
              <tbody>
                <tr>
                  {/* <td className='font-bold text-white text-base '>Skills</td>
          <td className='px-2 '>-</td> */}
                  <td className="font-semibold text-white  text-base pl-4">
                    <ul className="list-disc">
                      <li>Front End Web Development</li>
                      <li>Proficient in JavaScript</li>
                      <li>Familiar with HTML, CSS, and PHP</li>
                      <li>Experienced with Next.js and React.js</li>
                      <li>Standard knowledge of Laravel</li>
                      <li>Knowledgeable in Tailwind CSS and Bootstrap</li>
                      <li>
                        Skilled in creating responsive and interactive web
                        applications
                      </li>
                      <li>Experience with version control systems like Git</li>
                      <li>
                        Understanding of web performance optimization techniques
                      </li>
                      <li>Basic understanding of SEO principles</li>
                      <li>Familiar with RESTful APIs </li>
                      <li>
                        Experience with state management libraries such as Redux
                      </li>

                      <li>Basic familiarity with TypeScript</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
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
    </Skill>
  );
}
