import {
  Controller,
  Get,
  HttpStatus,
  Logger,
  NotFoundException,
  Param,
  ParseIntPipe,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  logger = new Logger(CarsController.name);

  constructor(private readonly carsService: CarsService) {}
  @Get()
  async getCars(@Res() res: Response) {
    try {
      const cars = this.carsService.getCars();
      return res.json({ cars });
    } catch (error) {
      this.logger.error(error);
    }
  }

  @Get(':id')
  async getCar(@Res() res: Response, @Param('id', ParseIntPipe) id: number) {
    try {
      const car = this.carsService.getCar(id);
      if (!car) throw new NotFoundException('No se ha encontrado el auto');
      return res.json({ car });
    } catch (error) {
        return res.status(HttpStatus.NOT_FOUND).json({
            statusCode: HttpStatus.NOT_FOUND,
            message: error
        })
    }
  }
}
