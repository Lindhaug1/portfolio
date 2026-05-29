import Link from "next/link";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050505]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-70"
        >
          Linda Haugen
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
