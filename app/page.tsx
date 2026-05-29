import { About } from "@/components/portfolio/about";
import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Nav } from "@/components/portfolio/nav";
import { SelectedWork } from "@/components/portfolio/selected-work";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.12),transparent)]" />
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <About />
      </main>
      <Footer />
    </div>
  );
}
