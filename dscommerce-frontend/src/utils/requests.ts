import axios, { AxiosRequestConfig } from "axios";
import * as authService from '../services/auth-service';
import { BASE_URL } from "./System";

/**
 * Envia uma requisição ao backend, configurando automaticamente o URL base.
 * 
 * @param {AxiosRequestConfig} config - A configuração da requisição.
 * @returns Uma promessa que resolve com os dados de resposta da requisição.
 */
export function requestBackend(config: AxiosRequestConfig) {

    // ternário em substituição ao 'if'
    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getAccessToken()
    } : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers })
}