import { Router } from 'express';
import HelloController from './controllers/HelloController';

const routes = Router();

routes.get('/', HelloController.welcome);

export default routes;
