import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn()
    private idEstudiante: number

    @Column({ type: 'varchar' })
    private nombre: string

    @Column({ type: 'varchar' })
    private apellido: string

    @Column({ type: 'datetime' })
    private fecha_nacimiento: Date

    constructor(nombre: string, apellido: string, fecha_nacimiento: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento
    }

    getIdEscuela(): number { return this.idEstudiante }
    getNombreEstudiante(): string { return this.nombre }
    getApellidoEstudiante(): string { return this.apellido }
    getFecha_NacimientoEstudiante(): Date { return this.fecha_nacimiento }
    settNombreEstudiante(nombre: string): string { return this.nombre = nombre }
    setApellidoEstudiante(apellido: string): string { return this.apellido = apellido }
    setFecha_NacimientoEstudiante(fecha_nacimiento: Date): Date { return this.fecha_nacimiento = fecha_nacimiento }
}
