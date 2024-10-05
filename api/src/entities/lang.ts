import {
    BaseEntity,
    Column, Entity,
    ManyToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import "reflect-metadata";
import { Repo } from "./repo";

@Entity()
export class Lang extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @ManyToMany(() => Repo, repo => repo.languages)
    repos?: Repo[];
}