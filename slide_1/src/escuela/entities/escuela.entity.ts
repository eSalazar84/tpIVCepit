import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Clase } from "src/clase/entities/clase.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Escuela {
    @PrimaryGeneratedColumn()
    private idEscuela: number

    @Column({ type: 'varchar' })
    private nombre: string

    @Column({ type: 'varchar' })
    private domicilio: string

    @ManyToOne(() => Ciudad, ciudad => ciudad.getIdCiudad)
    public ciudad: Ciudad

    @OneToMany(() => Clase, clase => clase.getIdClase)
    public clase: Clase[]

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
