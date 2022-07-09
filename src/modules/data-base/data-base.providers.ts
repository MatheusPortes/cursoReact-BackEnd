import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

ConfigModule.forRoot()
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
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];