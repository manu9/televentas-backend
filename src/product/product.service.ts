import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    private productList = {        
        "Ofertas": [{
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
        },
        {
            id:3,
            name: 'Aceite',
            precio: 2000,
            URL_imagen: 'kkslhdglksd86',
            stock: 23
        }],
        "Abarrotes": [{
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
        },
        {
            id:3,
            name: 'Aceite',
            precio: 2000,
            URL_imagen: 'kkslhdglksd86',
            stock: 23
        }],
        "Limpieza": [{
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
        },
        {
            id:3,
            name: 'Aceite',
            precio: 2000,
            URL_imagen: 'kkslhdglksd86',
            stock: 23
        }],
        "Bebestibles": [{
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
        },
        {
            id:3,
            name: 'Aceite',
            precio: 2000,
            URL_imagen: 'kkslhdglksd86',
            stock: 23
        }]
    }

    public getAllProduct(){
        return this.productList;
    }
}
