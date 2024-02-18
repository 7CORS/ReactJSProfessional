import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/System";

// Realiza uma requisição de login com as credenciais fornecidas
export function loginRequest(loginData: CredentialsDTO) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    }

    console.log(headers);
}