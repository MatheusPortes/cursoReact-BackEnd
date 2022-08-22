import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Color } from "./Color.entity"
import { Products } from "./Products.entity"

@Entity()
export class ProductsColor {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'integer' })
  id_color: number

  @Column({ type: 'integer' })
  id_products: number

  @Column({ type: 'timestamp' })
  created_at: Date

  @ManyToOne(() => Color, (color) => color.products_color)
  @JoinColumn({ name: 'id_color' })
  color: Color

  @ManyToOne(() => Products, (products) => products.products_color)
  @JoinColumn({ name: 'id_products' })
  products: Products
}
