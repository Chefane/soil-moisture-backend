
import { Router } from 'express';
import userController from '../controllers/user.controllers';

const routes = Router();

routes.get("/users", userController.select);
routes.get("/users/:id", userController.select);
routes.post("/users", userController.create);

routes.post("/session", userController.login);


export default routes;
