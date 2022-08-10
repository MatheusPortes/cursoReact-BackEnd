import { Body, Controller, ForbiddenException, Get, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDTO } from './DTOs/create-address.dto';

@Controller('address')
export class AddressController {
  constructor(
    private addressService: AddressService,
  ) {}

  @Post()
  async ts() {
    console.log(`aki`)

  }

  @Post()
  async CreateAddress(@Body() params: CreateAddressDTO) {
    return console.log(params)
  } 
}
