import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResponseDto } from './dtos/order-response.dto';
import { ResponseDto } from './dtos/response.dto';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto } from './dtos/update-order.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService) {}

    @MessagePattern({ cmd: 'get_all_orders' })
    async getAllOrders(): Promise<ResponseDto<OrderResponseDto[]>> {
        try{
            const orders = await this.orderService.getAllOrders();
            const orderResponseDtos = orders.map(order => new OrderResponseDto(order))

            return new ResponseDto(orderResponseDtos, 'Orders retrieved successfully');

        } catch (error) {
            throw new InternalServerErrorException('Error retrieving orders');
        }
    }

    @MessagePattern({ cmd: 'find_order' })
    async findOrderById(id: number): Promise<ResponseDto<OrderResponseDto>> {
        try {
            const order = await this.orderService.findOrderById(id);

            if(!order) {
                throw new NotFoundException('Order not found');
            }

            return new ResponseDto(new OrderResponseDto(order), 'Order retrieved successfully');
        } catch (error) {
            throw new InternalServerErrorException('Error retrieving order');
        }
    }

    @MessagePattern({ cmd: 'create_order' })
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async createOrder(createOrderDto: CreateOrderDto): Promise<ResponseDto<null>> {
        try {
            await this.orderService.createOrder(createOrderDto);

            return new ResponseDto(null, 'Order created successfully');

        } catch (error) {
            throw new InternalServerErrorException('Error creating order');
        }
    }

    @MessagePattern({ cmd: 'update_order' })
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async updateOrder(id: number, updateOrderDto: UpdateOrderDto): Promise<ResponseDto<null>> {
        try {
            await this.orderService.updateOrder(id, updateOrderDto);

            return new ResponseDto(null, 'Order updated successfully');

        } catch (error) {
            throw new InternalServerErrorException('Error updating order');
        }
    }

    @MessagePattern({ cmd: 'delete_order' })
    async deleteOrder(id: number): Promise<ResponseDto<null>> {
        try {
            await this.orderService.deleteOrder(id);

            return new ResponseDto(null, 'Order deleted successfully');

        } catch (error) {
            throw new InternalServerErrorException('Error deleting order');
        }
    }
   
}
