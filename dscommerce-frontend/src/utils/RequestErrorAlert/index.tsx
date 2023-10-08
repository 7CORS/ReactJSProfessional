import { useNavigate } from 'react-router-dom';
import './styles.css';

type Props = {
    errorData: {
        timestamp: string;
        status: number;
        error: string;
        path: string;
    };
}

export default function RequestErrorAlert({ errorData }: Props) {
    const { timestamp, status, error, path } = errorData;
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/");
    };

    return (
        <div className="request-error-container dsc-mt20 dsc-container">
            <div className="request-error-title">Erro {status}: {error}</div>
            <div>Data: {new Date(timestamp).toLocaleString()}</div>
            <div>Caminho: {path}</div>
            <button onClick={handleRedirect} className="request-error-button">Voltar para Início</button>
        </div>
    );
}