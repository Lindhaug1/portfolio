const projects = [
  {
    title: "Nova Banking",
    category: "Fintech · Mobile",
    description:
      "Redesigned the onboarding flow, reducing drop-off by 34% through clearer hierarchy and progressive disclosure.",
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
    accent: "bg-indigo-400/60",
    year: "2025",
  },
  {
    title: "Atlas Design System",
    category: "Design System · Web",
    description:
      "Built a scalable component library and documentation site used across 12 product teams.",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    accent: "bg-sky-400/60",
    year: "2024",
  },
  {
    title: "Pulse Health",
    category: "Healthcare · App",
    description:
      "Led end-to-end UX for a patient dashboard focused on clarity, trust, and accessibility.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "bg-emerald-400/60",
    year: "2024",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Selected work
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              Case studies
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-zinc-500">
            A curated selection of product design work spanning fintech,
            healthcare, and design systems.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <div className="grid gap-8 p-8 md:grid-cols-[1fr_1.2fr] md:items-center md:p-12">
                <div className="order-2 md:order-1">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-600">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-white/[0.06]" />
                    <span className="font-mono text-xs text-zinc-600">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">{project.category}</p>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors group-hover:text-white">
                    View case study
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>

                <div
                  className={`relative order-1 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient} md:order-2`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
                  <div className="absolute inset-8 rounded-lg border border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-sm">
                    <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                      <span className={`size-2 rounded-full ${project.accent}`} />
                      <span className="size-2 rounded-full bg-zinc-700" />
                      <span className="size-2 rounded-full bg-zinc-700" />
                    </div>
                    <div className="space-y-3 p-6">
                      <div className="h-2 w-1/3 rounded-full bg-white/10" />
                      <div className="h-2 w-2/3 rounded-full bg-white/[0.06]" />
                      <div className="mt-6 h-24 rounded-lg bg-white/[0.04]" />
                      <div className="flex gap-3">
                        <div className="h-8 flex-1 rounded-md bg-white/[0.06]" />
                        <div className="h-8 w-20 rounded-md bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
