import express from 'express';
import { resolve } from 'path';
import routes from './routes';
import logs from './app/middlewares/logs';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    this.server.use(logs);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
