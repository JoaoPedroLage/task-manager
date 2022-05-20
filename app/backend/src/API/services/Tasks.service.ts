import { TaskData, ITasksService } from '../interfaces/tasks';
import TasksModel from '../models/Tasks.model';

export default class MatchService implements ITasksService {
  private _tasksModel = TasksModel;

  public async findAll(status?: string | any) {
    let tasksFound;

    if (status === 'pendente') {
      tasksFound = await this._tasksModel.findAll({
        where: { status: "pendente" }});
    } else if (status === 'em andamento') {
      tasksFound = await this._tasksModel.findAll({
        where: { status: "em andamento" }});
    } else if (status === 'pronto') {
      tasksFound = await this._tasksModel.findAll({
        where: { status: "pronto" }});
    } else if (!status) {
      tasksFound = await this._tasksModel.findAll();
    }

    if (!tasksFound) return { code: 401, message: 'Tasks not found' };

    return { code: 200, tasks: tasksFound };
  }

  public async create(dataReq: TaskData) {
    const { taskName, taskDescription, taskStatus } = dataReq;

    const createdTask = await this._tasksModel.create({ taskName, taskDescription, taskStatus });

    return { code: 201, createdTask };
  }

  public async remove(id: number) {
    const taskFound = await this._tasksModel.findOne({ where: { id } });

    if (!taskFound) {
      return { code: 404, message: 'There is no task with such id!' };
    }

    await this._tasksModel.destroy(({ where: { id } }));

    return { code: 200, message: 'Task successfully deleted' };
  }

  public async update(id: number, taskName: string, taskStatus: string) {
    const foundTask = await this._tasksModel.findByPk(id);

    if (!foundTask) return { code: 401, message: 'There is no task with such id!' };

    await this._tasksModel.update(
      { taskName, taskStatus },
      { where: { id } },
    );

    return { code: 200, message: 'Task successfully updated' };
  }
}
