import {
    BaseEntity,
    Column, Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn
} from "typeorm";
import { IsString } from "class-validator";
import "reflect-metadata";
import { Status } from "./status";
import { Lang } from "./lang";

@Entity()
export class Repo extends BaseEntity {

    @PrimaryColumn()
    @IsString()
    id: string;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    url: string;

    @ManyToOne(() => Status, status => status.id)
    @JoinColumn()
    status: Status;

    @ManyToMany(() => Lang, lang => lang.id)
    @JoinTable()
    languages: Lang[];
}