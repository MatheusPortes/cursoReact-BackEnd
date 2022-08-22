import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Address } from "./Address.entity"
import { BuyProducts } from "./BuyProducts.entity"
import { Person } from "./Person.entity"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'integer' })
  id_person: number

  @Column({ type: 'integer', nullable: true })
  id_address: number

  @Column({ type: 'varchar', length: 255 })
  login: string

  @Column({ type: 'varchar', length: 255 })
  password: string

  @Column({ type: 'varchar',  length: 255 })
  email: string

  @Column({ type: 'varchar' })
  is_status: boolean

  @Column({ type: 'timestamp', nullable: true })
  update_at: Date

  @Column({ type: 'timestamp' })
  created_at: Date

  @ManyToOne(() => Person, person => person.user)
  @JoinColumn({ name: "id_person" })
  person: Person

  @OneToMany(() => Address, address => address.user)
  @JoinColumn({ name: "id_address" })
  address: Address[]

  @OneToMany(() => BuyProducts, buy_products => buy_products.user)
  buy_products: BuyProducts[]
}
