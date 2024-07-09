import { Injectable } from '@nestjs/common';
import { CreateOrderType, UpdateOrderType } from './utils/types';
import { OrderRepository } from './order.repository';
import { Order } from './order.entity';

@Injectable()
export class OrderService {

    constructor(private readonly orderRepository: OrderRepository) {}

    async getAllOrders(): Promise<Order[]> {
        const orders = await this.orderRepository.getAllOrders();
        return orders;
    }

    async findOrderById(id: number): Promise<Order> {
        const order = await this.orderRepository.findOrderById(id);
        return order;
    }

    async createOrder(createOrderType: CreateOrderType): Promise<void> {
        await this.orderRepository.createOrder(createOrderType);
    }

    async updateOrder(id: number, updateOrderType: UpdateOrderType): Promise<void> {
        await this.orderRepository.updateOrder(id, updateOrderType);
    }

    async deleteOrder(id: number): Promise<void> {
        await this.orderRepository.deleteOrder(id);
    }
}
