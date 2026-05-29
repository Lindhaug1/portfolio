import { Avatar } from "@/components/portfolio/avatar";

export function Hero() {
  return (
    <section className="border-b border-portfolio-text/5 bg-portfolio-white px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
        <p className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold leading-[1.2] tracking-tight text-portfolio-text">
          Hei, jeg er en samfunnsengasjert{" "}
          <span className="ux-designer-highlight">UX-designer</span> med over ni
          års erfaring.
        </p>

        <Avatar />
      </div>
    </section>
  );
}
