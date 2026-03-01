'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* Main Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">

        {/* Logo + Brand (Now Clickable) */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Magadh Kodex"
            width={80}
            height={60}
            priority
            className="object-contain"
          />
          <div className="leading-tight">
            <div className="font-extrabold text-lg md:text-xl text-slate-900">
              MAGADH <span className="text-yellow-500">KODEX</span>
            </div>
            <div className="text-[11px] md:text-xs text-slate-500">
              Ancient Wisdom, Future Code
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-500 transition">About</Link>
          <Link href="/services" className="hover:text-yellow-500 transition">Services</Link>
          <Link href="/solutions" className="hover:text-yellow-500 transition">Solutions</Link>
          <Link href="/careers" className="hover:text-yellow-500 transition">Careers</Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
        </nav>

        {/* Desktop CTA (Now Clickable) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2.5 rounded-md font-medium transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 text-slate-700 font-medium">

            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/solutions" onClick={() => setOpen(false)}>Solutions</Link>
            <Link href="/careers" onClick={() => setOpen(false)}>Careers</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md text-center"
            >
              Get a Quote
            </Link>

          </nav>
        </div>
      )}

      {/* Accent Line */}
      <div className="h-[3px] bg-yellow-500"></div>

    </header>
  )
}