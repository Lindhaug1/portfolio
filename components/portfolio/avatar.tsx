"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function Avatar() {
  const [showAlt, setShowAlt] = useState(false);

  return (
    <button
      type="button"
      className="group relative mx-auto block size-52 shrink-0 cursor-pointer md:mx-0 md:size-60 lg:size-64"
      onMouseEnter={() => setShowAlt(true)}
      onMouseLeave={() => setShowAlt(false)}
      onFocus={() => setShowAlt(true)}
      onBlur={() => setShowAlt(false)}
      onClick={() => setShowAlt((prev) => !prev)}
      aria-label="Illustrasjon av Linda Haugen. Trykk eller hold pekeren over for å bytte uttrykk."
    >
      <Image
        src="/avatar.png"
        alt=""
        fill
        className={cn(
          "object-contain object-bottom transition-opacity duration-500 ease-in-out motion-reduce:transition-none",
          showAlt ? "opacity-0" : "opacity-100"
        )}
        sizes="(max-width: 768px) 208px, 256px"
        priority
      />
      <Image
        src="/avatar2.png"
        alt=""
        fill
        className={cn(
          "object-contain object-bottom transition-opacity duration-500 ease-in-out motion-reduce:transition-none",
          showAlt ? "opacity-100" : "opacity-0"
        )}
        sizes="(max-width: 768px) 208px, 256px"
        priority
      />
      <span className="sr-only">Bytter uttrykk ved hover eller trykk</span>
    </button>
  );
}
