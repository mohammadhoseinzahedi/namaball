import Link from "next/link";
import Image from "next/image";

const title = "Footy Nama";
const menuItems = [
  { title: "Home", href: "/" },
  { title: "Matches", href: "/matches" },
  { title: "Competitions", href: "/competitions" },
];

const Navbar = () => {
  return (
    <nav className="text-slate-700 bg-slate-100">
      <div className="container mx-auto flex flex-wrap justify-between px-2 md:px-4 py-4">
        <h1 className="text-xl md:text-3xl p-2">{title}</h1>
        <div className="flex flex-wrap items-center border rounded-2xl">
          {menuItems.map(({ title, href }) => (
            <Link
              className="block italic md:text-xl px-3 py-2"
              key={title}
              href={href}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
