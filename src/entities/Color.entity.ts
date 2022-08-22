import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Products } from './Products.entity'
import { ProductsColor } from './ProductsColor.entity'

@Entity()
export class Color {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 100 })
    color: string

    @Column({ type: 'varchar', length: 9 })
    hex: string

    @OneToMany(() => ProductsColor, (products_color) => products_color.color)
    products_color: ProductsColor[]
}
