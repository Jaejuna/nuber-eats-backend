import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()   //GraphQL schema
@Entity()       //TypeORM decorator to send this schemas to DB
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((is) => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field((is) => Boolean, { defaultValue: true })
  @Column({default:false})
  @IsOptional()
  @IsBoolean()
  isVegan?: boolean;

  @Field((is) => String, { nullable: true })
  @Column()
  @IsString()
  address: string;
}
