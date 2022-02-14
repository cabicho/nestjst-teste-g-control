import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionnDto } from './create-transactionn.dto';

export class UpdateTransactionnDto extends PartialType(CreateTransactionnDto) {}
