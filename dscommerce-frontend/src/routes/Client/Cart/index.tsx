import './styles.css';
import iconComputer from '../../../assets/images/computer.png';

export default function Cart() {
    return (
        <main>

            <section className="dsc-container dsc-mt20">
                <div className="dsc-card dsc-mb20">

                    <div className="dsc-cart-item-container dsc-line-bottom">
                        <div className="dsc-cart-item-left">
                            <img src={iconComputer} alt="Computador" />

                                <div className="dsc-cart-item-description">
                                    <h3>Computador Gamer XT</h3>
                                    <div className="dsc-cart-item-quantity-container">
                                        <div className="dsc-cart-item-quantity-btn">-</div>
                                        <p>1</p>
                                        <div className="dsc-cart-item-quantity-btn">+</div>
                                    </div>
                                </div>

                        </div>

                        <div className="dsc-cart-item-right">R$ 5000,00</div>

                    </div>

                    <div className="dsc-cart-item-container dsc-line-bottom">
                        <div className="dsc-cart-item-left">
                            <img src={iconComputer} alt="Computador" />

                                <div className="dsc-cart-item-description">
                                    <h3>Computador Gamer XT</h3>
                                    <div className="dsc-cart-item-quantity-container">
                                        <div className="dsc-cart-item-quantity-btn">-</div>
                                        <p>1</p>
                                        <div className="dsc-cart-item-quantity-btn">+</div>
                                    </div>
                                </div>

                        </div>

                        <div className="dsc-cart-item-right">R$ 5000,00</div>

                    </div>

                    <div className="dsc-cart-total-container dsc-line-bottom">
                        <h3>R$ 15.000,00</h3>
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