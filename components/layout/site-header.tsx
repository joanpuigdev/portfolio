import Link from "next/link";
import "./site-header.css";

const navigation = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre mí", href: "#sobre-mi" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-header__brand" href="/" aria-label="Tu Nombre, inicio">
          <span className="site-header__mark"><i>T</i><i>N</i></span>
          Tu Nombre
        </Link>
        <nav aria-label="Navegación principal">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="button button-primary" href="#contacto">Contactar</Link>
      </div>
    </header>
  );
}
