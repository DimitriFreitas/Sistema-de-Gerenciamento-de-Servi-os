import { Link } from "react-router-dom";
import { orderedModules } from "../data/moduleConfigs";

function Home() {
  return (
    <div className="page-stack">
      <section className="hero-grid">
        <article className="hero-panel hero-panel--accent">
          <p className="eyebrow">Sprint 1</p>
          <h2>Clientes e Produtos em foco</h2>
          <p className="hero-copy">
            O shell responsivo ja esta pronto e agora os modulos ativos da sprint
            exibem o CRUD visual completo, seguindo a estrutura sugerida no
            documento de requisitos.
          </p>

          <div className="hero-actions">
            <Link className="button button--light" to="/clientes">
              Abrir Clientes
            </Link>
            <Link className="button button--ghost-light" to="/produtos">
              Abrir Produtos
            </Link>
          </div>
        </article>

        <article className="surface-card highlight-card">
          <p className="eyebrow">Cronograma</p>
          <h3>Entrega atual da sprint</h3>

          <div className="timeline-list">
            <div className="timeline-item">
              <strong>Tarefa 7 finalizada</strong>
              <p>Layout, rotas e navegacao responsiva concluídos entre 10/04/2026 e 14/04/2026.</p>
            </div>
            <div className="timeline-item">
              <strong>Tarefa 10 em andamento</strong>
              <p>CRUD visual de Clientes seguindo RF001 a RF004 e o design sugerido do PDF.</p>
            </div>
            <div className="timeline-item">
              <strong>Tarefa 13 preparada</strong>
              <p>CRUD visual de Produtos seguindo RF005 a RF008 com a mesma linguagem visual.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="surface-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Menu inicial</p>
              <h3>Modulos ativos</h3>
            </div>
            <span className="badge">CRUD UI</span>
          </div>

          <div className="module-grid">
            {orderedModules.map((module, index) => (
              <Link
                className={`module-tile${index === 0 ? " module-tile--primary" : ""}`}
                key={module.key}
                to={module.basePath}
              >
                <span>{module.label}</span>
                <small>{module.summary}</small>
              </Link>
            ))}
          </div>
        </article>

        <article className="surface-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Recorte atual</p>
              <h3>O que entra nesta entrega</h3>
            </div>
          </div>

          <div className="timeline-list">
            <div className="timeline-item">
              <strong>1. Rotas</strong>
              <p>Clientes e Produtos agora possuem menu do modulo e rotas internas de CRUD.</p>
            </div>
            <div className="timeline-item">
              <strong>2. Layout</strong>
              <p>Listagem, formularios e inativacao seguem a mesma estrutura visual e responsiva.</p>
            </div>
            <div className="timeline-item">
              <strong>3. Navegacao</strong>
              <p>Cada modulo permite navegar entre consultar, cadastrar, editar e inativar.</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Home;
