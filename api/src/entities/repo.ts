import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { IsString, IsBoolean } from "class-validator";
import "reflect-metadata";
import { Field, ID, ObjectType } from "type-graphql";
import { Status } from "./status";
import { Lang } from "./lang";

@ObjectType()
@Entity()
export class Repo extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn()
  @IsString()
  id: string;

  @Field()
  @Column()
  @IsString()
  name: string;

  @Field()
  @Column()
  @IsString()
  url: string;

  @Field()
  @Column({ default: false }) // { default: () => false}
  @IsBoolean()
  isFavorite: boolean;

  @Field(() => Status)
  @ManyToOne(() => Status, (status) => status.id)
  @JoinColumn()
  status: Status;

  @Field(() => [Lang])
  @ManyToMany(() => Lang, (lang) => lang.id)
  @JoinTable()
  languages: Lang[];
}

@ObjectType()
export class RepoMini extends BaseEntity {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  isFavorite: boolean;
}
