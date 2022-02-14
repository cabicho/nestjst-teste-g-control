import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Oracao e Jejum, para sair certo tipo de casta!';
  }
}
