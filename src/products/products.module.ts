import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Venta } from './entities/venta.entity';
import { VentaController } from './venta.controller';
import { VentaService } from './venta.service';

@Module({
  controllers: [ProductsController, VentaController],
  providers: [ProductsService, VentaService],
  imports: [
    TypeOrmModule.forFeature([Product, Venta])
  ]
})
export class ProductsModule {}
