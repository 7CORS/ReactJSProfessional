import './styles.css';
import computerIcon from '../../assets/images/computer.png';
import ProductCategory from '../ProductCategory';

export default function ProductDetailsCard() {
    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top">
                <img src={computerIcon} alt="Computador" />
            </div>
            <div className="dsc-product-details-bottom">

                <h3>R$ 5.000,00</h3>
                <h4>Computador Gamer XT</h4>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus accusantium unde
                    officiis!
                    Incidunt laudantium molestiae vitae odio id, possimus ad ducimus rem consequatur odit porro
                    aliquid ullam nam accusamus.
                </p>

                <div className="dsc-product-category-container">
                    <ProductCategory />
                    <ProductCategory />
                </div>

            </div>
        </div>
    );
}