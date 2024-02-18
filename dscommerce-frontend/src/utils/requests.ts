import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./System";

/**
 * Envia uma requisição ao backend, configurando automaticamente o URL base.
 * 
 * @param {AxiosRequestConfig} config - A configuração da requisição.
 * @returns Uma promessa que resolve com os dados de resposta da requisição.
 */
export function requestBackend(config: AxiosRequestConfig) {
    return axios({ ...config, baseURL: BASE_URL })
}