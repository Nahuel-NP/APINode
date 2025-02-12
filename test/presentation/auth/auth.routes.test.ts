import { AuthController } from "../../../src/presentation/auth/auth.controller";
import { AuthRoutes } from "../../../src/presentation/auth/auth.routes";
import { AuthService } from "../../../src/presentation/auth/auth.service";
import { EmailService } from "../../../src/presentation/email/email.service";



describe('Test auth routes', () => {
  test('should create a Router instance', () => {
    const router = AuthRoutes.routes;
    expect(typeof router).toBe('function');
    expect(router.stack.length).toBe(3);
  });

  test('should configure /login route', () => {
    const routes = AuthRoutes.routes;
    const route = routes.stack.find(route => route.route?.path === '/login');
    expect(route).toBeDefined();
  });

  test('should configure /register route', () => {
    const routes = AuthRoutes.routes;
    const route = routes.stack.find(route => route.route?.path === '/register');
    expect(route).toBeDefined();
  });

  test('should configure /validate-email route', () => {
    const routes = AuthRoutes.routes;
    const route = routes.stack.find(route => route.route?.path === '/validate-email');
    expect(route).toBeDefined();
    
  });

  test('should instantiate dependencies correctly', () => {
    const router = AuthRoutes.routes;
    expect(typeof router).toBe('function');
    expect(EmailService).toBeDefined();
    expect(AuthService).toBeDefined();
    expect(AuthController).toBeDefined();
  });
});
