import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';

const mockProductService = {}

describe('ProductsService', () => {
  let productService: ProductsService;
  let productsController: ProductsController;  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService,
      {
        provide: getRepositoryToken(Product),
        useValue: mockProductService,
      }
      ],
    }).compile();

    productService = module.get<ProductsService>(ProductsService);
    productsController = new ProductsController(productService);
  });

  it('Servicio de producto debe estar definido', () => {
    expect(productService).toBeDefined();
  });
});
