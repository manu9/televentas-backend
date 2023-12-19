import { Controller, Post, Body} from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaDto } from './dto/venta.dto';

@Controller('venta')
export class VentaController {

    constructor(private readonly ventaService: VentaService) {}

@Post()
  create(@Body() ventaDto: VentaDto) {
      console.log('Venta ejecutada.');
      return this.ventaService.create(ventaDto);
      //return ventaDto;
  }

}