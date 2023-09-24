import './styles.css';
import carIcon from '../../assets/images/car.png';
import Button from '../Button';

export default function Card() {
    return (
        <div className="car-card">
            <img src={carIcon} alt="Carro" />
            <h3>Audi Supra TT</h3>
            <p>
                <i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa
                    velit amet quod deserunt harum doloremque aspernatur totam quos nam molestiae,
                    minima placeat deleniti eligendi ratione natus ex, aliquam pariatur!
                </i>
            </p>
            <Button />
        </div>
    );
}