import QueryString from "qs";
import { AxiosRequestConfig } from "axios";

import { CLIENT_ID, CLIENT_SECRET } from "../utils/System";
import { CredentialsDTO } from "../models/auth";
import { requestBackend } from "../utils/requests";

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