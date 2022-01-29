import { Router } from 'express';
import BibleClassController from '@controllers/bible-class.controller';
import { CreateBibleClassDto } from '@dtos/bible-class.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class BibleClassRoute implements Routes {
  public path = '/bible-Classes';
  public router = Router();
  public bibleClassController = new BibleClassController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.bibleClassController.getBibleClasss);
    this.router.get(`${this.path}/:id(\\d+)`, this.bibleClassController.getBibleClassById);
    this.router.post(`${this.path}`, validationMiddleware(CreateBibleClassDto, 'body'), this.bibleClassController.createBibleClass);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateBibleClassDto, 'body', true), this.bibleClassController.updateBibleClass);
    this.router.delete(`${this.path}/:id(\\d+)`, this.bibleClassController.deleteBibleClass);
  }
}

export default BibleClassRoute;
