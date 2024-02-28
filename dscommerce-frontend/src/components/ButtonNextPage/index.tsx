import './styles.css';

type Props = {
    onNextPage: () => void;
}

export default function ButtonNextPage({ onNextPage }: Props) {
    return (
        <div onClick={() => onNextPage()} className="dsc-btn-next-page dsc-mb20">
            Carregar mais...
        </div>
    );
}