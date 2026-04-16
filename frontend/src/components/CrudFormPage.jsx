import { Link } from "react-router-dom";
import ModuleActionNav from "./ModuleActionNav";

function renderField(field) {
  if (field.type === "select") {
    return (
      <select defaultValue={field.defaultValue ?? field.options[0]}>
        {field.options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    );
  }

  return (
    <input
      defaultValue={field.defaultValue}
      placeholder={field.placeholder}
      type="text"
    />
  );
}

function CrudFormPage({ moduleConfig, mode }) {
  const config = moduleConfig[mode];

  return (
    <div className="page-stack">
      <ModuleActionNav actions={moduleConfig.actions} />

      <section className="form-layout">
        <article className="form-side-panel">
          <p className="eyebrow">{moduleConfig.sprint}</p>
          <h2>{config.heroTitle}</h2>
          <p className="hero-copy">{config.heroDescription}</p>

          <div className="timeline-list compact-stack">
            {config.sideNotes.map((note) => (
              <div className="timeline-item" key={note}>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card surface-card--flush">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Formulario</p>
              <h3>{config.heroTitle}</h3>
            </div>
          </div>

          {config.alert ? <div className="alert alert--info">{config.alert}</div> : null}

          <div className="form-grid">
            {config.fields.map((field) => (
              <label className="field" key={field.label}>
                <span>{field.label}</span>
                {renderField(field)}
              </label>
            ))}
          </div>

          {config.extraPanel ? (
            <div className="inner-panel">
              <p className="eyebrow">Complemento</p>
              <h4>{config.extraPanel.title}</h4>
              <div className="mini-list">
                {config.extraPanel.items.map((item) => (
                  <div className="mini-list-item" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="button-group form-actions">
            <button className="button button--primary" type="button">
              {config.primaryLabel}
            </button>
            <Link className="button button--secondary" to={config.secondaryPath}>
              {config.secondaryLabel}
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}

export default CrudFormPage;
