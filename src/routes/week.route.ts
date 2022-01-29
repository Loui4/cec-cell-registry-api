import { Router } from 'express';
import WeeksController from '@controllers/week.controller';
import { CreateWeekDto } from '@dtos/week.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class WeekRoute implements Routes {
  public path = '/weeks';
  public router = Router();
  public weeksController = new WeeksController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.weeksController.getWeeks);
    this.router.get(`${this.path}/:id(\\d+)`, this.weeksController.getWeekById);
    this.router.post(`${this.path}`, validationMiddleware(CreateWeekDto, 'body'), this.weeksController.createWeek);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateWeekDto, 'body', true), this.weeksController.updateWeek);
    this.router.delete(`${this.path}/:id(\\d+)`, this.weeksController.deleteWeek);
  }
}

export default WeekRoute;
