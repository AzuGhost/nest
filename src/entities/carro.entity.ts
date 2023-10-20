import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

@Entity('cars', {schema: 'inventory'})
export class CarEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ 
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true
  })
  deletedAt: Date;

  @Column('varchar', {
    name: 'model',
    nullable: false,
    comment: 'Modelo del auto'
  })
  model: string;

  @Column('numeric', {
    name: 'horse_power', 
    nullable: false,
    comment: 'Caballos de fuerza'
  })
  horsePower: number;

  @Column('int', {
    name: 'doors',
    nullable: false,
    comment: 'Número de puertas'
  })
  doors: number;

}