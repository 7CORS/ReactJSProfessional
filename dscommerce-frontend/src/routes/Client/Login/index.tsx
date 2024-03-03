import './styles.css';

import { useContext, useState } from 'react';

import { ChangeEventT, FormEventT } from '../../../utils/TypesEvents';
import * as authService from '../../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/ContextToken';

import { LoginFormData } from '../../../models/LoginFormData';
import FormInput from '../../../components/FormInput';

import * as forms from '../../../utils/Forms/forms';

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

        console.log(forms.toValues(formData));

        //authService.loginRequest({ username: formData.username.value, password: formData.password.value })
        authService.loginRequest(forms.toValues(formData))
            .then((response) => {

                // Sucesso na autenticação
                authService.saveAccessToken(response.data.access_token);

                // Seta o Contexto atualizando globalmente o contextTokenPayload onde estiver
                setContextTokenPayload(authService.getAccessTokenPayload());

                // Redireciona
                navigate("/cart");

                // Capturando o Payload do Token JWT
                // console.log(authService.getAccessTokenPayload()?.username);

                // Atualiza o estado global/auth ou redirecione o usuário
                setLoading(false);
            })
            .catch((/*error*/) => {
                setError('Falha no login. Por favor, verifique suas credenciais.');
                setLoading(false);
            });
    }

    function handleInputChange(event: ChangeEventT) {
        setFormData(forms.update(formData, event.target.name, event.target.value));
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.username}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                    disabled={loading}
                                />
                            </div>
                            <div>
                                <FormInput
                                    {...formData.password}
                                    className="dsc-form-control"
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