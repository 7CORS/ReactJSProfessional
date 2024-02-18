import QueryString from "qs";

import { CLIENT_ID, CLIENT_SECRET } from "../utils/System";
import { CredentialsDTO } from "../models/auth";

// Realiza uma requisição de login com as credenciais fornecidas
export function loginRequest(loginData: CredentialsDTO) {

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    };

    const requestBody = QueryString.stringify({
        ...loginData,
        grant_type: "password"
    });

    console.log(requestBody)
}