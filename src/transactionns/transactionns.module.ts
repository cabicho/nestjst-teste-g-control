import { Module } from '@nestjs/common';
import { TransactionnsService } from './transactionns.service';
import { TransactionnsController } from './transactionns.controller';

@Module({
  controllers: [TransactionnsController],
  providers: [TransactionnsService]
})
export class TransactionnsModule {}
