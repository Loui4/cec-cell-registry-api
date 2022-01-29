import { EntityRepository, Repository } from 'typeorm';
import { CreateMemberDto } from '@/dtos/member.dto';
import { MemberEntity } from '@entities/member.entity';
import { HttpException } from '@exceptions/HttpException';
import { Member } from '@interfaces/member.interface';
import { isEmpty } from '@utils/util';

@EntityRepository()
class MemberService extends Repository<MemberEntity> {
  public async findAllMember(): Promise<Member[]> {
    const Members: Member[] = await MemberEntity.find();
    return Members;
  }

  public async findMemberById(memberId: number): Promise<Member> {
    if (isEmpty(memberId)) throw new HttpException(400, "memberId is required");

    const findMember: Member = await MemberEntity.findOne({ where: { id: memberId } });
    if (!findMember) throw new HttpException(409, "Member not found");

    return findMember;
  }

  public async createMember(memberData: CreateMemberDto): Promise<Member> {
    if (isEmpty(memberData)) throw new HttpException(400, "memberData is required");

    const findMember: Member = await MemberEntity.findOne({ where: { email: memberData.email } });
    if (findMember) throw new HttpException(409, `You're email ${memberData.email} already exists`);

    const createMemberData: Member = await MemberEntity.create(memberData).save();

    return createMemberData;
  }

  public async updateMember(memberId: number, memberData: CreateMemberDto): Promise<Member> {
    if (isEmpty(memberData)) throw new HttpException(400, "memberData is required");

    const findMember: Member = await MemberEntity.findOne({ where: { id: memberId } });
    if (!findMember) throw new HttpException(409, "Member not found");

    await MemberEntity.update(memberId, memberData);

    const updateMember: Member = await MemberEntity.findOne({ where: { id: memberId } });
    return updateMember;
  }

  public async deleteMember(memberId: number): Promise<Member> {
    if (isEmpty(memberId)) throw new HttpException(400, "memberId is required");

    const findMember: Member = await MemberEntity.findOne({ where: { id: memberId } });
    if (!findMember) throw new HttpException(409, "Member not found");

    await MemberEntity.delete({ id: memberId });
    return findMember;
  }
}

export default MemberService;
