import { Router } from 'express';
import YearsController from '@controllers/year.controller';
import { CreateYearDto } from '@dtos/year.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class YearRoute implements Routes {
  public path = '/years';
  public router = Router();
  public yearsController = new YearsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.yearsController.getYears);
    this.router.get(`${this.path}/:id(\\d+)`, this.yearsController.getYearById);
    this.router.post(`${this.path}`, validationMiddleware(CreateYearDto, 'body'), this.yearsController.createYear);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateYearDto, 'body', true), this.yearsController.updateYear);
    this.router.delete(`${this.path}/:id(\\d+)`, this.yearsController.deleteYear);
  }
}

export default YearRoute;
