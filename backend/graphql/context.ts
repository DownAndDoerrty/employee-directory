import { PrismaClient } from '@prisma/client';

export class Context {
  public prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
  }
}
