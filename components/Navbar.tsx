"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "@/components/ThemeSwitch";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Competitions", href: "/competitions" },
  { title: "Matches", href: "/matches" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="p-3 text-base sm:text-lg md:text-xl shadow-md dark:shadow-none border-b">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {menuItems.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className={cn({
                "text-yellow-500": pathname == href,
              })}
            >
              {title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
