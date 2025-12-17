"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/sectors", label: "Sectors" },
  { href: "/services", label: "Services" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          HawkVision
        </Link>

        <ul className="hidden lg:flex gap-4 text-base font-medium text-slate-200">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 rounded-full hover:text-white hover:bg-blue-600/30 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg shadow-blue-900/50 hover:scale-[1.02] transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 rounded-full border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-slate-950/95">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-lg font-semibold text-center shadow-lg shadow-blue-900/40"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
