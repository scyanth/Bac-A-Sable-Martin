import { DataSource } from "typeorm";
import { Repo } from "../entities/repo";
import { Status } from "../entities/status";
import { Lang } from "../entities/lang";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./src/db/repomanager.db",
    entities : [Repo, Status, Lang],
    synchronize: true
});