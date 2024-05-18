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
