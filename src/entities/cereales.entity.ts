import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

@Entity('cereals', {schema: 'products'})
export class CerealEntity {

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
    name: 'name',
    nullable: false,
    comment: 'Nombre del cereal'
  })
  name: string;  

  @Column('varchar', {
    name: 'brand',
    nullable: false,
    comment: 'Marca del cereal'
  })
  brand: string;

  @Column('text', {
    name: 'ingredients', 
    comment: 'Ingredientes del cereal'
  })
  ingredients: string;

}