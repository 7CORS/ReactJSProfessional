import './styles.css';

import { useState } from 'react';
import * as cartService from '../../../services/cart-service';
import { OrderDTO } from '../../../models/order';

export default function Cart() {

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

    return (
        <main>
            <section className="dsc-container dsc-mt20">
                <div className="dsc-card dsc-mb20">
                    {
                        cart.items.map(item => (

                            <div key={item.productId} className="dsc-cart-item-container dsc-line-bottom">
                                <div className="dsc-cart-item-left">
                                    <img src={item.imgUrl} alt={item.name} />

                                    <div className="dsc-cart-item-description">
                                        <h3>{item.name}</h3>
                                        <div className="dsc-cart-item-quantity-container">
                                            <div className="dsc-cart-item-quantity-btn">-</div>
                                            <p>{item.quantity}</p>
                                            <div className="dsc-cart-item-quantity-btn">+</div>
                                        </div>
                                    </div>

                                </div>

                                <div className="dsc-cart-item-right">
                                    R$ {(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))
                    }

                    <div className="dsc-cart-total-container dsc-line-bottom">
                        <h3>
                            R$ 15.000,00
                        </h3>
                    </div>
                </div>

                <div className="dsc-btn-page-container">
                    <div className="dsc-btn dsc-btn-blue">Finalizar pedido</div>
                    <div className="dsc-btn dsc-btn-white">Continuar comprando</div>
                </div>
            </section>
        </main>
    );
}