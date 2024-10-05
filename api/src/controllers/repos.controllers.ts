import { Repo } from "../entities/repo";
import { Status } from "../entities/status";
import { Lang } from "../entities/lang";
import { In } from "typeorm";
import express, { Response, Request } from "express";

const repoControllers = express.Router();

repoControllers.get('/', async (_ : any, res: Response) => {
    try {
        const repos = await Repo.find({relations: {status: true, languages: true}});
        res.status(200).json(repos);
    } catch (error) {
        res.sendStatus(500);
    }
});

repoControllers.get("/:id", async (req: Request, res: Response) => {
    try {
      const repos = await Repo.find({
        where: {
          id: req.params.id,
        },
        relations: {
          status: true,
          languages: true,
        },
      });
      res.status(200).json(repos);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

repoControllers.post('/', async (req: Request, res: Response) => {
    try {
        const repo = new Repo();
        repo.id = req.body.id;
        repo.name = req.body.name;
        repo.url = req.body.url;
        repo.status = await Status.findOneOrFail({where: {id : req.body.status}});
        const langs = await Lang.find({where: {id: In (req.body.langs.map((l: number) => l))}});
        repo.languages = langs;
    } catch (error) {
        res.sendStatus(500);
    }
});

export default repoControllers;