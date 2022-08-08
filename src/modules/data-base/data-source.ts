import { ConfigModule } from "@nestjs/config"
import { DataSource } from "typeorm"
import { Address } from "../../entities/Address.entity"
import { City } from "../../entities/City.entity"
import { Country } from "../../entities/Country.entity"
import { Person } from "../../entities/Person.entity"
import { State } from "../../entities/State.entity"
import { User } from "../../entities/User.entity"
ConfigModule.forRoot()

const dataSource = new DataSource({
  type: `postgres`,
  host: process.env.HOST_DB,
  port: Number(process.env.PORT_DB),
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  logging: ["query"],
  entities: [Address,City,Country,Person,State,User],
  migrations: [__dirname + '/../../migration/**/*.{ts,js}'],
  synchronize: false,
})

export default dataSource