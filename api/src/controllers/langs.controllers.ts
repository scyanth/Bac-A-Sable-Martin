import { Lang } from "../entities/lang";
import express, { Response, Request } from "express";

const langControllers = express.Router();

langControllers.get('/', async (_ : any, res: Response) => {
    try {
        const langs = await Lang.find();
        res.status(200).json(langs);
    } catch (error) {
        res.sendStatus(500);
    }
});

langControllers.post('/', async (req: Request, res: Response) => {
    try {
        const lang = new Lang();
        lang.id = req.body.id;
        lang.label = req.body.label;

        await lang.save();
        res.status(201).json(lang);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default langControllers;