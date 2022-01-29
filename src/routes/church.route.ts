import { Router } from 'express';
import ChurchController from '@controllers/church.controller';
import { CreateChurchDto } from '@dtos/church.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class ChurchRoute implements Routes {
  public path = '/churches';
  public router = Router();
  public churchController = new ChurchController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.churchController.getChurches);
    this.router.get(`${this.path}/:id(\\d+)`, this.churchController.getChurchById);
    this.router.post(`${this.path}`, validationMiddleware(CreateChurchDto, 'body'), this.churchController.createChurch);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateChurchDto, 'body', true), this.churchController.updateChurch);
    this.router.delete(`${this.path}/:id(\\d+)`, this.churchController.deleteChurch);
  }
}

export default ChurchRoute;
