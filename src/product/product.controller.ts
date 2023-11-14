import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {

    @Get()
    getAllProduct(){
        return [
        {
            id:1,
            name: 'Arroz',
            precio: 1100,
            URL_imagen: 'iuyiuiyiuyi',
            stock: 10
        },
        {
            id:2,
            name: 'Tallarines',
            precio: 1300,
            URL_imagen: '878yiuyiy',
            stock: 30
        }]
    }
}
