import './styles.css';
import cartIcon from '../../assets/images/cart.svg';

export default function HeaderClient() {
    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <h1>DSCommerce</h1>
                <div className="dsc-navbar-rirght">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <img src={cartIcon} alt="Carrinho de Compras" />
                        </div>
                    </div>
                    <a href="#">Entrar</a>
                </div>
            </nav>
        </header>
    );
}