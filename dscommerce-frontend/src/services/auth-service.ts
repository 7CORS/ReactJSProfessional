import QueryString from "qs";
import { AxiosRequestConfig } from "axios";

import { CLIENT_ID, CLIENT_SECRET } from "../utils/System";
import { AccessTokenPayloadDTO, CredentialsDTO, RoleEnum } from "../models/auth";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from '../localstorage/access-token-repository';
import jwtDecode from "jwt-decode";

/**
 * Realiza uma requisição de login utilizando as credenciais do usuário.
 * 
 * @param {CredentialsDTO} loginData - Objeto contendo o nome de usuário e a senha.
 * @returns Uma promessa que resolve com os dados de resposta do backend.
 */
export function loginRequest(loginData: CredentialsDTO) {

    // Cabeçalhos
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    };

    // Corpo da Requisição
    const requestBody = QueryString.stringify({
        ...loginData,
        grant_type: "password"
    });

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth2/token",
        data: requestBody,
        headers: headers
    };

    return requestBackend(config);
}

export function logout() {
    accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}

export function getAccessToken() {
    return accessTokenRepository.get();
}

/**
 * Decodifica e retorna o payload do token JWT armazenado, contendo informações do usuário e expiração.
 * Retorna `undefined` se o token não existir ou não puder ser decodificado.
 */
export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
    try {
        const token = accessTokenRepository.get();

        return token == null
            ? undefined
            : (jwtDecode(token) as AccessTokenPayloadDTO);

    } catch (error) {
        return undefined;
    }
}

/**
 * Verifica se o usuário está autenticado analisando a validade do token JWT armazenado.
 * Retorna `true` se o token existir e ainda não tiver expirado; caso contrário, retorna `false`.
 */
export function isAuthenticated(): boolean {
    const tokenPayload = getAccessTokenPayload();

    /*
    if (tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
        return true
    }
    return false;
    */

    return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}

/**
 * Verifica se o usuário atual possui alguma das roles especificadas.
 * 
 * A função `hasAnyRoles` é utilizada para determinar se o usuário autenticado possui pelo menos
 * uma das roles (papéis) fornecidas como argumento. Isso é útil para controle de acesso baseado
 * em roles, permitindo a exibição condicional de componentes ou a execução de determinadas ações
 * baseadas nas permissões do usuário.
 * 
 * Args:
 *   - `roles`: RoleEnum[] - Um array de roles (papéis) a serem verificados contra as authorities
 *     presentes no payload do token JWT do usuário autenticado.
 * 
 * Returns:
 *   - `boolean` - Retorna `true` se o usuário autenticado possuir pelo menos uma das roles
 *     fornecidas, caso contrário retorna `false`.
 * 
 * Comportamento:
 *   - Se o array de roles fornecido estiver vazio, a função retorna `true` por padrão, assumindo
 *     que não há restrições de role específicas a serem aplicadas.
 *   - A função recupera o payload do token de acesso do usuário autenticado utilizando a função
 *     `getAccessTokenPayload`.
 *   - Itera sobre o array de roles fornecido, verificando se alguma das roles está incluída nas
 *     authorities do usuário (presentes no payload do token).
 *   - Alternativamente, o comentário sugere a utilização do método `Array.prototype.some` como
 *     uma abordagem mais concisa e funcional para realizar a mesma verificação, substituindo a
 *     necessidade do loop `for`.
 * 
 * Exemplo de Uso:
 *   ```
 *   if (hasAnyRoles(['ROLE_ADMIN', 'ROLE_USER'])) {
 *       // Executar ação permitida para usuários com roles 'ROLE_ADMIN' ou 'ROLE_USER'.
 *   }
 *   ```
 * 
 * Essa função é particularmente útil em aplicações SPA (Single Page Applications) que utilizam
 * autenticação baseada em JWT, facilitando a implementação de controles de acesso granulares
 * no lado do cliente.
 */
export function hasAnyRoles(roles: RoleEnum[]): boolean {
    if (roles.length === 0) {
        return true;
    }

    const tokenPayload = getAccessTokenPayload();

    if (tokenPayload !== undefined) {
        for (let i = 0; i < roles.length; i++) {
            if (tokenPayload.authorities.includes(roles[i])) {
                return true;
            }
        }
        // 'some' = função de alta ordem (substitui o for) acima | Referência!
        //return roles.some(role => tokenData.authorities.includes(role));
    }
    return false;
}