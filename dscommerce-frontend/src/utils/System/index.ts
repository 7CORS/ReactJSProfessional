// URL base do backend
export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";

// ID do cliente para autenticação OAuth2
export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID ?? "myclientid";

// Segredo do cliente para autenticação OAuth2
export const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET ?? "myclientsecret";

// Chave para o armazenamento do carrinho e token no localStorage
export const CART_KEY = "com.devsuperior.dscommerce/Cart";
export const TOKEN_KEY = "com.devsuperior.dscommerce/Token";