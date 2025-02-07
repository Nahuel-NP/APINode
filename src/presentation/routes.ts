import { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { DisplayRoutes } from "./display/display.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/display', DisplayRoutes.routes);
    return router;
  }
}
