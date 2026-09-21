import Image from 'next/image';
import React from 'react';
import logo from '@/assests/book.ico';
import Link from 'next/link';

const Navbar = () => {
    return (
<div className="navbar mx-auto max-w-7xl bg-base-100 px-4 shadow-sm md:px-6">
  {/* Logo */}
  <div className="navbar-start">
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      {/* Mobile Menu */}
      <ul
        tabIndex={-1}
        className="menu dropdown-content z-10 mt-3 w-52 rounded-2xl bg-base-100 p-3 shadow-lg"
      >
        <li>
          <a>Home</a>
        </li>
        <li>
          <Link href="/books">Books</Link>
        </li>
        <li>
          <Link href="/listed-books">Listed Books</Link>
        </li>
        <li>
          <Link href="/Read-books">Read Books</Link>
        </li>
      </ul>
    </div>

    <div className="flex items-center gap-2">
      <Image
        src={logo}
        alt="Book Vive Logo"
        width={40}
        height={40}
        className="rounded-lg"
      />

      <span className="text-xl font-bold tracking-tight text-slate-800">
        Book<span className="text-green-600">Vive</span>
      </span>
    </div>
  </div>

  {/* Desktop Menu */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-2">
      <li>
        <Link href="/books">Books</Link>
      </li>

      <li>
        <Link href="/listed-books">Listed Books</Link>
      </li>

      <li>
         <Link href="/Read-books">Read Books</Link>
      </li>

      <li>
        <a className="font-medium">About</a>
      </li>
    </ul>
  </div>

  {/* Authentication Buttons */}
  <div className="navbar-end gap-2">
    <button className="btn btn-ghost hidden sm:flex">
      Sign In
    </button>

    <button className="btn btn-success rounded-lg px-5 text-white">
      Sign Up
    </button>
  </div>
</div>
    );
};

export default Navbar;