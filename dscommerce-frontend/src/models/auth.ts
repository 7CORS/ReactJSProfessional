/**
 * Tipo para as credenciais de autenticação do usuário.
 * 
 * @property {string} username - O nome de usuário.
 * @property {string} password - A senha do usuário.
 */
export type CredentialsDTO = {
    username: string;
    password: string;
};

export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

export type AccessTokenPayloadDTO = {
    exp: number,
    username: string,
    authorities: RoleEnum[]
}