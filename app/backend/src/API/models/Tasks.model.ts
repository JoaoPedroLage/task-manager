import { Model, INTEGER, TEXT, DATE } from 'sequelize';
import db from '.';

class Tasks extends Model {
  public id!: number;

  public taskName!: string;

  public taskDescription!: string;

  public taskStatus!: string;
}

Tasks.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  taskName: {
    type: TEXT,
    allowNull: false,
  },
  taskDescription: {
    type: TEXT,
    allowNull: false,
  },
  taskStatus: {
    type: TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
  },
  updatedAt: {
    type: DATE,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Tasks',
  timestamps: true,
});

export default Tasks;
