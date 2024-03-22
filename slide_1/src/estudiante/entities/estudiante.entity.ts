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

    public getIdEscuela(): number { return this.idEstudiante }
    public getNombreEstudiante(): string { return this.nombre }
    public getApellidoEstudiante(): string { return this.apellido }
    public getFecha_NacimientoEstudiante(): Date { return this.fecha_nacimiento }

    public setNombreEstudiante(nombre: string): string { return this.nombre = nombre }
    public setApellidoEstudiante(apellido: string): string { return this.apellido = apellido }
    public setFecha_NacimientoEstudiante(fecha_nacimiento: Date): Date { return this.fecha_nacimiento = fecha_nacimiento }
}
