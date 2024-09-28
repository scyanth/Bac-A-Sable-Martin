import express from "express";
// import express, { Request, Response } from "express";
import router from "./router";
const app = express();
app.use(express.json());

// redirige
app.use("/api", router);

// const handler = (_ : any, res : Response) => {
//     res.send("Welcome to Express");
// };

// app.get("/", handler);

app.listen(4601, () => {
    console.log('Server is listening on http://localhost:4601');
});