import './styles.css';

import { useState } from 'react';

import { ChangeEventT, FormEventT } from '../../../utils/TypesEvents';
import { CredentialsDTO } from '../../../models/auth';
import * as authService from '../../../services/auth-service';

/**
 * Componente para o formulário de login.
 * Permite ao usuário inserir suas credenciais e submetê-las para autenticação.
 */
export default function Login() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: '',
        password: ''
    });

    /**
     * Manipula a submissão do formulário de login.
     * 
     * Este método previne o comportamento padrão do formulário para submissão, 
     * inicia o indicador de carregamento, e chama o serviço de autenticação com os dados do formulário.
     * Em caso de sucesso, o estado global ou o contexto da aplicação deve ser atualizado para refletir o login do usuário.
     * Em caso de falha, um erro é exibido para o usuário.
     * 
     * @param {FormEventT} event - O evento de submissão do formulário.
     */
    function handleSubmit(event: FormEventT) {
        event.preventDefault();
        setLoading(true);
        setError('');

        authService.loginRequest(formData)
            .then((response) => {
                
                // Sucesso na autenticação
                authService.saveAccessToken(response.data.access_token);

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

    /**
     * Atualiza o estado do formulário com os valores inseridos.
     * 
     * @param {ChangeEventT} event - O evento de alteração no input.
     */
    function handleInputChange(event: ChangeEventT) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
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
                                    value={formData.username}
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
                                    value={formData.password}
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