import Link from "next/link";
import "./hero.css";

export function Hero() {
  return (
    <section className="hero section">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">Diseñador · Desarrollador · Creativo</p>
          <h1>Creo productos digitales que se sienten sencillos.</h1>
          <p className="hero__description">Soy Tu Nombre, una persona apasionada por convertir ideas en experiencias digitales claras, útiles y con personalidad.</p>
          <div className="hero__actions">
            <Link className="button button-primary" href="#proyectos">Ver proyectos</Link>
            <Link className="button button-secondary" href="#contacto">Hablemos</Link>
          </div>
        </div>
        <div className="hero__card" aria-label="Panel de trabajo">
          <div className="hero__window-bar"><span></span><span></span><span></span><code>tu-nombre.dev</code></div>
          <div className="hero__code-lines" aria-hidden="true">
            <span><b>01</b><em>const</em> <strong>idea</strong> = <mark>&quot;clara&quot;</mark>;</span>
            <span><b>02</b><em>const</em> <strong>producto</strong> = &#123;</span>
            <span><b>03</b>&nbsp;&nbsp; útil: <mark>true</mark>,</span>
            <span><b>04</b>&nbsp;&nbsp; bonito: <mark>true</mark>,</span>
            <span><b>05</b>&#125;;</span>
          </div>
          <div className="hero__status"><span></span> Disponible para nuevos proyectos</div>
        </div>
      </div>
    </section>
  );
}
