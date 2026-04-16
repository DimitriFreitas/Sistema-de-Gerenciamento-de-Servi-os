import { NavLink } from "react-router-dom";
import { primaryNavigation, supportNavigation } from "../config/navigation";

function renderLinks(items, onClose) {
  return items.map((item) => (
    <NavLink
      className={({ isActive }) =>
        `nav-link${isActive ? " nav-link--active" : ""}`
      }
      end={item.path === "/"}
      key={item.path}
      onClick={onClose}
      to={item.path}
    >
      <span>{item.label}</span>
      <small>{item.description}</small>
    </NavLink>
  ));
}

function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? " sidebar--open" : ""}`}>
      <div className="sidebar-brand">
        <p className="eyebrow">Frontend backlog</p>
        <h1>Sistema de Gestao</h1>
        <p className="sidebar-copy">
          Estrutura base focada em rotas, layout e navegacao responsiva.
        </p>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-group">
          <p className="nav-group-title">Fluxo principal</p>
          {renderLinks(primaryNavigation, onClose)}
        </div>

        {supportNavigation.length ? (
          <div className="nav-group">
            <p className="nav-group-title">Modulos futuros</p>
            {renderLinks(supportNavigation, onClose)}
          </div>
        ) : null}
      </nav>
    </aside>
  );
}

export default Sidebar;
