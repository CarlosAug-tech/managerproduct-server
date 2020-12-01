import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import ProductController from './app/controllers/ProductController';
import ProductProviderController from './app/controllers/ProductProviderController';
import FileUserController from './app/controllers/FileUserController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);
routes.get('/products/:id', ProductController.show);

routes.get('/products', ProductProviderController.index);

routes.post('/files-user', upload.single('file'), FileUserController.store);

export default routes;
