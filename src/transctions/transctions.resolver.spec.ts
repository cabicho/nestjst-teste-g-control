import { Test, TestingModule } from '@nestjs/testing';
import { TransctionsResolver } from './transctions.resolver';

describe('TransctionsResolver', () => {
  let resolver: TransctionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransctionsResolver],
    }).compile();

    resolver = module.get<TransctionsResolver>(TransctionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
