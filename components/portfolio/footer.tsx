import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-portfolio-text/10 bg-portfolio-white px-6 py-12 md:px-8 md:py-14"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-portfolio-text">
            Linda Haugen
          </p>
          <div className="mt-3 flex flex-col gap-1 text-sm text-portfolio-text/80 sm:flex-row sm:flex-wrap sm:gap-x-5">
            <a
              href="mailto:lindhaug1@gmail.com"
              className="underline-offset-4 hover:underline"
            >
              lindhaug1@gmail.com
            </a>
            <Link
              href="https://www.linkedin.com/in/lindhaug/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <a
          href="mailto:lindhaug1@gmail.com"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-[var(--portfolio-button)] px-6 text-sm font-semibold text-portfolio-white transition-colors hover:bg-portfolio-text"
        >
          Ta kontakt
        </a>
      </div>

      <p className="mx-auto mt-10 max-w-5xl text-xs text-portfolio-text/50">
        © {new Date().getFullYear()} Linda Haugen
      </p>
    </footer>
  );
}
