import { NextFunction, Request, Response } from 'express';
import { CreateBibleClassMembershipDto } from '@dtos/bible-class-membership.dto';
import { BibleClassMembership } from '@interfaces/bible-class-membership.interface';
import BibleClassMembershipService from '@services/bible-class-membership.service';

class BibleClassMembershipsController {
  public bibleClassMembershipService = new BibleClassMembershipService();

  public getBibleClassMemberships = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllBibleClassMembershipsData: BibleClassMembership[] = await this.bibleClassMembershipService.findAllBibleClassMembership();

      res.status(200).json({ data: findAllBibleClassMembershipsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getBibleClassMembershipById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const BibleClassMembershipId = Number(req.params.id);
      const findOneBibleClassMembershipData: BibleClassMembership = await this.bibleClassMembershipService.findBibleClassMembershipById(BibleClassMembershipId);

      res.status(200).json({ data: findOneBibleClassMembershipData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createBibleClassMembership = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const BibleClassMembershipData: CreateBibleClassMembershipDto = req.body;
      const createBibleClassMembershipData: BibleClassMembership = await this.bibleClassMembershipService.createBibleClassMembership(BibleClassMembershipData);

      res.status(201).json({ data: createBibleClassMembershipData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateBibleClassMembership = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const BibleClassMembershipId = Number(req.params.id);
      const BibleClassMembershipData: CreateBibleClassMembershipDto = req.body;
      const updateBibleClassMembershipData: BibleClassMembership = await this.bibleClassMembershipService.updateBibleClassMembership(BibleClassMembershipId, BibleClassMembershipData);

      res.status(200).json({ data: updateBibleClassMembershipData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteBibleClassMembership = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const BibleClassMembershipId = Number(req.params.id);
      const deleteBibleClassMembershipData: BibleClassMembership = await this.bibleClassMembershipService.deleteBibleClassMembership(BibleClassMembershipId);

      res.status(200).json({ data: deleteBibleClassMembershipData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default BibleClassMembershipsController;
