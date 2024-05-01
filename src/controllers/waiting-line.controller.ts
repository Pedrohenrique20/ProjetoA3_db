import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WaitingLineService } from '../services/waiting-line.service';

@Controller('restaurants/:id_restaurant/waitingline')
export class WaitingLineController {
  constructor(private readonly waitingLineService: WaitingLineService) {}

  @Post()
  addToLine(@Body() body: any, @Param('id_restaurant') idRestaurant: string): any {
    body.id_restaurant = idRestaurant; // Adiciona o ID do restaurante ao corpo da requisição
    return this.waitingLineService.addToLine(body);
  }

  @Get(':line_id')
  getNextInLine(@Param('line_id') lineId: string): any {
    return this.waitingLineService.getNextInLine(lineId);
  }

  @Delete(':line_id')
  removeFromLine(@Param('line_id') lineId: string): void {
    this.waitingLineService.removeFromLine(lineId);
  }
}
