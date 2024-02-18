import './styles.css';

import homeIcon from '../../assets/images/home.svg';
import productsIcon from '../../assets/images/products.svg';

export default function HeaderAdmin() {
    return (
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <h1>DSC Admin</h1>
                <div className="dsc-navbar-rirght">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <img src={homeIcon} alt="Início" />
                            <p>Início</p>
                        </div>
                        <div className="dsc-menu-item">
                            <img src={productsIcon} alt="Produtos" />
                            <p className="dsc-menu-item-active">Produtos</p>
                        </div>
                    </div>
                    <div className="dsc-logged-user">
                        <p>Maria Silva</p>
                        <a href="#">Sair</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}