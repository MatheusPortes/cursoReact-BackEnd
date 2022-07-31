import { DataSource } from 'typeorm';
import { Address } from '../../entities/Address.entity';

export const AddressProviders = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useFactory: async (dataSource: DataSource) => dataSource.getRepository(Address),
    inject: ['DATA_SOURCE']
  },
]
