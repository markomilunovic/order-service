import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderType, UpdateOrderType } from './utils/types';
import { Order } from './order.entity';

@Injectable()
export class OrderRepository {

    constructor(
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>,
      ) {}

      async getAllOrders(): Promise<Order[]> {
        return this.ordersRepository.find();
      }

      async findOrderById(id: number): Promise<Order> {
        return this.ordersRepository.findOne({ where: { id } });
      }

      async createOrder(createOrderType: CreateOrderType): Promise<void> {
        this.ordersRepository.save(createOrderType);
      }

      async updateOrder(id: number, updateOrderType: UpdateOrderType): Promise<void> {
        this.ordersRepository.update(id, updateOrderType);
      }

      async deleteOrder(id: number): Promise<void> {
        this.ordersRepository.delete(id)
      }

}
