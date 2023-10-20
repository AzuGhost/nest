import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('products',{schema:'ventas'})

export class ProductEntity
{
@PrimaryGeneratedColumn('uuid')
id :string;
@CreateDateColumn({
    name:'create_at',
    type:'timestamp',
    default:() => 'CURRENT_TIMESTAMP'
})
createAT:Date;

@UpdateDateColumn({
    name:'update_at',
    type:'timestamp',
    default:() => 'CURRENT_TIMESTAMP'
})
updateAT:Date;

@DeleteDateColumn({
    name:'delete_at',
    type:'timestamp',
    nullable: true,
})
deleteAT:Date;

@Column('varchar',{
    name:'title',
    nullable:false,
    comment:'nombre del producto'   
})
title:string;
@Column('number',{
    name:'price',
    nullable:false,
    comment:'precio del producto'   
})
price:number;

@Column('varchar',{
    name:'description',
    nullable:true,
    comment:'descipcion del producto'   
})
description:string;



}


