import Link from "next/link";

const links = [
  { href: "/", label: "Om meg", active: true },
  { href: "#contact", label: "Kontakt", active: false },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-portfolio-text/5 bg-portfolio-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-portfolio-text"
        >
          Linda Haugen
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "rounded-lg bg-portfolio-primary px-3.5 py-1.5 text-sm font-medium text-portfolio-text"
                  : "rounded-lg px-3.5 py-1.5 text-sm font-medium text-portfolio-text/70 transition-colors hover:bg-portfolio-primary-light hover:text-portfolio-text"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
