import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Nav } from "@/components/portfolio/nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-portfolio-white text-portfolio-text selection:bg-portfolio-primary/40">
      <Nav />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
