import Banner from "@/lib/components/banner";
import ProjectSection from "@/lib/components/project-section";
import SocialSection from "@/lib/components/social-section";
import Footer from "@/lib/components/footer";
import store from "@/store";
export default function Home() {
  const { projects, socialLinks } = store;
  return (
    <main className="">
      <Banner />
      <ProjectSection projects={projects} />
      <SocialSection socialLinks={socialLinks} />
      <Footer />
    </main>
  );
}
