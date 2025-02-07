import { Request, Response } from 'express';
import { CustomError } from '../../domain/errors/custom.error';
import { DisplayService } from './display.service';

export class DisplayController {
  constructor(public readonly displayService: DisplayService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    } else {
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  public getDisplay = (req: Request, res: Response) => {
    const { user_id } = req.body;
    this.displayService
      .getAllDisplay(user_id)
      .then((displays) => res.json(displays))
      .catch((error) => this.handleError(error, res));
  };
}
