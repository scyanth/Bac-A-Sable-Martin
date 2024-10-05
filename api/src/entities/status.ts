import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn,
    OneToMany
} from "typeorm";
import "reflect-metadata";
import { Repo } from "./repo";

@Entity()
export class Status extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @OneToMany(() => Repo, repo => repo.status)
    repo: Repo[];
}