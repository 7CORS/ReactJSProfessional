import { OrderDTO, OrderItemDTO } from "../models/order";

import * as cartRepository from '../localstorage/cart-repository';
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
    cartRepository.save(cart);
}

export function getCart(): OrderDTO {
    return cartRepository.get();
}

export function addProduct(product: ProductDTO) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === product.id);

    if (!item) {
        const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
        cart.items.push(newItem);
        cartRepository.save(cart);
    }
}

export function clearCart() {
    cartRepository.clear();
}

export function increaseItem(productId: number) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === productId);
    if (item) {
        item.quantity++;
        cartRepository.save(cart);
    }
}

export function decreaseItem(productId: number) {
    // 1. Recupera o carrinho atual
    const cart = cartRepository.get();

    // 2. Tenta encontrar o item no carrinho pelo ID do produto
    const item = cart.items.find(x => x.productId === productId);

    // 3. Se o item foi encontrado...
    if (item) {
        // 3.1. Diminui a quantidade do item
        item.quantity--;

        // 3.2. Se a quantidade do item for menor que 1 após a diminuição...
        if (item.quantity < 1) {
            // 3.2.1. Remove o item do carrinho
            cart.items = cart.items.filter(x => x.productId !== productId);
        }

        // 4. Salva as alterações no repositório do carrinho
        cartRepository.save(cart);
    }
}
