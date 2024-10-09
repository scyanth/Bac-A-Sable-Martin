import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn,
    OneToMany
} from "typeorm";
import "reflect-metadata";
import { Repo } from "./repo";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Status extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    label: string;

    @OneToMany(() => Repo, repo => repo.status)
    repo: Repo[];
}