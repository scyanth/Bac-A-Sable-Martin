import express from "express";
import { Response } from "express";
import repoControllers from "./controllers/repos.controllers";
import statusControllers from "./controllers/status.controllers";
import langControllers from "./controllers/langs.controllers";

const router = express.Router();

router.get("/", (_ : any, res: Response) => {
    console.log(res);
    res.send("Hello world");
});

router.use("/repos", repoControllers);

router.use("/status", statusControllers);

router.use("/langs", langControllers);

export default router;