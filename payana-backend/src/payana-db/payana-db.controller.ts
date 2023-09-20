import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { PayanaDbService } from './payana-db.service';
import { CreatePayanaDbDto } from './dto/create-payana-db.dto';
import { UpdatePayanaDbDto } from './dto/update-payana-db.dto';
//import { UpdatePayanaDbDto } from './dto/update-payana-db.dto';

@Controller('payana-db')
export class PayanaDbController {
  constructor(private readonly payanaDbService: PayanaDbService) {}

  @Post()
  create(@Body() createPayanaDbDto: CreatePayanaDbDto[]) {
    return this.payanaDbService.create(createPayanaDbDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePayanaDbDto: UpdatePayanaDbDto,
  ) {
    return this.payanaDbService.update(id, updatePayanaDbDto);
  }

  @Get()
  findAll() {
    return this.payanaDbService.findAll();
  }

  /**
   * 
   * 
   * 


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payanaDbService.findOne(+id);
  }

 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payanaDbService.remove(+id);
  }
   * 
   * 
   * / */
}
