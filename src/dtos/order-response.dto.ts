import { Order } from "../order.entity";

export class OrderResponseDto {
    id: number;
    product: string;
    quantity: number;
    price: number;
    status: 'pending' | 'completed';

    constructor(order: Order) {
        this.id = order.id;
        this.product = order.product;
        this.quantity = order.quantity;
        this.price = order.price;
        this.status = order.status;
    }
}