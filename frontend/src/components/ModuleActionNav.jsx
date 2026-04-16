import { NavLink } from "react-router-dom";

function ModuleActionNav({ actions }) {
  return (
    <div className="surface-card module-nav-shell">
      <div className="module-subnav">
        {actions.map((action) => (
          <NavLink
            className={({ isActive }) =>
              `module-subnav-link${isActive ? " module-subnav-link--active" : ""}`
            }
            end
            key={action.path}
            to={action.path}
          >
            {action.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default ModuleActionNav;
