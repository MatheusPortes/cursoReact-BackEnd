import { DataSource } from 'typeorm';
import { User } from '../../entities/User.entity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: async (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE']
  },
]
