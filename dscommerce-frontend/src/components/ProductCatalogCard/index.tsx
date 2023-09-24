import './styles.css';

import computerIcon from '../../assets/images/computer.png';

export default function ProductCatalogCard() {
    return (
        <div className="dsc-card">

            <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerIcon} alt="Computador" />
            </div>
            <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
            </div>

        </div>
    );
}