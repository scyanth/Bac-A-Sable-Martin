import { DataSource } from "typeorm";
import { Repo } from "../entities/repo";
import { Status } from "../entities/status";
import { Lang } from "../entities/lang";

// export const dataSource = new DataSource({
//     type: "sqlite",
//     database: "./src/db/repomanager.db",
//     entities : [Repo, Status, Lang],
//     synchronize: true
// });

export const dataSource = new DataSource({
  type: "postgres",
  host: "db", // Nom de l'image associé à Postgres --name dans la commande
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres",
  entities: [Repo, Status, Lang],
  synchronize: true,
});
