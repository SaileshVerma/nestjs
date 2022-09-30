import { Sequelize } from 'sequelize';
import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { PostType } from 'src/constant';
import { Eser } from './eser';

@Table
export class Post extends Model {
  
   @ForeignKey(()=>Eser)
   @Column
   uid:number

   @BelongsTo(()=>Eser)
   eser:Eser
   
  @Column
  postName: string;



 
}