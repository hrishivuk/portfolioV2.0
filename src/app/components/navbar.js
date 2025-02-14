"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Function to check if the link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="flex justify-between items-center bg-light-blackFill text-lg px-10 py-4 rounded-[36px] max-w-[1200px] my-0 mx-auto">
      {/* Left Side - Brand */}
      <div className="font-bold text-white">
        <Link href="/">hrishi.</Link>
      </div>

      {/* Right Side - Links */}
      <div className="space-x-6">
        <Link
          href="/"
          className={
            isActive("/") ? "text-white" : "text-gray-400 hover:text-white"
          }
        >
          home.
        </Link>
        <Link
          href="/works"
          className={
            isActive("/works") ? "text-white" : "text-gray-400 hover:text-white"
          }
        >
          works.
        </Link>
        <Link
          href="/aboutMe"
          className={
            isActive("/aboutMe")
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }
        >
          about me.
        </Link>
      </div>
    </nav>
  );
}
