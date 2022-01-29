import { Router } from 'express';
import MembersController from '@controllers/member.controller';
import { CreateMemberDto } from '@dtos/member.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class MemberRoute implements Routes {
  public path = '/members';
  public router = Router();
  public membersController = new MembersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.membersController.getMembers);
    this.router.get(`${this.path}/:id(\\d+)`, this.membersController.getMemberById);
    this.router.post(`${this.path}`, validationMiddleware(CreateMemberDto, 'body'), this.membersController.createMember);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateMemberDto, 'body', true), this.membersController.updateMember);
    this.router.delete(`${this.path}/:id(\\d+)`, this.membersController.deleteMember);
  }
}

export default MemberRoute;
