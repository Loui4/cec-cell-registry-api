import { NextFunction, Request, Response } from 'express';
import { CreateMemberDto } from '@dtos/member.dto';
import { Member } from '@interfaces/member.interface';
import MemberService from '@services/member.service';

class MembersController {
  public memberService = new MemberService();

  public getMembers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllMembersData: Member[] = await this.memberService.findAllMember();

      res.status(200).json({ data: findAllMembersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getMemberById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const MemberId = Number(req.params.id);
      const findOneMemberData: Member = await this.memberService.findMemberById(MemberId);

      res.status(200).json({ data: findOneMemberData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const MemberData: CreateMemberDto = req.body;
      const createMemberData: Member = await this.memberService.createMember(MemberData);

      res.status(201).json({ data: createMemberData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const MemberId = Number(req.params.id);
      const MemberData: CreateMemberDto = req.body;
      const updateMemberData: Member = await this.memberService.updateMember(MemberId, MemberData);

      res.status(200).json({ data: updateMemberData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const MemberId = Number(req.params.id);
      const deleteMemberData: Member = await this.memberService.deleteMember(MemberId);

      res.status(200).json({ data: deleteMemberData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default MembersController;
