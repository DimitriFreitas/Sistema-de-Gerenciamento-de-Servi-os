import { Link } from "react-router-dom";

function ModuloPlaceholder({ title, description, taskId, plannedWindow }) {
  return (
    <div className="page-stack">
      <section className="hero-grid">
        <article className="hero-panel hero-panel--soft">
          <p className="eyebrow">Proxima etapa da sprint</p>
          <h2>{title}</h2>
          <p className="hero-copy">{description}</p>
          <div className="hero-actions">
            <Link className="button button--secondary" to="/">
              Voltar ao inicio
            </Link>
          </div>
        </article>

        <article className="surface-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Planejamento</p>
              <h3>Espaco reservado</h3>
            </div>
          </div>

          <div className="timeline-list">
            <div className="timeline-item">
              <strong>Escopo futuro</strong>
              <p>{description}</p>
            </div>
            <div className="timeline-item">
              <strong>RF planejado</strong>
              <p>{taskId}</p>
            </div>
            <div className="timeline-item">
              <strong>Janela prevista</strong>
              <p>{plannedWindow}</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default ModuloPlaceholder;
