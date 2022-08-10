import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { City } from "./City.entity"
import { Country } from "./Country.entity"

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'integer' })
  id_country: string | null

  @Column({ type: 'varchar', length: 60 })
  name: string

  @Column({ type: 'varchar', length: 2 })
  uf: string

  @Column({ type: 'integer', nullable: true })
  ibge: string

  @Column({ type: 'timestamp' })
  created_at: Date

  @ManyToOne(() => Country, country => country.state)
  @JoinColumn()
  country: Country

  @OneToMany(() => City, city => city.state)
  city: City[]
}
