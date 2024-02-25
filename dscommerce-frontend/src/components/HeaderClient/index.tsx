import './styles.css';
import { Link } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import CartIcon from '../CartIcon';
import admSettings from '../../assets/images/admin.svg';
import { useContext } from 'react';
import { ContextToken } from '../../utils/ContextToken';
import LoggedUser from '../LoggedUser';

export default function HeaderClient() {

    const { contextTokenPayload } = useContext(ContextToken);

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to="/">
                    <h1>DSCommerce</h1>
                </Link>
                <div className="dsc-navbar-rirght">
                    <div className="dsc-menu-items-container">
                        {
                            contextTokenPayload &&
                            authService.hasAnyRoles(['ROLE_ADMIN']) &&
                            <Link to="/admin">
                                <div className="dsc-menu-item">
                                    <img src={admSettings} alt="Admin" />
                                </div>
                            </Link>
                        }
                        <Link to="/cart">
                            <div className="dsc-menu-item">
                                <CartIcon />
                            </div>
                        </Link>
                    </div>

                    <LoggedUser />

                </div>
            </nav>
        </header>
    );
}