import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Products } from './Products.entity'

@Entity()
export class VolumeType {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    name: string

    @Column({ type: 'varchar', length: 10 })
    initials: string

    @OneToMany(() => Products, (products) => products.volume_type)
    products: Products[]
}
