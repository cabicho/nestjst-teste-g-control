import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionnsService } from './transactionns.service';
import { CreateTransactionnDto } from './dto/create-transactionn.dto';
import { UpdateTransactionnDto } from './dto/update-transactionn.dto';

@Controller('transactionns')
export class TransactionnsController {
  constructor(private readonly transactionnsService: TransactionnsService) {}

  @Post()
  create(@Body() createTransactionnDto: CreateTransactionnDto) {
    return this.transactionnsService.create(createTransactionnDto);
  }

  @Get()
  findAll() {
    return this.transactionnsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionnsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionnDto: UpdateTransactionnDto) {
    return this.transactionnsService.update(+id, updateTransactionnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionnsService.remove(+id);
  }
}
