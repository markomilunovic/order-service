import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'product',
    length: 255,
    nullable: false,
  })
  product: string;

  @Column({
    type: 'int',
    name: 'quantity',
    nullable: false,
  })
  quantity: number;

  @Column({
    type: 'decimal',
    name: 'price',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({
    type: 'enum',
    name: 'status',
    enum: ['pending', 'completed'],
    default: 'pending',
    nullable: false,
  })
  status: 'pending' | 'completed';

}
