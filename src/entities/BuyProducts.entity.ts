import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Products } from './Products.entity'
import { User } from './User.entity'

@Entity()
export class BuyProducts {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'integer' })
    id_user: number

    @Column({ type: 'integer' })
    id_products: number

    @Column({ type: 'integer' })
    code_buy: number

    @Column({ type: 'timestamp' })
    created_at: Date

    @ManyToOne(() => User, (user) => user.buy_products)
    @JoinColumn({ name: 'id_user' })
    user: User

    @ManyToOne(() => Products, (products) => products.buy_products)
    @JoinColumn({ name: 'id_products' })
    products: Products
}
