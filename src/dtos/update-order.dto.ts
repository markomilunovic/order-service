import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateOrderDto {
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
    @IsNotEmpty({ message: 'status is required' })
    status: 'pending' | 'completed'
}