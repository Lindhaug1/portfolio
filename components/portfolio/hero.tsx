import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pb-24 pt-32 md:px-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.1),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          Product & UX Designer
        </p>

        <h1 className="max-w-4xl text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
          Designing experiences that feel{" "}
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            effortless
          </span>
          .
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-relaxed tracking-tight text-zinc-400 md:text-xl md:leading-relaxed">
          I craft thoughtful digital products — from research and strategy to
          polished interfaces that people love to use.
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View selected work
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center rounded-full border border-white/10 px-7 text-sm text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
          >
            About me
          </a>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 transition-colors hover:text-zinc-400"
      >
        <ArrowDown className="size-5 animate-bounce" weight="light" />
      </a>
    </section>
  );
}
