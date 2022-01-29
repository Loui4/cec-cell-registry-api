import { Router } from 'express';
import BibleClassMembershipsController from '@controllers/bible-class-membership.controller';
import { CreateBibleClassMembershipDto } from '@dtos/bible-class-membership.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class BibleClassMembershipRoute implements Routes {
  public path = '/bible-class-memberships';
  public router = Router();
  public bibleClassMembershipsController = new BibleClassMembershipsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.bibleClassMembershipsController.getBibleClassMemberships);
    this.router.get(`${this.path}/:id(\\d+)`, this.bibleClassMembershipsController.getBibleClassMembershipById);
    this.router.post(`${this.path}`, validationMiddleware(CreateBibleClassMembershipDto, 'body'), this.bibleClassMembershipsController.createBibleClassMembership);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateBibleClassMembershipDto, 'body', true), this.bibleClassMembershipsController.updateBibleClassMembership);
    this.router.delete(`${this.path}/:id(\\d+)`, this.bibleClassMembershipsController.deleteBibleClassMembership);
  }
}

export default BibleClassMembershipRoute;
