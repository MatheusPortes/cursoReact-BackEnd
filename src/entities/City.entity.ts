import { Column, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Address } from "./Address.entity"
import { State } from "./State.entity"

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'integer' })
  id_state: number

  @Column({ type: 'varchar', length: 120 })
  name: string

  @Column({ type: 'integer' })
  ibge: string

  @Column({ type: 'point' })
  lat_lon: string

  @Column({ type: 'double precision' })
  latitude: Date

  @Column({ type: 'double precision'})
  longitude: string

  @Column({ type: 'smallint' })
  cod_tom: string

  @Column({ type: 'timestamp' })
  created_at: Date

  @ManyToOne(() => State, state => state.city)
  @JoinTable()
  state: State

  @OneToMany(() => Address, address => address.city)
  address: Address
}
