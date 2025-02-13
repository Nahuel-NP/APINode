import express, { Router } from "express";
import { Server as ServerI } from "http";
import cors from 'cors'
interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;
  private readonly public_path: string;
  private serverListener?: ServerI;

  constructor(options: Options) {
    this.port = options.port;
    this.routes = options.routes;
    this.public_path = options.public_path || "public";
  }

  start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors())

    this.app.use(express.static(this.public_path));
    this.app.use(this.routes);

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  close() {
    this.serverListener?.close();
  }
}
