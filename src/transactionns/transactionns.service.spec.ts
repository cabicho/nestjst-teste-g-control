import { Test, TestingModule } from '@nestjs/testing';
import { TransactionnsService } from './transactionns.service';

describe('TransactionnsService', () => {
  let service: TransactionnsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionnsService],
    }).compile();

    service = module.get<TransactionnsService>(TransactionnsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
