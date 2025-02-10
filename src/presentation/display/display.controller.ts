import { Request, Response } from 'express';
import { CustomError } from '../../domain/errors/custom.error';
import { DisplayService } from './display.service';
import { CreateDisplayDto } from '../../domain/dtos/display/create-display.dto';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';

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
    const { page = 1, limit = 10 } = req.query;
    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json({ error });
    this.displayService
      .getAllDisplays(user.id, paginationDto!)
      .then((displays) => res.json(displays))
      .catch((error) => this.handleError(error, res));
  };

  public getDisplayById = (req: Request, res: Response) => {
    const { id } = req.params;
    const { user } = req.body;
    this.displayService
      .getDisplayById(+id, user.id)
      .then((display) => res.json(display))
      .catch((error) => this.handleError(error, res));
  };

  public createNewDisplay = (req: Request, res: Response) => {
    const { user, ...body } = req.body;

    const [error, createDisplayDto] = CreateDisplayDto.create(body);

    if (error) return res.status(400).json({ error });

    this.displayService
      .createDisplay(createDisplayDto!, user.id)
      .then((display) => res.json(display))
      .catch((error) => this.handleError(error, res));
  };

  public deleteDisplay = (req: Request, res: Response) => {
    const { id } = req.params;
    const { user } = req.body;
    this.displayService
      .deleteDisplay(+id, user.id)
      .then((display) => res.json(display))
      .catch((error) => this.handleError(error, res));
  };
}
