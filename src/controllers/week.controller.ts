import { NextFunction, Request, Response } from 'express';
import { CreateWeekDto } from '@dtos/week.dto';
import { Week } from '@interfaces/week.interface';
import WeekService from '@services/week.service';

class WeeksController {
  public weekService = new WeekService();

  public getWeeks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllWeeksData: Week[] = await this.weekService.findAllWeek();

      res.status(200).json({ data: findAllWeeksData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getWeekById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const WeekId = Number(req.params.id);
      const findOneWeekData: Week = await this.weekService.findWeekById(WeekId);

      res.status(200).json({ data: findOneWeekData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createWeek = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const WeekData: CreateWeekDto = req.body;
      const createWeekData: Week = await this.weekService.createWeek(WeekData);

      res.status(201).json({ data: createWeekData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateWeek = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const WeekId = Number(req.params.id);
      const WeekData: CreateWeekDto = req.body;
      const updateWeekData: Week = await this.weekService.updateWeek(WeekId, WeekData);

      res.status(200).json({ data: updateWeekData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteWeek = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const WeekId = Number(req.params.id);
      const deleteWeekData: Week = await this.weekService.deleteWeek(WeekId);

      res.status(200).json({ data: deleteWeekData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default WeeksController;
