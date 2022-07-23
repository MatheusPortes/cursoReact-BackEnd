import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { State } from "./State.entity"

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 60 })
  name: string

  @Column({ type: 'varchar', length: 60 })
  name_tpbr: string

  @Column({ type: 'varchar', length: 2, nullable: true })
  initials: string

  @Column({ type: 'integer' })
  bacen: string

  @Column({ type: 'timestamp' })
  created_at: Date

  @OneToMany(() => State, state => state.country)
  state: State[]
}
