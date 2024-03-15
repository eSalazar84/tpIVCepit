import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Escuela {
    @PrimaryGeneratedColumn()
    private idEscuela: number

    @Column({ type: 'varchar' })
    private nombre: string

    @Column({ type: 'varchar' })
    private domicilio: string

    constructor(nombre: string, domicilio: string) {
        this.nombre = nombre;
        this.domicilio = domicilio
    }

    getIdEscuela(): number { return this.idEscuela }
    getNombreEscuela(): string { return this.nombre }
    getDomicilioEscuela(): string { return this.domicilio }
    setNombreEscuela(nombre: string): string { return this.nombre = nombre }
    setDomicilioEscuela(domicilio: string): string { return this.domicilio = domicilio }

}
