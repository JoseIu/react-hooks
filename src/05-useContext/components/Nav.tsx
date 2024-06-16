import { NavLink } from 'react-router-dom';
import './nav.css';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__item">
          <NavLink className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
