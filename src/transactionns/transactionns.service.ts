import { Injectable } from '@nestjs/common';
import { CreateTransactionnDto } from './dto/create-transactionn.dto';
import { UpdateTransactionnDto } from './dto/update-transactionn.dto';

@Injectable()
export class TransactionnsService {
  create(createTransactionnDto: CreateTransactionnDto) {
    return 'This action adds a new transactionn';
  }

  findAll() {
    return `This action returns all transactionns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionn`;
  }

  update(id: number, updateTransactionnDto: UpdateTransactionnDto) {
    return `This action updates a #${id} transactionn`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionn`;
  }
}
