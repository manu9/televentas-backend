import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password : 'root1234',
      database: 'televenta_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
