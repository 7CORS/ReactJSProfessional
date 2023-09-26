import './styles.css';

type Props = {
    buttonPurchaseName: string;
}

export default function ButtonPrimary({ buttonPurchaseName }: Props) {
    return (
        <div className="dsc-btn dsc-btn-blue">
            {buttonPurchaseName}
        </div>
    );
}