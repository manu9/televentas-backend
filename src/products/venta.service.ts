import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { VentaDto } from './dto/venta.dto';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VentaService {

    constructor(
        @InjectRepository(Venta)
        private readonly ventaRepository: Repository<Venta>
      ){}

    async create(ventaDto: VentaDto) {
        try{
            const venta = this.ventaRepository.create(ventaDto);
            await this.ventaRepository.save(venta);

            return venta;
        }catch(error){
            console.log(error)
            throw new InternalServerErrorException('Ayuda')
        }
    }    
    
}