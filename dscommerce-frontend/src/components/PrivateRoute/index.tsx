import { Navigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import { RoleEnum } from '../../models/auth';

type Props = {
    children: JSX.Element;
    roles?: RoleEnum[];
}

/**
 * Componente `PrivateRoute`: Um componente de rota privada que encapsula a lógica de controle de acesso,
 * destinado a proteger rotas em aplicações React. Ele verifica não apenas a autenticação do usuário, mas
 * também se o usuário possui qualquer uma das roles necessárias para acessar a rota protegida.
 *
 * Props:
 *   - `children`: JSX.Element - O conteúdo ou componentes filhos a serem renderizados se o usuário
 *     estiver autenticado e possuir as roles necessárias.
 *   - `roles`: RoleEnum[] (opcional) - Um array de roles que o usuário deve possuir para acessar a rota.
 *     Se nenhum valor for fornecido, presume-se que a rota não requer roles específicas.
 *
 * Comportamento:
 *   - Primeiro, verifica se o usuário está autenticado verificando a presença e a validade do token
 *     de acesso no armazenamento local, utilizando `authService.isAuthenticated()`.
 *   - Se autenticado, a função então verifica se o usuário possui pelo menos uma das roles especificadas
 *     (se houver), usando `authService.hasAnyRoles(roles)`.
 *   - Se o usuário não estiver autenticado, ele é redirecionado para a página de login (`/login`).
 *   - Se o usuário estiver autenticado mas não possuir as roles necessárias, é redirecionado para a
 *     página do catálogo de produtos (`/product-catalog`), ou para qualquer outra página considerada
 *     apropriada para usuários sem as permissões necessárias.
 *
 * Uso:
 * Este componente é ideal para uso em sistemas de roteamento, como com `react-router-dom`, para proteger
 * componentes ou páginas que requerem não apenas autenticação, mas também autorização baseada em roles.
 * Facilita a criação de uma experiência de usuário segura, redirecionando automaticamente usuários sem
 * as credenciais apropriadas, e reduzindo a necessidade de verificações de autorização no lado do servidor.
 *
 * Exemplo:
 * ```
 * <PrivateRoute roles={['ROLE_ADMIN']}>
 *   <AdminDashboard />
 * </PrivateRoute>
 * ```
 * Neste exemplo, o `AdminDashboard` só é acessível por usuários autenticados que também possuem a role 'ROLE_ADMIN'.
 */
export function PrivateRoute({ children, roles = [] }: Props) {

    if (!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    // já está logado, mas, sem permissão para a rota em questão, vá para o catálogo
    if (!authService.hasAnyRoles(roles)) {
        return <Navigate to="/product-catalog" />;
    }

    return children;
}