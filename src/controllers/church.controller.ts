import { NextFunction, Request, Response } from 'express';
import { CreateChurchDto } from '@dtos/church.dto';
import { Church } from '@interfaces/church.interface';
import ChurchService from '@services/church.service';

class ChurchController {
  public churchService = new ChurchService();

  public getChurches = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllChurchData: Church[] = await this.churchService.findAllChurch();

      res.status(200).json({ data: findAllChurchData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getChurchById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ChurchId = Number(req.params.id);
      const findOneChurchData: Church = await this.churchService.findChurchById(ChurchId);

      res.status(200).json({ data: findOneChurchData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createChurch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ChurchData: CreateChurchDto = req.body;
      const createChurchData: Church = await this.churchService.createChurch(ChurchData);

      res.status(201).json({ data: createChurchData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateChurch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ChurchId = Number(req.params.id);
      const ChurchData: CreateChurchDto = req.body;
      const updateChurchData: Church = await this.churchService.updateChurch(ChurchId, ChurchData);

      res.status(200).json({ data: updateChurchData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteChurch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ChurchId = Number(req.params.id);
      const deleteChurchData: Church = await this.churchService.deleteChurch(ChurchId);

      res.status(200).json({ data: deleteChurchData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ChurchController;
