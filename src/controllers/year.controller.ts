import { NextFunction, Request, Response } from 'express';
import { CreateYearDto } from '@dtos/year.dto';
import { Year } from '@interfaces/year.interface';
import YearService from '@services/year.service';

class yearsController {
  public yearService = new YearService();

  public getYears = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllYearsData: Year[] = await this.yearService.findAllYear();

      res.status(200).json({ data: findAllYearsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getYearById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const yearId = Number(req.params.id);
      const findOneYearData: Year = await this.yearService.findYearById(yearId);

      res.status(200).json({ data: findOneYearData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createYear = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const yearData: CreateyearDto = req.body;
      const createYearData: year = await this.yearService.createYear(yearData);

      res.status(201).json({ data: createYearData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateYear = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const yearId = Number(req.params.id);
      const yearData: CreateYearDto = req.body;
      const updateYearData: Year = await this.yearService.updateYear(yearId, yearData);

      res.status(200).json({ data: updateYearData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteYear = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const yearId = Number(req.params.id);
      const deleteYearData: Year = await this.yearService.deleteYear(yearId);

      res.status(200).json({ data: deleteYearData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default yearsController;
