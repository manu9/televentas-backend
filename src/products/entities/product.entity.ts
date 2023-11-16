import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    categoria: string

    @Column({unique: true})
    nombre: string

    @Column({nullable: false})
    precio: number

    @Column({nullable: false})
    stock: number

    @Column({nullable: false})
    URL_Image: string
}
