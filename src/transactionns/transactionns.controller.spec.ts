import { Test, TestingModule } from '@nestjs/testing';
import { TransactionnsController } from './transactionns.controller';
import { TransactionnsService } from './transactionns.service';

describe('TransactionnsController', () => {
  let controller: TransactionnsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionnsController],
      providers: [TransactionnsService],
    }).compile();

    controller = module.get<TransactionnsController>(TransactionnsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
