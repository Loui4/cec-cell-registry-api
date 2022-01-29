import { Router } from 'express';
import CellAttendancesController from '@controllers/cell-attendance.controller';
import { CreateCellAttendanceDto } from '@dtos/cell-attendance.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class CellAttendanceRoute implements Routes {
  public path = '/cell-attendances';
  public router = Router();
  public cellAttendancesController = new CellAttendancesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.cellAttendancesController.getCellAttendances);
    this.router.get(`${this.path}/:id(\\d+)`, this.cellAttendancesController.getCellAttendanceById);
    this.router.post(`${this.path}`, validationMiddleware(CreateCellAttendanceDto, 'body'), this.cellAttendancesController.createCellAttendance);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateCellAttendanceDto, 'body', true), this.cellAttendancesController.updateCellAttendance);
    this.router.delete(`${this.path}/:id(\\d+)`, this.cellAttendancesController.deleteCellAttendance);
  }
}

export default CellAttendanceRoute;
