import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/System";

export function save(cart: OrderDTO) {

    const str = JSON.stringify(cart)
    localStorage.setItem(CART_KEY, str);

}

export function get(): OrderDTO {
    const str = localStorage.getItem(CART_KEY) || '{"items":[]}';
    const obj = JSON.parse(str);

    const cart = new OrderDTO();

    obj.items.forEach((x: OrderItemDTO) => {
        cart.items.push(new OrderItemDTO(
            x.productId,
            x.quantity,
            x.name,
            x.price,
            x.imgUrl
        ));
    });

    return cart;
}
