import { FeatureGrid } from "@/components/marketing/feature-grid";
import { Hero } from "@/components/marketing/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <section className="section process-section" id="proceso">
        <div className="container">
          <div className="process-section__intro">
            <p className="eyebrow">Cómo trabajo</p>
            <h2>Menos ruido. Más intención.</h2>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Entender</h3><p>Convierto una idea difusa en un problema claro y una dirección concreta.</p></article>
            <article><span>02</span><h3>Construir</h3><p>Diseño y desarrollo una primera versión pequeña, usable y fácil de mejorar.</p></article>
            <article><span>03</span><h3>Refinar</h3><p>Cuido los detalles que hacen que una herramienta se sienta propia y agradable.</p></article>
          </div>
        </div>
      </section>
      <section className="section about-section" id="sobre-mi">
        <div className="container about-section__grid">
          <div>
            <p className="eyebrow">Sobre mí</p>
            <h2>Diseño y construyo experiencias digitales claras.</h2>
          </div>
          <p>Hola, soy Tu Nombre. Trabajo en productos digitales, interfaces y webs que buscan ser útiles, sencillas y agradables de usar. Este texto es un punto de partida: cámbialo por tu historia, especialidad y ciudad.</p>
        </div>
      </section>
      <section className="contact-section" id="contacto">
        <div className="container contact-section__inner">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>¿Hablamos de tu próximo proyecto?</h2>
          </div>
          <a className="button button-primary" href="mailto:hola@tudominio.com">hola@tudominio.com</a>
        </div>
      </section>
    </>
  );
}
