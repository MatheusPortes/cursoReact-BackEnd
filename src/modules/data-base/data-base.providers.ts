import { DataSource } from 'typeorm'

export const DataBaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: `postgres`,
        host: process.env.HOST_DB,
        port: Number(process.env.PORT_DB),
        username: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        database: process.env.NAME_DB,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/../**/*.migration{.ts,.js}'],
        // synchronize: true,
      })

      return dataSource.initialize()
    },
  },
]
