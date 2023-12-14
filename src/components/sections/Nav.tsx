import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <header className="flex flex-col lg:flex-row items-center justify-between py-5 px-2 lg:px-6 bg-slate-300 text-white">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logopic.jpg"
              width={40}
              height={40}
              alt="logo"
              className="cursor-pointer rounded-full"
            />
          </Link>
          <Link
            href="/"
            className="ml-3 text-lg font-bold shadow-blue-500/50 shadow-md text-slate-200 hover:drop-shadow-lg"
          >
            Muhammad Kamran
          </Link>
        </div>
        <nav className="flex mt-5 lg:mt-0">
          <ul className="flex gap-3 lg:flex-row lg:gap-5 text-center">
            <li>
              <Link
                href="/about"
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="nav-link"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="nav-link"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="nav-link"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/react"
                className="nav-link"
              >
                React
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
