import { Router } from 'express';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const authService = new AuthService();
    const authController = new AuthController(authService);

    router.post('/login', authController.loginUser)
    router.post('/register', authController.registerUser)

    return router;
  }
}
