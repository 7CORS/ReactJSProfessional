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

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
    function (config) {
        // DO SOMETHING BEFORE REQUEST IS SENT
        return config;
    },
    function (error) {
        // DO SOMETHING WITH REQUEST ERROR
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
    function (response) {
        // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
        return response;
    },
    function (error) {

        if (error.response.status === 401) {
            console.log('Status do Erro: 401.');
        }

        if (error.response.status === 403) {
            console.log('Status do Erro: 403.');
        }

        return Promise.reject(error);
    }
);