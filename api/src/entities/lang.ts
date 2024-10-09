import {
    BaseEntity,
    Column, Entity,
    ManyToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import "reflect-metadata";
import { Repo } from "./repo";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Lang extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    label: string;

    @ManyToMany(() => Repo, repo => repo.languages)
    repos?: Repo[];
}