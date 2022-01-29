import { EntityRepository, Repository } from 'typeorm';
import { CreateBibleClassDto } from '@dtos/bible-class.dto';
import { BibleClassEntity } from '@entities/bible-class.entity';
import { HttpException } from '@exceptions/HttpException';
import { BibleClass } from '@interfaces/bible-study-class.interface';
import { isEmpty } from '@utils/util';

@EntityRepository()
class BibleClassService extends Repository<BibleClassEntity> {
  public async findAllBibleClass(): Promise<BibleClass[]> {
    const bibleClasses: BibleClass[] = await BibleClassEntity.find();
    return bibleClasses;
  }

  public async findBibleClassById(bibleClassId: number): Promise<BibleClass> {
    if (isEmpty(bibleClassId)) throw new HttpException(400, "bibleClassId is required");

    const findBibleClass: BibleClass = await BibleClassEntity.findOne({ where: { id: bibleClassId } });
    if (!findBibleClass) throw new HttpException(409, "BibleClass not found");

    return findBibleClass;
  }

  public async createBibleClass(bibleClassData: CreateBibleClassDto): Promise<BibleClass> {
    if (isEmpty(bibleClassData)) throw new HttpException(400, "bibleClassData is required");

    const createBibleClassData: BibleClass = await BibleClassEntity.create(bibleClassData).save();

    return createBibleClassData;
  }

  public async updateBibleClass(bibleClassId: number, bibleClassData: CreateBibleClassDto): Promise<BibleClass> {
    if (isEmpty(bibleClassData)) throw new HttpException(400, "bibleClassData is required");

    const findBibleClass: BibleClass = await BibleClassEntity.findOne({ where: { id: bibleClassId } });
    if (!findBibleClass) throw new HttpException(409, "BibleClass not found");

    await BibleClassEntity.update(bibleClassId, bibleClassData);

    const updateBibleClass: BibleClass = await BibleClassEntity.findOne({ where: { id: bibleClassId } });
    return updateBibleClass;
  }

  public async deleteBibleClass(bibleClassId: number): Promise<BibleClass> {
    if (isEmpty(bibleClassId)) throw new HttpException(400, "bibleClassId is required");

    const findBibleClass: BibleClass = await BibleClassEntity.findOne({ where: { id: bibleClassId } });
    if (!findBibleClass) throw new HttpException(409, "BibleClass not found");

    await BibleClassEntity.delete({ id: bibleClassId });
    return findBibleClass;
  }
}

export default BibleClassService;
