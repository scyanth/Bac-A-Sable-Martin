import express from "express";
import { Response } from "express";
import repoControllers from "./repos/repos.controllers";

const router = express.Router();

router.get("/", (_ : any, res: Response) => {
    console.log(res);
    res.send("Hello world");
});

router.use("/repos", repoControllers);

export default router;