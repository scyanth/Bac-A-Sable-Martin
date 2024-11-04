import { DataSource } from "typeorm";
import { Repo } from "../entities/repo";
import { Status } from "../entities/status";
import { Lang } from "../entities/lang";

export const dataSource = new DataSource({
  type: "postgres",
  host: POSTGRES_HOST, // Nom de l'image associé à Postgres --name dans la commande
  port: 5432,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [Repo, Status, Lang],
  synchronize: true,
});
