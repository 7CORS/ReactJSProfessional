import './styles.css';

import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="header-content-container container">
                <Link to="/">
                    <h1 className="brand">MeuSite</h1>
                </Link>
                <nav className="navbar">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Início
                    </NavLink>
                    <NavLink to="/promotion" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Promoção
                    </NavLink>
                    <NavLink to="/sub" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Participar
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}