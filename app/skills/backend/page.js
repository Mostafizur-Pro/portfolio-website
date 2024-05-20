"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import Skill from "@/components/main/skill";

export default function BackendInfo() {
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
            Backend Info
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
                      <li>Back End Web Development</li>
                      <li>Proficient in Node.js and Express.js</li>
                      <li>Skilled in TypeScript</li>
                      <li>Experience with JWT Authentication</li>
                      <li>
                        Familiar with MongoDB, Mongoose, Firebase, and MySQL
                      </li>
                      <li>Knowledgeable in Prisma and PostgreSQL</li>
                      <li>
                        Experience with RESTful API design and development
                      </li>
                      <li>Understanding of MVC architecture</li>
                      <li>Skilled in server-side rendering and templating</li>

                      <li>Understanding of web security practices</li>
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
