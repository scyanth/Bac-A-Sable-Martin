import { dataSource } from "./db/client";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import RepoResolver from "./resolvers/repo.resolver";

import * as dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;

(async () => {
    await dataSource.initialize();

    const schema = await buildSchema({
        resolvers : [RepoResolver],
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await startStandaloneServer(server, {
    listen: { port: PORT as undefined | number },
    });

    console.log(`🚀  Server ready at: ${url}`);
})();