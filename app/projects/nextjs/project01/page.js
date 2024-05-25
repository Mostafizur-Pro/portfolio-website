"use client";

import Nextjs from "@/components/main/Nextjs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Project01() {
  return (
    <Nextjs>
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
                    NextJs
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
                    Project 01
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="text-white font-bold text-3xl ml-6 mt-2">
          Diginie IT Portfolio
          </div>
          <div className="text-white ml-6 mt-8 text-base ">
            <div className="flex gap-2">
              <div className="font-semibold">Title</div>
              <div className="font-semibold ml-4">-</div>
              <div className="font-semibold">Diginie IT</div>
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
              <div className="font-normal sm:text-base text-sm">
                Diginieit.com is a dynamic web development company specializing
                in creating innovative, high-quality websites and applications
                tailored to meet the unique needs of businesses. Our
                comprehensive suite of services ensures that your digital
                presence is both impactful and efficient. Key offerings include:
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Custom Website Development: Tailor-made websites designed to
                    reflect your brand and engage your audience.
                  </li>
                  <li>
                    E-Commerce Solutions: Robust and scalable e-commerce
                    platforms to enhance your online sales.
                  </li>
                  <li>
                    Content Management Systems (CMS): Easy-to-use CMS for
                    managing your website content seamlessly.
                  </li>
                  <li>
                    Responsive Web Design: Websites optimized for performance
                    across all devices.
                  </li>
                  <li>
                    SEO and Digital Marketing: Strategies to boost your online
                    visibility and drive traffic.
                  </li>
                  <li>
                    Web Application Development: Custom applications to
                    streamline your business processes.
                  </li>
                  <li>
                    Maintenance and Support: Ongoing support to keep your
                    website running smoothly.
                  </li>
                  <li>
                    UI/UX Design: Intuitive and aesthetically pleasing designs
                    that enhance user experience
                  </li>
                  <li>
                    API Integration: Seamless integration of third-party
                    services to enhance functionality
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-red-600 font-bold">Images</div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/nextjs/project01/image01.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/nextjs/project01/image02.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/nextjs/project01/image03.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/nextjs/project01/image04.png"
                width={700}
                height={700}
                className="border-4 border-sky-300 rounded-lg"
                alt="spin"
              />
            </div>
            <div className="sm:ml-6 mt-4">
              <Image
                src="/images/nextjs/project01/image05.png"
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
                      <li>Custom Website Development</li>
                      <li>E-Commerce Solutions</li>
                      <li>Content Management Systems (CMS)</li>
                      <li>Responsive Web Design</li>
                      <li>SEO and Digital Marketing</li>
                      <li>Web Application Development</li>
                      <li>Maintenance and Support</li>
                      <li>UI/UX Design</li>
                      <li>API Integration</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-white  text-base py-16">
                    Tools used
                  </td>
                  <td className="px-2 pb-6">-</td>
                  <td className="font-semibold text-white  sm:text-base text-sm pl-6 pt-0">
                    <ul className="list-disc">
                      <li>NextJS</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
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
                        <Link target="_blank" href={"https://diginieit.com/"}>
                          Live Link
                        </Link>
                      </li>
                      <li>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button
                          className="btn"
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                        >
                          Client Side
                        </button>

                        {/* <Link
                          href={
                            "https://github.com/Mostafizur-Pro/unique_resume_client"
                          }
                        >
                          Client Side
                        </Link> */}
                      </li>
                      <li>
                        {" "}
                        {/* <Link
                          href={
                            "https://github.com/Mostafizur-Pro/unique_resume_server"
                          }
                        >
                          Server Side
                        </Link> */}
                        <button
                          className="btn"
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                        >
                          Server Side
                        </button>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Modal */}
        <dialog id="my_modal_1" className="modal rounded-2xl">
          <div className="modal-box p-4 md:p-5 border-b">
            <h3 className="text-xl font-semibold text-gray-900">Hello!</h3>
            <p className="py-4">
              Thank you for your interest! Unfortunately, this is a live
              project, and we are unable to share private code. We appreciate
              your understanding.
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* If there is a button in the form, it will close the modal */}
                <button className="btn text-white bg-red-600 text-sm p-2 rounded-lg">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>

        <div className="flex flex-row justify-end">
          <Image
            src="/images/projects/corner2.png"
            width={100}
            height={100}
            alt="spin"
          />
        </div>
      </motion.main>
    </Nextjs>
  );
}
