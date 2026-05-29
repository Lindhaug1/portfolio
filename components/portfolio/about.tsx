const skills = [
  "User Research",
  "Interaction Design",
  "Design Systems",
  "Prototyping",
  "Usability Testing",
  "Design Strategy",
];

const stats = [
  { value: "8+", label: "Years designing products" },
  { value: "40+", label: "Projects shipped" },
  { value: "12", label: "Teams collaborated with" },
];

export function About() {
  return (
    <section id="about" className="border-t border-white/[0.06] px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              Clarity through
              <br />
              <span className="text-zinc-500">craft & empathy.</span>
            </h2>
            <p className="mt-10 text-lg leading-relaxed text-zinc-400">
              I&apos;m a UX designer based in Oslo, focused on building products
              that balance beauty with usability. My process starts with
              understanding people — their goals, frustrations, and context —
              then translating insights into interfaces that feel intuitive from
              the first interaction.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Previously at startups and scale-ups, I&apos;ve led design across
              mobile, web, and design system initiatives. I believe great design
              is invisible: it just works.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Expertise
              </p>
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
