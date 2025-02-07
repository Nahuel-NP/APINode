import { Router } from 'express';
import { DisplayController } from './display.controller';
import { DisplayService } from './display.service';

export class DisplayRoutes {
  static get routes(): Router {
    const router = Router();
    const displayService = new DisplayService();
    const displayController = new DisplayController(displayService);
    router.get('/', displayController.getDisplay);
    return router;
  }
}
