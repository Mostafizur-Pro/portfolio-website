"use client";

import Layout from "@/components/main/layout";
import Sidebar from "@/components/main/sidebar";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileSidebar from "./mob_sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function React({ children }) {
  const ProjnavReact = [
    {
      name: "Project-01",
      href: "/projects/react/project01",
      current: true,
      delay: 0.5,
    },
    {
      name: "Project-02",
      href: "/projects/react/project02",
      current: false,
      delay: 0.8,
    },
    {
      name: "Project-03",
      href: "/projects/react/project03",
      current: false,
      delay: 1,
    },
    {
      name: "Project-04",
      href: "/projects/react/project04",
      current: false,
      delay: 1.2,
    },
    {
      name: "Project-05",
      href: "/projects/react/project05",
      current: false,
      delay: 1.4,
    },
    {
      name: "Project-06",
      href: "/projects/react/project06",
      current: false,
      delay: 1.6,
    },
    {
      name: "Project-07",
      href: "/projects/react/project07",
      current: false,
      delay: 1.8,
    },
  ];

  // const pathname = usePathname();
  // console.log('hi', pathname)

  const mob_nav = [
    { name: "1", href: "/projects/react/project01", current: true, delay: 0.5 },
    {
      name: "2",
      href: "/projects/react/project02",
      current: false,
      delay: 0.8,
    },
    { name: "3", href: "/projects/react/project03", current: false, delay: 1 },
    {
      name: "4",
      href: "/projects/react/project04",
      current: false,
      delay: 1.2,
    },
    {
      name: "5",
      href: "/projects/react/project05",
      current: false,
      delay: 1.4,
    },
    {
      name: "6",
      href: "/projects/react/project06",
      current: false,
      delay: 1.6,
    },
    {
      name: "7",
      href: "/projects/react/project07",
      current: false,
      delay: 1.8,
    },
  ];
  const navItems = [
    {
      path: "/projects/react/project01",
      name: "React",
    },
    {
      path: "/projects/redux/project01",
      name: "Redux",
    },
    {
      path: "/projects/nextjs/project01",
      name: "Next.js",
    },
    {
      path: "/projects/laravel/project01",
      name: "Laravel",
    },
  ];

  return (
    <Layout>
      <div className="flex sm:flex-row flex-col sm:w-3/4 w-full sm:pl-10 px-2">
        {/* Render mobile sidebar with navigation items */}
        <MobileSidebar navs={mob_nav} width={310} />

        {/* Render desktop sidebar with project navigation items */}
        <Sidebar navs={ProjnavReact} height={660} />

        {/* Main content area */}
        <div className="my-5">
          {/* Top navigation section */}
          <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md">
            <nav className="flex gap-2 relative justify-start w-full z-[100] rounded-lg">
              {/* Render each main menu item as a link */}
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <p className="px-4 py-2 rounded-md text-sm lg:text-base text-zinc-400 hover:text-zinc-100 transition-colors duration-300 ease-in">
                    {item.name}
                  </p>
                </Link>
              ))}
            </nav>
          </div>

          {/* Render children components (page content) */}
          {children}
        </div>
      </div>
    </Layout>
  );
}
