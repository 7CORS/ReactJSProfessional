import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../utils/requests';

export function findAll() {
    return requestBackend({ url: `/products?size=12` });
}

export function findById(id: number) {
    return requestBackend({ url: `/products/${id}` });
}

export function findPageRequest(page: number, name: string, size = 12, sort = "name") {

    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/products",
        params: {
            page: page,
            name: name,
            size: size,
            sort: sort
        }
    }

    return requestBackend(config);
}