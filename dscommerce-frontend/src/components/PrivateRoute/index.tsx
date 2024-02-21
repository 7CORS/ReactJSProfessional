import { Navigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';

type Props = {
    children: JSX.Element;
}

/**
 * Componente `PrivateRoute`: Um componente de alta ordem usado para encapsular e proteger rotas
 * em aplicações React. O objetivo principal é controlar o acesso a componentes ou páginas específicas,
 * permitindo que apenas usuários autenticados possam visualizá-los, realizando essa verificação
 * diretamente no lado do cliente.
 *
 * Props:
 *   - `children`: JSX.Element - Representa o conteúdo ou componentes filhos que o `PrivateRoute`
 *     irá renderizar se o usuário estiver autenticado.
 *
 * Comportamento:
 *   - Utiliza o método `authService.isAuthenticated()` para verificar se existe um token de acesso
 *     válido no armazenamento local, e se o mesmo ainda não expirou, sem a necessidade de realizar
 *     verificações adicionais no backend.
 *   - Se o usuário estiver autenticado (token presente e válido), permite o acesso ao componente
 *     ou página envolvida, renderizando os `children`.
 *   - Caso o usuário não esteja autenticado, redireciona imediatamente para a página de login
 *     utilizando `<Navigate to="/login" />` do `react-router-dom`, evitando assim a necessidade
 *     de um round-trip ao servidor para verificar o estado de autenticação.
 *
 * Uso:
 * Deve ser utilizado em sistemas de rotas, como com a biblioteca `react-router-dom`, para envolver
 * componentes ou páginas que exigem autenticação do usuário. Isso garante uma experiência de usuário
 * segura e eficiente, redirecionando usuários não autenticados antes de qualquer tentativa de acesso
 * a recursos protegidos, otimizando a performance ao reduzir a necessidade de verificações de autenticação
 * no lado do servidor.
 */
export function PrivateRoute({ children }: Props) {
    if (!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    return children;
}

