import './styles.css';

import { useState, useContext } from 'react';
import * as cartService from '../../../services/cart-service';
import { OrderDTO } from '../../../models/order';
import { Link } from 'react-router-dom';
import { ContextCartCount } from '../../../utils/ContextCart';

export default function Cart() {

    const { setContextCartCount } = useContext(ContextCartCount);

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

    function handleClearClick() {
        cartService.clearCart();
        updateCart();
    }

    function handleIncreaseItem(productId: number) {
        cartService.increaseItem(productId);
        setCart(cartService.getCart());
    }

    function handleDecreaseItem(productId: number) {
        cartService.decreaseItem(productId);
        updateCart();
    }

    function updateCart() {
        const newCart = cartService.getCart();
        setCart(newCart);
        // atualiza a quantidade de itens no carrinho
        setContextCartCount(newCart.items.length);
    }

    return (
        <main>
            <section className="dsc-container dsc-mt20">

                {
                    cart.items.length === 0
                        ? (
                            <div className="dsc-section-title dsc-mb20">Seu carrinho está vazio</div>
                        )
                        : (
                            <div className="dsc-card dsc-mb20">
                                {
                                    cart.items.map(item => (

                                        <div key={item.productId} className="dsc-cart-item-container dsc-line-bottom">
                                            <div className="dsc-cart-item-left">
                                                <img src={item.imgUrl} alt={item.name} />

                                                <div className="dsc-cart-item-description">
                                                    <h3>{item.name}</h3>
                                                    <div className="dsc-cart-item-quantity-container">
                                                        <div onClick={() => handleDecreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">-</div>
                                                        <p>{item.quantity}</p>
                                                        <div onClick={() => handleIncreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">+</div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="dsc-cart-item-right">
                                                R$ {item.subTotal.toFixed(2)}
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className="dsc-cart-total-container dsc-line-bottom">
                                    <h3>
                                        R$ {cart.total.toFixed(2)}
                                    </h3>
                                </div>
                            </div>
                        )

                }

                <div className="dsc-btn-page-container">
                    <div className="dsc-btn dsc-btn-blue">Finalizar pedido</div>

                    <Link to="/product-catalog">
                        <div className="dsc-btn dsc-btn-white">Continuar comprando</div>
                    </Link>
                    <div onClick={handleClearClick} className="dsc-btn dsc-btn-white">Limpar carrinho</div>
                </div>
            </section>
        </main>
    );
}