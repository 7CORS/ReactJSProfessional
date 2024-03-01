import './styles.css';

import { useContext, useState } from 'react';

import { ChangeEventT, FormEventT } from '../../../utils/TypesEvents';
import * as authService from '../../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/ContextToken';

import { LoginFormData } from '../../../models/LoginFormData';

export default function Login() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { setContextTokenPayload } = useContext(ContextToken);

    const [formData, setFormData] = useState<LoginFormData>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    });

    function handleSubmit(event: FormEventT) {
        event.preventDefault();
        setLoading(true);
        setError('');

        authService.loginRequest({ username: formData.username.value, password: formData.password.value })
            .then((response) => {

                // Sucesso na autenticação
                authService.saveAccessToken(response.data.access_token);

                // Seta o Contexto atualizando globalmente o contextTokenPayload onde estiver
                setContextTokenPayload(authService.getAccessTokenPayload());

                // Redireciona
                navigate("/cart");

                // Capturando o Payload do Token JWT
                // console.log(authService.getAccessTokenPayload()?.username);

                // Atualize aqui o estado global/auth ou redirecione o usuário
                setLoading(false);
            })
            .catch((/*error*/) => {
                // Falha na autenticação
                setError('Falha no login. Por favor, verifique suas credenciais.');
                setLoading(false);
            });
    }

    function handleInputChange(event: ChangeEventT) {
        const { value, name } = event.target;
        if (name in formData) {
            setFormData(prevFormData => ({
                ...prevFormData, [name]: { ...prevFormData[name as keyof LoginFormData], value: value },
            }));
        } else {
            console.error(`${name} não é um campo válido.`);
        }
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input
                                    name="username"
                                    value={formData.username.value}
                                    className="dsc-form-control"
                                    type="text"
                                    placeholder="Email"
                                    onChange={handleInputChange}
                                    disabled={loading}
                                />
                            </div>
                            <div>
                                <input
                                    name="password"
                                    value={formData.password.value}
                                    className="dsc-form-control"
                                    type="password"
                                    placeholder="Senha"
                                    onChange={handleInputChange}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons">
                            <button
                                type="submit"
                                className="dsc-btn dsc-btn-blue"
                                disabled={loading}>Entrar
                            </button>
                        </div>

                        {loading && <p>Carregando...</p>}
                        {error && <div className="dsc-form-error">{error}</div>}
                    </form>
                </div>
            </section>
        </main>
    );
}