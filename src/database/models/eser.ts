import { Sequelize } from 'sequelize';
import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { PostType } from 'src/constant';
import { Post } from './post';

@Table
export class Eser extends Model {
  

  @PrimaryKey
  @AutoIncrement
  @Column
  uid:number

  @Column
  firstName: string;

  @Column
  lastName: PostType;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(()=>Post)
  posts:Post[]

}