import { VentaDto } from './venta.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateVentaDto extends PartialType(VentaDto) {}
