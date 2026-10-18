import "./feature-grid.css";

const features = [
  ["01", "Proyecto Aurora", "Frontend · Web", "Identidad y web para una marca que quería explicar mejor su producto.", "aurora"],
  ["02", "Estudio Norte", "Dirección visual · Web", "Portfolio editorial para un estudio creativo, con una navegación directa y visual.", "norte"],
  ["03", "App de hábitos", "Producto · Herramienta", "Interfaz sencilla para convertir pequeños objetivos en rutinas sostenibles.", "habitos"],
];

export function FeatureGrid() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <div className="feature-grid__intro" id="principios">
          <p className="eyebrow">Proyectos seleccionados</p>
          <h2>Un poco de lo que he hecho.</h2>
        </div>
        <div className="feature-grid">
          {features.map(([number, title, category, description, visual]) => <article className={`feature-card feature-card--${visual}`} key={number}>
            <div className="feature-card__visual" aria-hidden="true"><div className="mockup mockup--header"><span></span><span></span><span></span></div><div className="mockup mockup--body"><i></i><i></i><i></i></div></div>
            <div className="feature-card__content"><span>{number}</span><small>{category}</small><h3>{title}</h3><p>{description}</p><a href="#contacto">Ver proyecto <b>↗</b></a></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
