import { Router } from 'express';
import { DisplayController } from './display.controller';
import { DisplayService } from './display.service';
import { AuthMiddlaware } from '../middlewares/auth.middleware';

export class DisplayRoutes {
  static get routes(): Router {
    const router = Router();
    const displayService = new DisplayService();
    const displayController = new DisplayController(displayService);
    router.get('/',[AuthMiddlaware.validateJWT], displayController.getAllDisplays);
    router.get('/:id',[AuthMiddlaware.validateJWT], displayController.getDisplayById);
    router.post('/',[AuthMiddlaware.validateJWT], displayController.createNewDisplay);
    router.delete('/:id', [AuthMiddlaware.validateJWT], displayController.deleteDisplay)
    return router;
  }
}
