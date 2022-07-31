import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Address } from '../../entities/Address.entity';

@Injectable()
export class AddressService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>
  ) {}

  async ts() {
    
  }
}
