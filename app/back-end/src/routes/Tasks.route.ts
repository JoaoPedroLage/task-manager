const cors = require("cors");

import { Request, Response, Router } from 'express';

import TasksController from '../controllers/Tasks.controller';
import TasksBoardService from '../services/Tasks.service';

const cors = require("cors");


const tasksController = new TasksController(new TasksBoardService());

const tasksBoardRouter = Router();

tasksBoardRouter.use(cors({
  origin: '*'
}));

tasksBoardRouter.get(
  '/',
  async (req: Request, res: Response) => {
    await tasksController.findAll(req, res);
  },
);

tasksBoardRouter.post(
  '/',
  async (req: Request, res: Response) => {
    await tasksController.create(req, res);
  },
);

tasksBoardRouter.patch(
  '/:id',
  async (req: Request, res: Response) => {
    await tasksController.update(req, res);
  },
);

tasksBoardRouter.delete(
  '/:id',
  async (req: Request, res: Response) => {
    await tasksController.remove(req, res);
  },
);

export default tasksBoardRouter;
