import { Router } from "express";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    return router.get("/", (req, res) => {
      res.send("Hello World");
    });
  }
}
