import { Escuela } from "src/escuela/entities/escuela.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clase {
    @PrimaryGeneratedColumn()
    private idClase: number

    @Column({ type: 'varchar' })
    private nombre: string

    @ManyToOne(() => Profesor, profesor => profesor.getIdProfesor)
    public profesor: Profesor

    @ManyToOne(() => Escuela, escuela => escuela.getIdEscuela)
    public escuela: Escuela

    constructor(idClase: number, nombre: string) {
        this.idClase = idClase;
        this.nombre = nombre
    }

    public getIdClase(): number { return this.idClase }
    public getNombre(): string { return this.nombre }

    public setIdClase(idClase: number): number { return this.idClase = idClase }
    public setNombre(nombre: string): string { return this.nombre = nombre }
}
