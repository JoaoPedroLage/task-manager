import { Request, Response } from 'express';

export type TaskData = {
  id?: number;
  taskName?: string;
  taskDescription?: string;
  taskStatus?: string;
};

export interface ITask {
  tasks?: TaskData[],
  createdTask?: TaskData,
  code: number,
  message?: string,
}

export interface ITasksController {
  findAll(req: Request, res: Response): Promise<object>;
  create(req: Request, res: Response): Promise<object>;
  remove(req: Request, res: Response): Promise<object>;
  update(req: Request, res: Response): Promise<object>;
}

export interface ITasksService {
  findAll(status?: string): Promise<ITask>;
  create(dataReq?: object, token?: string): Promise<ITask>;
  remove(id: number): Promise<ITask>;
  update(id: number, taskName: string, taskStatus: string): Promise<ITask>;
}