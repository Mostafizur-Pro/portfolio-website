import Layout from "@/components/main/layout";
import Sidebar from "@/components/main/sidebar";
import MobileSidebar from "./mob_sidebar";

export default function Skill({ children }) {
  const SkillNav = [
    { name: "My Skills", href: "/skills", current: true, delay: 0.5 },
    { name: "Front End", href: "/skills/frontend", current: true, delay: 0.5 },
    { name: "Back End", href: "/skills/backend", current: true, delay: 0.5 },
  ];
  return (
    <Layout>
      <div className="flex sm:flex-row flex-col sm:w-3/4 w-full sm:pl-10 px-2">
        <MobileSidebar navs={SkillNav} width={350} />
        <Sidebar navs={SkillNav} height={450} />
        {children}
      </div>
    </Layout>
  );
}
