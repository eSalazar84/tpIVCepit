import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CreateEscuelaDto } from "../dto/create-escuela.dto";

@Entity()
export class Escuela {
    @PrimaryGeneratedColumn()
    private idEscuela: number

    @Column({ type: 'varchar' })
     nombre: string

    @Column({ type: 'varchar' })
     domicilio: string

    constructor(nombre: string, domicilio: string) {
        this.nombre = nombre;
        this.domicilio = domicilio
    }

    public getIdEscuela(): number { return this.idEscuela }
    public getNombreEscuela(): string { return this.nombre }
    public getDomicilioEscuela(): string { return this.domicilio }

    public setIdEscuela(idEscuela: number): number { return this.idEscuela = idEscuela }
    public setNombreEscuela(nombre: string): string { return this.nombre = nombre }
    public setDomicilioEscuela(domicilio: string): string { return this.domicilio = domicilio }



}
