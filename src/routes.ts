import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import db from './database/connection';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

routes.get('/teste', async function () {
  const query =
    "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name";

  const a = await db.schema.raw(query);
  console.log(a);
  
  return response.send();
});

export default routes;