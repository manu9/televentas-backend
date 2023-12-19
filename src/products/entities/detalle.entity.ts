import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Venta } from "./venta.entity";


@Entity()
export class Detalle{

    @PrimaryGeneratedColumn('uuid')
    id_detalle: string;

    @Column({nullable: false})
    cantidad: number;

    @Column({nullable: false})
    total: number;


    @Column({nullable: false})
    id_product: string
}