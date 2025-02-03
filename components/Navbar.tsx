"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


const menuItems = [
  { title: "Home", href: "/" },
  { title: "Competitions", href: "/competitions", className: "border-x" },
  { title: "Matches", href: "/matches" },
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
            className={clsx("px-2", className, {
              "text-yellow-500" : pathname == href,
            })}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
