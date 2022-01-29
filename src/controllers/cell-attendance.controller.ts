import { NextFunction, Request, Response } from 'express';
import { CreateCellAttendanceDto } from '@dtos/cell-attendance.dto';
import { CellAttendance } from '@interfaces/cell-attendance.interface';
import CellAttendanceService from '@services/cell-attendance.service';

class CellAttendancesController {
  public cellAttendanceService = new CellAttendanceService();

  public getCellAttendances = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCellAttendancesData: CellAttendance[] = await this.cellAttendanceService.findAllCellAttendance();

      res.status(200).json({ data: findAllCellAttendancesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCellAttendanceById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const CellAttendanceId = Number(req.params.id);
      const findOneCellAttendanceData: CellAttendance = await this.cellAttendanceService.findCellAttendanceById(CellAttendanceId);

      res.status(200).json({ data: findOneCellAttendanceData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCellAttendance = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const CellAttendanceData: CreateCellAttendanceDto = req.body;
      const createCellAttendanceData: CellAttendance = await this.cellAttendanceService.createCellAttendance(CellAttendanceData);

      res.status(201).json({ data: createCellAttendanceData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCellAttendance = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const CellAttendanceId = Number(req.params.id);
      const CellAttendanceData: CreateCellAttendanceDto = req.body;
      const updateCellAttendanceData: CellAttendance = await this.cellAttendanceService.updateCellAttendance(CellAttendanceId, CellAttendanceData);

      res.status(200).json({ data: updateCellAttendanceData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCellAttendance = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const CellAttendanceId = Number(req.params.id);
      const deleteCellAttendanceData: CellAttendance = await this.cellAttendanceService.deleteCellAttendance(CellAttendanceId);

      res.status(200).json({ data: deleteCellAttendanceData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CellAttendancesController;
