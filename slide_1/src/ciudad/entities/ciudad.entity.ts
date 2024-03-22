import { Escuela } from "src/escuela/entities/escuela.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ciudad {

    @PrimaryGeneratedColumn()
    private idCiudad: number

    @Column({ unique: true })
    private nombre: string

    @OneToMany(() => Escuela, escuela => escuela.getIdEscuela)
    public escuela: Escuela[];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public getIdCiudad(): number { return this.idCiudad }
    public getNombreCiudad(): string { return this.nombre }

    public setIdCiudad(idCiudad: number): number { return this.idCiudad = idCiudad }
    public setNombreCiudad(nombre: string): string { return this.nombre = nombre }
}
