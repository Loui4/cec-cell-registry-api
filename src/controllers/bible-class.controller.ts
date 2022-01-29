import { NextFunction, Request, Response } from 'express';
import { CreateBibleClassDto } from '@dtos/bible-class.dto';
import { BibleClass } from '@interfaces/bible-class.interface';
import BibleClassService from '@services/bible-class.service';

class BibleClassController {
  public bibleClassService = new BibleClassService();

  public getBibleClasss = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllBibleClassData: BibleClass[] = await this.bibleClassService.findAllBibleClass();

      res.status(200).json({ data: findAllBibleClassData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getBibleClassById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const BibleClassId = Number(req.params.id);
      const findOneBibleClassData: BibleClass = await this.bibleClassService.findBibleClassById(BibleClassId);

      res.status(200).json({ data: findOneBibleClassData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createBibleClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const BibleClassData: CreateBibleClassDto = req.body;
      const createBibleClassData: BibleClass = await this.bibleClassService.createBibleClass(BibleClassData);

      res.status(201).json({ data: createBibleClassData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateBibleClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const BibleClassId = Number(req.params.id);
      const BibleClassData: CreateBibleClassDto = req.body;
      const updateBibleClassData: BibleClass = await this.bibleClassService.updateBibleClass(BibleClassId, BibleClassData);

      res.status(200).json({ data: updateBibleClassData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteBibleClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const BibleClassId = Number(req.params.id);
      const deleteBibleClassData: BibleClass = await this.bibleClassService.deleteBibleClass(BibleClassId);

      res.status(200).json({ data: deleteBibleClassData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default BibleClassController;
