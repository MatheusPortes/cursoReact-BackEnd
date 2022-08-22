import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { City } from "./City.entity"
import { User } from "./User.entity"

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'integer' })
  id_city: number

  @Column({ type: 'integer' })
  cep: number

  @Column({ type: 'varchar', length: 255 })
  neighborhood: string

  @Column({ type: 'integer' })
  number: number

  @Column({ type: 'varchar', length: 255 })
  street: string

  @Column({ type: 'varchar', length: 255 })
  complement: string

  @Column({ type: 'timestamp' })
  created_at: Date

  @Column({ type: 'timestamp' })
  update_at: Date

  @ManyToOne(() => City, city => city.address)
  city: City

  @ManyToOne(() => User, user => user.address)
  user: User
}
