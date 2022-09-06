import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { BuyProducts } from './BuyProducts.entity'
import { ProductsColor } from './ProductsColor.entity'
import { VolumeType } from './VolumeType.entity'

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'integer', nullable: true })
    id_volume_type: number

    @Column({ type: 'varchar', length: 255 })
    name: string

    @Column({ type: 'integer' })
    price: number

    @Column({ type: 'integer' })
    quantity: number

    @Column({ type: 'integer', nullable: true })
    bulk: number

    @Column({ type: 'timestamp' })
    update_at: Date

    @Column({ type: 'timestamp' })
    created_at: Date

    @ManyToOne(() => VolumeType, (volume_type) => volume_type.products)
    @JoinColumn({ name: 'id_volume_type' })
    volume_type: VolumeType

    @OneToMany(() => BuyProducts, (buy_products) => buy_products.products)
    buy_products: BuyProducts[]

    @OneToMany(() => ProductsColor, (products_color) => products_color.products)
    @JoinColumn({ name: 'id_color' })
    products_color: ProductsColor[]
}
