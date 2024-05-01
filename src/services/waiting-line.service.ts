import { Injectable } from '@nestjs/common';

@Injectable()
export class WaitingLineService {
  private waitingLine = [];
  private maxCapacity = 50; // Defina a capacidade máxima da fila

  addToLine(waitingUser: any): any {
    if (this.waitingLine.length >= this.maxCapacity) {
      throw new Error('A fila atingiu sua capacidade máxima.');
    }
    const lineId = this.generateLineId();
    const newUser = { lineId, ...waitingUser };
    this.waitingLine.push(newUser);
    return newUser;
  }

  getNextInLine(): any {
    // Implementa a lógica para obter o próximo na fila
    // e notifica o usuário
  }

  removeFromLine(lineId: string): void {
    this.waitingLine = this.waitingLine.filter(user => user.lineId !== lineId);
  }

  private generateLineId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
