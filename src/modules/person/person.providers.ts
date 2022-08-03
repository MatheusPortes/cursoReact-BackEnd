import { DataSource } from 'typeorm';
import { Person } from '../../entities/Person.entity';

export const PersonProviders = [
  {
    provide: 'PERSON_REPOSITORY',
    useFactory: async (dataSource: DataSource) => dataSource.getRepository(Person),
    inject: ['DATA_SOURCE']
  },
]