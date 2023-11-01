import './styles.css';

import cartIcon from '../../assets/images/cart.svg';

export default function CartIcon() {
    return (
        <>
            <img src={cartIcon} alt="Carrinho de Compras" />
            <div className="dsc-cart-count">22</div>
        </>
    );
}