import express, { NextFunction, Response, Request } from 'express';
import tasksRoute from './routes/Tasks.route';

const cors = require("cors");

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PUT, PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors({
      origin: '*',
    }));
  }

  private routes(): void {
    this.app.get(
      '/',
      (_req: Request, res: Response, _next: NextFunction) => {
        res.status(200).json({ message: 'OK.' });
      },
    );

    this.app.use('/tasks', tasksRoute);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log('Linten on', PORT));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
