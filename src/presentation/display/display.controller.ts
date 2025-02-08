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

  public getAllDisplays = (req: Request, res: Response) => {
    const { user } = req.body;
    this.displayService
      .getAllDisplays(user.id)
      .then((displays) => res.json(displays))
      .catch((error) => this.handleError(error, res));
  };

  public getDisplayById = (req: Request, res: Response) => {
    const { id } = req.params;
    this.displayService
      .getDisplayById(+id)
      .then((display) => res.json(display))
      .catch((error) => this.handleError(error, res));
  };
}
