import express from "express";
// import express, { Response } from "express";
import router from "./router";
const app = express();

// redirige
app.use("/api", router);

// const handler = (_ : any, res : Response) => {
//     res.send("Welcome to Express");
// };

// app.get("/", handler);

app.listen(4601, () => {
    console.log('Server is listening on http://localhost:4601');
});