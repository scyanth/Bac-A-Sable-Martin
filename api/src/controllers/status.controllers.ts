import { Status } from "../entities/status";
import express, { Response, Request } from "express";

const statusControllers = express.Router();

statusControllers.post('/', async (req: Request, res: Response) => {
    try {
        const status = new Status();
        status.id = req.body.id;
        status.label = req.body.label;

        await status.save();
        res.status(201).json(status);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default statusControllers;