import './styles.css';

type Props = {
    buttonHomeName: string;
}

export default function ButtonInverse({ buttonHomeName }: Props) {
    return (
        <div className="dsc-btn dsc-btn-white">
            {buttonHomeName}
        </div>
    );
}