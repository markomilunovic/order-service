import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty({ message: 'Product is required' })
    product: string;

    @IsInt()
    @IsNotEmpty({ message: 'Quantity is required' })
    quantity: number;

    @IsNumber()
    @IsNotEmpty({ message: 'Price is required' })
    price: number

    @IsEnum(['pending', 'completed'])
    @IsOptional()
    status: 'pending' | 'completed'
}