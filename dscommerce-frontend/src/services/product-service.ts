import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../utils/requests';
import { ProductDTO } from '../models/product';

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

export function deleteById(id: number) {

    const config: AxiosRequestConfig = {
        method: "DELETE",
        url: `/products/${id}`,
        withCredentials: true
    }

    return requestBackend(config);
}

export function updateRequest(obj: ProductDTO) {

    const config: AxiosRequestConfig = {
        method: "PUT",
        url: `/products/${obj.id}`,
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}