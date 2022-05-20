import { Request, Response } from 'express';
import { ITasksController, ITasksService } from '../interfaces/tasks';

export default class TasksController implements ITasksController {
  constructor(private _tasksService: ITasksService) {}

  public findAll = async (req: Request, res: Response) => {
    const { filter } = req.body;
    let foundTasks;

    if (filter === 'status' || filter === 'dataDeCriacao' || filter === 'ordemAlfa') {
      foundTasks = await this._tasksService.findAll(filter);
    } else foundTasks = await this._tasksService.findAll();

    const { code, message, tasks } = foundTasks;

    if (message) return res.status(code).json({ message });

    return res.status(code).json(tasks);
  };

  public create = async (req: Request, res: Response): Promise<object> => {
    const task = await this._tasksService.create(req.body);

    const { code, createdTask } = task;

    return res.status(code).json(createdTask);
  };

  public remove = async (req: Request, res: Response): Promise<object> => {
    const { id } = req.params;

    const task = await this._tasksService.remove(Number(id));

    const { code, message } = task;

    if (message) return res.status(code).json({ message });

    return res.status(code).json(message);
  };

  public update = async (req: Request, res: Response): Promise<object> => {
    const { id } = req.params;
    const { taskName, taskStatus } = req.body;

    const updatedTask = await this._tasksService.update(Number(id), taskName, taskStatus);

    const { code, message } = updatedTask;

    if (message) return res.status(code).json(message);

    return res.status(code).json(message);
  };
}
