import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.06] px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent px-8 py-16 md:px-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(99,102,241,0.15),transparent_70%)] blur-3xl" />

          <div className="relative">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </p>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
              Let&apos;s build something meaningful together.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-zinc-400">
              Open to freelance projects, full-time roles, and design collaborations.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@lindahaugen.com"
                className="inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                hello@lindahaugen.com
              </a>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-white/10 px-7 text-sm text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 text-sm text-zinc-600 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Linda Haugen</p>
          <p className="font-mono text-xs tracking-wider text-zinc-700">
            Crafted with care in Oslo
          </p>
        </div>
      </div>
    </footer>
  );
}
