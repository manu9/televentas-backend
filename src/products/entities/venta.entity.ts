import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Venta{

    @PrimaryGeneratedColumn('uuid')
    id_venta: string;

    @Column({nullable: false})
    id_compra: string;

    @Column({nullable: false})
    monto: number;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    estado: string;
}