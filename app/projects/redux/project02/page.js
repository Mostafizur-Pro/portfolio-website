"use client";

import Redux from "@/components/main/Redux";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Project02() {
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
          <nav className="flex mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Projects
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Redux
                  </span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Project 02
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="text-white font-bold text-3xl ml-6 mt-2">
            Online Book Library
          </div>

          <div className="text-white ml-6 mt-8 text-base ">
            <div className="flex gap-2">
              <div className="font-semibold">Title</div>
              <div className="font-semibold ml-4">-</div>
              <div className="font-semibold">
                Gain Your Knowledge with Books!
              </div>
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
                BookMax is your ultimate destination for gaining knowledge
                through books. Whether you are an avid reader or just starting
                your reading journey, BookMax provides an extensive online book
                library and reader platform to explore a wide range of genres,
                topics, and authors. Dive into captivating stories, insightful
                non-fiction, and educational materials all in one place.
              </div>
            </div>
            <div className="text-red-600 font-bold">Images</div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/redux/project02/image01.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/redux/project02/image02.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/redux/project02/image03.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            {/* <div className="sm:ml-6 mt-4">
              <Image
                src="/images/projects/laundry_04.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div> */}
            {/* <div className="sm:ml-6 mt-4">
              <Image
                src="/images/projects/laundry_05.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div> */}
            <table>
              <tbody>
                <tr>
                  <td className="font-semibold text-base sm:pb-24 pb-20">
                    Features
                  </td>
                  <td className="px-2 sm:pb-24 pb-20">-</td>
                  <td className="font-semibold text-white  sm:text-base text-sm pl-6 pt-6">
                    <ul className="list-disc">
                      <li>Vest Book Library</li>
                      <li>Online Book Reader</li>
                      <li>Personalized Recommendations</li>
                      <li>Bookmarking and note=taking</li>
                      <li>Search and Filter</li>
                      <li>User Profiles</li>
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
                      <li>Redux with vite</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
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
                        <Link href={"https://book-max.netlify.app//"}>
                          Live Link
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"https://github.com/Mostafizur-Pro/bookmax"}
                        >
                          Client Side
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={
                            "https://github.com/Mostafizur-Pro/bookmax-server"
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
