import { Link } from "react-router-dom";
import ModuleActionNav from "./ModuleActionNav";

function CrudListPage({ moduleConfig }) {
  const detail = moduleConfig.list.detailCard;

  return (
    <div className="page-stack">
      <ModuleActionNav actions={moduleConfig.actions} />

      <section className="content-grid">
        <article className="surface-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Filtros</p>
              <h3>{moduleConfig.list.heroTitle}</h3>
            </div>
            <Link className="button button--primary" to={moduleConfig.actions[2].path}>
              {moduleConfig.actions[2].label}
            </Link>
          </div>

          <p className="placeholder-copy module-copy">{moduleConfig.list.heroDescription}</p>

          <div className="filter-grid">
            {moduleConfig.list.filters.map((filter) => (
              <label className="field" key={filter.label}>
                <span>{filter.label}</span>
                {filter.type === "select" ? (
                  <select defaultValue={filter.value}>
                    {filter.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input defaultValue={filter.value} type="text" />
                )}
              </label>
            ))}
          </div>
        </article>

        <article className="surface-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Painel lateral</p>
              <h3>{detail.title}</h3>
            </div>
          </div>

          <p className="placeholder-copy module-copy">{detail.description}</p>

          <div className="tab-row">
            {detail.tabs.map((tab) => (
              <span className="tab-chip" key={tab}>
                {tab}
              </span>
            ))}
          </div>

          <div className="facts-grid">
            {detail.facts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="surface-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Listagem</p>
            <h3>{moduleConfig.label}</h3>
          </div>
          <div className="button-group">
            <Link className="button button--secondary" to={moduleConfig.actions[3].path}>
              {moduleConfig.actions[3].label}
            </Link>
            <Link className="button button--danger" to={moduleConfig.actions[4].path}>
              {moduleConfig.actions[4].label}
            </Link>
          </div>
        </div>

        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                {moduleConfig.list.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {moduleConfig.list.rows.map((row) => (
                <tr key={row.id}>
                  {row.values.map((value, index) => {
                    const isStatusColumn = index === row.values.length - 1;
                    return (
                      <td key={`${row.id}-${moduleConfig.list.columns[index]}`}>
                        {isStatusColumn ? (
                          <span
                            className={`status-pill status-pill--${String(value)
                              .toLowerCase()
                              .replaceAll(" ", "-")}`}
                          >
                            {value}
                          </span>
                        ) : (
                          value
                        )}
                      </td>
                    );
                  })}
                  <td>
                    <div className="table-actions">
                      <Link className="table-link" to={moduleConfig.actions[3].path}>
                        Editar
                      </Link>
                      <Link className="table-link table-link--danger" to={moduleConfig.actions[4].path}>
                        Inativar
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default CrudListPage;
