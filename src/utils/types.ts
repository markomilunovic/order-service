export type CreateOrderType = {
    product: string;
    quantity: number;
    price: number;
    status?: 'pending' | 'completed';
}

export type UpdateOrderType = {
    product: string;
    quantity: number;
    price: number;
    status: 'pending' | 'completed';
}