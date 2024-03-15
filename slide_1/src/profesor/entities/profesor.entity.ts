import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Profesor {
    @PrimaryGeneratedColumn()
    private idProfesor: number

    @Column({ type: 'varchar' })
    private nombre: string

    @Column({ type: 'varchar' })
    private apellido: string

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido
    }

    getIdProfesor(): number { return this.idProfesor }
    getNombreProfesor(): string { return this.nombre }
    getApellidoProfesor(): string { return this.apellido }
    setNombreProfesor(nombre: string): string { return this.nombre = nombre }
    setApellidoProfesor(apellido: string): string { return this.apellido = apellido }
}
