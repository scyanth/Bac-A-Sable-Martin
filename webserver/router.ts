import express from "express";
import { Request, Response } from "express";
import repoControllers from "./repos/repos.controllers";
import langs from "./data/langs.json";

const router = express.Router();

router.get("/", (_ : any, res: Response) => {
    console.log(res);
    res.send("Hello world");
});

router.use("/repos", repoControllers);

router.post("/lang", (req : Request, res: Response) => {
    const { id, label } = req.body;
    langs.push(req.body);
    console.log(`Id : ${id}, Label : ${label}`);
    res.status(200).send(`Id : ${id}, Label : ${label}`);
    //res.sendStatus(200);
});

// const addLang = async (req : Request, res: Response, next: any) => {
//     try {
//         const body = req.body;
//         console.log(body);
//         res.sendStatus(200);
//     } catch (err){
//         next(err);
//     }
// }

// router.post("/languages", addLang);

// router.post("/lang", (req : Request, res: Response) => {
//     const body = req.body;
//     console.log(body);
//     res.sendStatus(200);
// });

export default router;