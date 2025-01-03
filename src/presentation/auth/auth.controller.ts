
import { Request, Response } from "express";


export class AuthController {

  constructor(
    // service
  ) { }

  someMethod = (req: Request, res: Response) => {
    res.send('Hello World')
  }
}