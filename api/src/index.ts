import "reflect-metadata";
import { dataSource } from "./db/client";
import express from "express";
import router from "./router";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL as string
    })
);

app.use(express.json());

app.use("/api", router);

app.listen(PORT, async () => {
    await dataSource.initialize();
    console.log('Server is listening on http://localhost:4601');
});