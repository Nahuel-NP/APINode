import { Router } from 'express';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmailService } from '../email/email.service';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const emailService = new EmailService();
    const authService = new AuthService(emailService);
    const authController = new AuthController(authService);

    router.post('/login', authController.loginUser)
    router.post('/register', authController.registerUser)
    router.get('/validate-email', authController.validateEmail)

    return router;
  }
}
