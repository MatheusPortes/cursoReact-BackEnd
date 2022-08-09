import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User.entity"

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 255 })
  name: string

  @Column({ type: 'varchar', length: 11 })
  cpf: string

  @Column({  type: 'varchar', length: 10 })
  rg: string

  @Column({ type: 'date' })
  birth_date: Date

  @Column({ type: 'timestamp' })
  update_at: Date

  @Column({ type: 'timestamp' })
  created_at: Date

  @OneToMany(() => User, user => user.person)
  user: User[]
}
