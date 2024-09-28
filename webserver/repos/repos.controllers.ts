import express, { Response, Request, NextFunction } from "express";
import Joi from "joi";
import repos from "../data/repos.json";
import { request } from "http";

type Repo = {
    id: string;
    name: string;
    url: string;
    isPrivate: number;
};

const repoControllers = express.Router();

repoControllers.get('/', (req: Request, res: Response) => {
    const { status } = req.query;
    const result = status !== undefined ? repos.filter((repo: Repo) => repo.isPrivate === +status) : repos;
    res.status(200).json(result)
});

repoControllers.get("/:id", (req: Request, res: Response) => {
    const repo = repos.find(rep => rep.id === req.params.id);

    if (repo){
        res.status(200).json(repo);
    }else{
        res.sendStatus(404);
    }
});

const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    url: Joi.string().required(),
    isPrivate: Joi.number().min(1).max(2).required()
});

const validateRepo = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error == null) {
      next();
    } else {
      res.status(422).json(error);
    }
};

repoControllers.post('/', validateRepo, (req: Request, res: Response) => {
    repos.push(req.body);
    res.status(201).json(req.body);
});

repoControllers.delete('/:isPrivate', (req: Request, res: Response) => {
    const repos_filtres = repos.filter((repo : Repo) => repo.isPrivate !== +req.params.isPrivate);
    //res.status(204).json(repos_filtres);
    console.log(repos_filtres);
    res.sendStatus(204);
});

repoControllers.put('/', (req : Request, res : Response) => {

}

export default repoControllers;