import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar flex flex-col bg-base-100 text-xl md:flex-row">
      <div className="btn btn-ghost flex w-fit justify-center text-xl hover:bg-base-300">
        <Link href="/">
          <Image src={logo} width={40} height={40} alt="Logo de Flowmazon" />
        </Link>
        Flowmazon
      </div>
    </nav>
  );
}
