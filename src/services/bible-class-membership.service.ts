import { EntityRepository, Repository } from 'typeorm';
import { CreateBibleClassMembershipDto } from '@dtos/bible-study-class-membership.dto';
import { BibleClassMembershipEntity } from '@entities/bible-class-membership.entity';
import { HttpException } from '@exceptions/HttpException';
import { BibleClassMembership } from '@interfaces/bible-class-membership.interface';
import { isEmpty } from '@utils/util';

@EntityRepository()
class BibleClassMembershipService extends Repository<BibleClassMembershipEntity> {
  public async findAllBibleClassMembership(): Promise<BibleClassMembership[]> {
    const bibleClassMemberships: BibleClassMembership[] = await BibleClassMembershipEntity.find();
    return bibleClassMemberships;
  }

  public async findBibleClassMembershipById(bibleClassMembershipId: number): Promise<BibleClassMembership> {
    if (isEmpty(bibleClassMembershipId)) throw new HttpException(400, "bibleClassMembershipId is required");

    const findBibleClassMembership: BibleClassMembership = await BibleClassMembershipEntity.findOne({ where: { id: bibleClassMembershipId } });
    if (!findBibleClassMembership) throw new HttpException(409, "BibleClassMembership not found");

    return findBibleClassMembership;
  }

  public async createBibleClassMembership(bibleClassMembershipData: CreateBibleClassMembershipDto): Promise<BibleClassMembership> {
    if (isEmpty(bibleClassMembershipData)) throw new HttpException(400, "bibleClassMembershipData is required");

    const createBibleClassMembershipData: BibleClassMembership = await BibleClassMembershipEntity.create(bibleClassMembershipData).save();

    return createBibleClassMembershipData;
  }

  public async updateBibleClassMembership(bibleClassMembershipId: number, bibleClassMembershipData: CreateBibleClassMembershipDto): Promise<BibleClassMembership> {
    if (isEmpty(bibleClassMembershipData)) throw new HttpException(400, "bibleClassMembershipData is required");

    const findBibleClassMembership: BibleClassMembership = await BibleClassMembershipEntity.findOne({ where: { id: bibleClassMembershipId } });
    if (!findBibleClassMembership) throw new HttpException(409, "BibleClassMembership not found");

    await BibleClassMembershipEntity.update(bibleClassMembershipId, bibleClassMembershipData);

    const updateBibleClassMembership: BibleClassMembership = await BibleClassMembershipEntity.findOne({ where: { id: bibleClassMembershipId } });
    return updateBibleClassMembership;
  }

  public async deleteBibleClassMembership(bibleClassMembershipId: number): Promise<BibleClassMembership> {
    if (isEmpty(bibleClassMembershipId)) throw new HttpException(400, "bibleClassMembershipId is required");

    const findBibleClassMembership: BibleClassMembership = await BibleClassMembershipEntity.findOne({ where: { id: bibleClassMembershipId } });
    if (!findBibleClassMembership) throw new HttpException(409, "BibleClassMembership not found");

    await BibleClassMembershipEntity.delete({ id: bibleClassMembershipId });
    return findBibleClassMembership;
  }
}

export default BibleClassMembershipService;
