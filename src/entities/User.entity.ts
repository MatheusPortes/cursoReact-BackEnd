import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Address } from "./Address.entity"
import { Person } from "./Person.entity"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'integer' })
  id_person: number

  // @Column({ type: 'integer', nullable: true })
  // id_address: number

  @Column({ type: 'varchar', length: 255 })
  login: string

  @Column({ type: 'varchar', length: 255 })
  password: string

  @Column({ type: 'varchar',  length: 255 })
  email: string

  @Column({ type: 'varchar' })
  is_state: boolean

  @Column({ type: 'timestamp', nullable: true })
  update_at: Date

  @Column({ type: 'timestamp' })
  created_at: Date

  @ManyToOne(() => Person, person => person.user)
  @JoinTable({ name: "id_person" })
  person: Person

  // @ManyToOne(() => Address, address => address.user)
  // @JoinTable({ name: "id_address" })
  // address: Address[]
}
