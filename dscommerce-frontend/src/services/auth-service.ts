import QueryString from "qs";
import { AxiosRequestConfig } from "axios";

import { CLIENT_ID, CLIENT_SECRET } from "../utils/System";
import { AccessTokenPayloadDTO, CredentialsDTO } from "../models/auth";
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