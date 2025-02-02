"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Home", href: "/", className: "px-2" },
  { title: "Competitions", href: "/competitions", className: "px-2 border-x" },
  { title: "Matches", href: "/matches", className: "px-2" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-slate-700 p-3 md:text-xl text-white">
      <div className="container mx-auto flex flex-wrap justify-center">
        {menuItems.map(({ title, href, className }) => (
          <Link
            key={title}
            href={href}
            className={`${className} ${pathname == href ? "text-yellow-500" : ""}`}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
