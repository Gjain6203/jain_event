"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // npm i lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-black dark:text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/image/logo.png"
            alt="Jain Events Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-base font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contacts">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Button – visible only on mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 bg-white dark:bg-black px-6 pb-6 text-base font-medium shadow-md">
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contacts" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
