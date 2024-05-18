"use client";

import Redux from "@/components/main/Redux";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Project01() {
  return (
    <Redux>
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
        <div className="sm:px-8 px-4 grow">
          <div className="text-white font-bold text-3xl ml-6 mt-2">
            Resume Builder Web Application
          </div>

          <div className="text-white ml-6 mt-8 text-base ">
            <div className="flex gap-2">
              <div className="font-semibold">Title</div>
              <div className="font-semibold ml-4">-</div>
              <div className="font-semibold">Unique Resume </div>
            </div>
            <div className="flex gap-2">
              <div className="font-semibold">Type</div>
              <div className="font-semibold ml-3">-</div>
              <div>Web Application</div>
            </div>
            <div className="flex gap-2">
              <div className="font-semibold">Status</div>
              <div className="font-semibold">-</div>
              <div>Completed</div>
            </div>
            <div className="my-4">
              <div className="text-red-600 font-bold">Description</div>
              <div className="font-semibold sm:text-base text-sm">
                Unique Resume is an intuitive online platform that allows users
                to effortlessly create professional resumes tailored to their
                specific needs. With an easy-to-use interface and customizable
                templates, users can input their personal information, education
                background, work experience, skills, and achievements to
                generate a polished resume in minutes.
              </div>
            </div>
            <div className="text-red-600 font-bold">Images</div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/redux/project01/image01.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/redux/project01/image02.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/redux/project01/image03.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/redux/project01/image04.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/redux/project01/image05.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <table>
              <tbody>
                <tr>
                  <td className="font-semibold text-base pb-24">Features</td>
                  <td className="px-2 pb-24">-</td>
                  <td className="font-semibold text-white  sm:text-base text-sm pl-6 pt-6 break-words">
                    <ul className="list-disc">
                      <li>User Friendly Interface</li>
                      <li>Customizable Templates</li>
                      <li>Personalized Sections</li>
                      <li>Live Preview</li>
                      <li>Share and Print</li>
                      <li>Responsive Design</li>
                      <li>Privacy and Security</li>
                      <li>Admin panel to manage president information</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-white  text-base py-10">
                    Front End Tools
                  </td>
                  <td className="px-2 pb-6">-</td>
                  <td className="font-semibold text-white  sm:text-base text-sm pl-6 pt-0">
                    <ul className="list-disc">
                      <li>Redux</li>
                      <li>Tailwind CSS</li>
                      <li>Vercel</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-white  text-base py-10">
                    Back End Tools
                  </td>
                  <td className="px-2 pb-6">-</td>
                  <td className="font-semibold text-white  sm:text-base text-sm pl-6 pt-0">
                    <ul className="list-disc">
                      <li>NodeJs</li>
                      <li>Mongoose</li>
                      <li>Express Js</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-white  text-base ">
                    Source code
                  </td>
                  <td className="px-2 pt-4">-</td>
                  <td className="font-semibold text-red-600  sm:text-base text-sm pl-6  break-all">
                    <ul className="list-disc">
                      <li>
                        {" "}
                        <Link href={"https://unique-resume.vercel.app/"}>
                          Live Link
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "https://github.com/Mostafizur-Pro/unique_resume_client"
                          }
                        >
                          Client Side
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={
                            "https://github.com/Mostafizur-Pro/unique_resume_server"
                          }
                        >
                          Server Side
                        </Link>
                      </li>
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
    </Redux>
  );
}
