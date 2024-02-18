/**
 * Representa as credenciais de usuário para autenticação.
 * Utilizado para enviar dados no formato 'application/x-www-form-urlencoded'.
 * Inclui:
 * - username: Nome de usuário
 * - password: Senha
 */
export type CredentialsDTO = {
    username: string;
    password: string;
};
