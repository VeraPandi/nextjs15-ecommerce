import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import logo from "/public/logo.png";

interface NavbarProps {
  query?: string;
}

export default function Navbar({ query }: NavbarProps) {
  return (
    <nav className="navbar flex flex-col bg-base-100 text-xl sm:flex-row sm:justify-between">
      <div className="btn btn-ghost mb-2 text-xl hover:bg-base-300 sm:mb-0">
        <Link href="/" className="flex items-center">
          <Image src={logo} width={40} height={40} alt="Logo de Flowmazon" />
          Flowmazon
        </Link>
      </div>

      <div className="w-full justify-between px-2 sm:w-fit">
        <Search query={query} />
      </div>
    </nav>
  );
}
