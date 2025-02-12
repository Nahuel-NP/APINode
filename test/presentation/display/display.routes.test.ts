import { DisplayRoutes } from '../../../src/presentation/display/display.routes';

describe('Test display routes', () => {
  test('should create a Router instance', () => {
    const router = DisplayRoutes.routes;
    expect(typeof router).toBe('function');
    expect(router.stack.length).toBe(5);
  });

  test('should configure / route with get method', () => {
    const routes = DisplayRoutes.routes;
    const route = routes.stack.filter((route) => route.route?.path === '/');
    expect((route.at(0)!.route as any).methods['get']).toBeTruthy();
    expect(route).toBeDefined();
  });

  test('should configure / route with post method', () => {
    const routes = DisplayRoutes.routes;
    const route = routes.stack.filter((route) => route.route?.path === '/');
    expect((route.at(1)!.route as any).methods['post']).toBeTruthy();
    expect(route).toBeDefined();
  });

  test('should configure /:id route with get method', () => {
    const routes = DisplayRoutes.routes;
    const route = routes.stack.filter((route) => route.route?.path === '/:id');
    expect((route.at(0)!.route as any).methods['get']).toBeTruthy();
    expect(route).toBeDefined();
  });
  test('should configure /:id route with delete method', () => {
    const routes = DisplayRoutes.routes;
    const route = routes.stack.filter((route) => route.route?.path === '/:id');
    expect((route.at(1)!.route as any).methods['delete']).toBeTruthy();
    expect(route).toBeDefined();
  });
  test('should configure /:id route with put method', () => {
    const routes = DisplayRoutes.routes;
    const route = routes.stack.filter((route) => route.route?.path === '/:id');
    expect((route.at(2)!.route as any).methods['put']).toBeTruthy();
    expect(route).toBeDefined();
  });

});
