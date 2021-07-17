import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(type => Number)
  id: number;


  @Field((is) => String)
  @Column()
  name: string;

  @Field((is) => Boolean, { nullable: true })
  @Column()
  isVegan?: boolean;
  
  @Field((is) => String, { nullable: true })
  @Column()
  address: string;
  
  @Field((is) => String, { nullable: true })
  @Column()
  ownerName: string;

  @Field(type => String)
  @Column()
  categoryName: string;
}
