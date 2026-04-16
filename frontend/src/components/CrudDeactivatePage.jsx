import { Link } from "react-router-dom";
import ModuleActionNav from "./ModuleActionNav";

function CrudDeactivatePage({ moduleConfig }) {
  const config = moduleConfig.deactivate;

  return (
    <div className="page-stack">
      <ModuleActionNav actions={moduleConfig.actions} />

      <section className="form-layout">
        <article className="form-side-panel">
          <p className="eyebrow">{moduleConfig.sprint}</p>
          <h2>{config.heroTitle}</h2>
          <p className="hero-copy">{config.heroDescription}</p>

          <div className="facts-grid compact-facts">
            {config.facts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card surface-card--flush">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Confirmacao</p>
              <h3>{config.heroTitle}</h3>
            </div>
            <Link className="button button--secondary" to={moduleConfig.actions[1].path}>
              Voltar para consulta
            </Link>
          </div>

          <div className="alert alert--danger">{config.warning}</div>

          <div className="inner-panel">
            <p className="eyebrow">Modal sugerido</p>
            <h4>Detalhes antes da inativacao</h4>
            <div className="mini-list">
              {config.facts.map((fact) => (
                <div className="mini-list-item" key={fact.label}>
                  <strong>{fact.label}:</strong> {fact.value}
                </div>
              ))}
            </div>
          </div>

          <label className="field">
            <span>{config.optionalField.label}</span>
            <input placeholder={config.optionalField.placeholder} type="text" />
          </label>

          <div className="button-group form-actions">
            {config.actionButtons.map((button) => (
              <button
                className={`button button--${button.variant}`}
                key={button.label}
                type="button"
              >
                {button.label}
              </button>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default CrudDeactivatePage;
