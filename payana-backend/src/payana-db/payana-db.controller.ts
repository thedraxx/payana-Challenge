import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { PayanaDbService } from './payana-db.service';
import { UpdatePayanaDbDto } from './dto/update-payana-db.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
@Controller('payana-db')
export class PayanaDbController {
  constructor(private readonly payanaDbService: PayanaDbService) {}

  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updatePayanaDbDto: UpdatePayanaDbDto,
  ) {
    return this.payanaDbService.update(id, updatePayanaDbDto);
  }

  @Get()
  findAll() {
    return this.payanaDbService.getAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.payanaDbService.findOne(id);
  }
}
