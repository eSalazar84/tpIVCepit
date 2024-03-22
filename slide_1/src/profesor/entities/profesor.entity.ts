import { Clase } from "src/clase/entities/clase.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Profesor {
    @PrimaryGeneratedColumn()
    private idProfesor: number

    @Column({ type: 'varchar' })
    private nombre: string

    @Column({ type: 'varchar' })
    private apellido: string

    @OneToMany(() => Clase, clase => clase.getIdClase)
    public clase: Clase[]

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido
    }

    public getIdProfesor(): number { return this.idProfesor }
    public getNombreProfesor(): string { return this.nombre }
    public getApellidoProfesor(): string { return this.apellido }

    public setIdProfesor(idProfesor: number): number { return this.idProfesor = idProfesor }
    public setNombreProfesor(nombre: string): string { return this.nombre = nombre }
    public setApellidoProfesor(apellido: string): string { return this.apellido = apellido }
}
