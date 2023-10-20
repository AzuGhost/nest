import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";  

@Entity('cereals')
export class CerealEntity {

  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column('varchar', {name: 'name', nullable: false})
  name: string;
  
  @Column('varchar', {name: 'brand', nullable: false})
  brand: string;

  @Column('text', {name: 'ingredients'})
  ingredients: string;

}