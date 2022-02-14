import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransctionsResolver } from './transctions/transctions.resolver';
import { TransactionnsModule } from './transactionns/transactionns.module';

@Module({
  imports: [TransactionnsModule],
  controllers: [AppController, TransactionController],
  providers: [AppService, TransctionsResolver],
})
export class AppModule {}
