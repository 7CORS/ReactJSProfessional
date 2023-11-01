import './styles.css';

import cartIcon from '../../assets/images/cart.svg';
import { useContext } from 'react';
import { ContextCartCount } from '../../utils/ContextCart';

export default function CartIcon() {

    const { contextCartCount } = useContext(ContextCartCount);

    return (
        <>
            <img src={cartIcon} alt="Carrinho de Compras" />
            {
                contextCartCount > 0 &&
                <div className="dsc-cart-count">{contextCartCount}</div>
            }
        </>
    );
}