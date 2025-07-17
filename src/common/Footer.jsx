import Link from "next/link";
import React from "react";
import Logo from "../assets/logo.avif"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo and Description */}
        <div>
          <div className="flex justify-center md:justify-start">
            <Image
            width={100}
            height={100}
              className="h-16 w-auto rounded-full"
              src={Logo}
              alt="Logo"
            />

          </div>
          <p className="mt-4 text-sm text-gray-400 text-center md:text-left">
            Trusted in more than 100 countries & 5 million customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                Episode
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                E-Guide
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Listen Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Listen</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                Spotify
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                Apple Podcasts
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                Google Podcasts
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                YouTube
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 p-2 border-t border-gray-700 text-center text-sm text-gray-700">
        © <Link href="https://pagedone.io" className="hover:underline">pagedone</Link> 2024, All rights reserved.
      </div>
    </footer>
  );
}
