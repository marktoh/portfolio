import HeroSection from "@/lib/components/hero-section";
import ProjectSection from "@/lib/components/project-section";
import SocialSection from "@/lib/components/social-section";
import Footer from "@/lib/components/footer";
import store from "@/store";
export default function Home() {
  const { hero, projects, socialLinks } = store;
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <HeroSection {...hero} />
      <ProjectSection projects={projects} />
      <SocialSection socialLinks={socialLinks} />
      <Footer />
    </main>
  );
}
