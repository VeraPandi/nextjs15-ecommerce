import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary p-10 text-neutral-50 text-opacity-80">
      <div className="footer m-auto md:justify-between md:px-10 lg:flex lg:w-[1000px] lg:max-w-[90vw]">
        <div>
          <span className="footer-title">Services</span>
          <Link href="/" className="link-hover link">
            Nos produits
          </Link>
          <Link href="/" className="link-hover link">
            Nos services
          </Link>
          <Link href="/" className="link-hover link">
            Notre engagement
          </Link>
        </div>

        <div>
          <span className="footer-title">Entreprise</span>
          <Link href="/" className="link-hover link">
            À propos de nous
          </Link>
          <Link href="/" className="link-hover link">
            Contact
          </Link>
          <Link href="/" className="link-hover link">
            Carrières
          </Link>
        </div>

        <div>
          <span className="footer-title">Mentions légales</span>
          <Link href="/" className="link-hover link">
            Conditions générales de vente
          </Link>
          <Link href="/" className="link-hover link">
            Politique de confidentialité
          </Link>
          <Link href="/" className="link-hover link">
            Politique de cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
