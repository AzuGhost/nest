import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('cars')
export class CarEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {name: 'model', nullable: false})
  model: string;

  @Column('numeric', {name: 'horsePower', nullable: false})
  horsePower: number;

  @Column('int', {name: 'doors', nullable: false})
  doors: number;

}