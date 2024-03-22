import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ciudad {

    @PrimaryGeneratedColumn()
    private idCiudad: number

    @Column({ unique: true })
    private nombre: string

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public getIdCiudad(): number { return this.idCiudad }
    public getNombreCiudad(): string { return this.nombre }

    public setIdCiudad(idCiudad: number): number { return this.idCiudad = idCiudad }
    public setNombreCiudad(nombre: string): string { return this.nombre = nombre }
}
