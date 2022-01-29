import { EntityRepository, Repository } from 'typeorm';
import { CreateChurchDto } from '@dtos/church.dto';
import { ChurchEntity } from '@entities/church.entity';
import { HttpException } from '@exceptions/HttpException';
import { Church } from '@interfaces/church.interface';
import { isEmpty } from '@utils/util';

@EntityRepository()
class ChurchService extends Repository<ChurchEntity> {
  public async findAllChurch(): Promise<Church[]> {
    const churches: Church[] = await ChurchEntity.find();
    return churches;
  }

  public async findChurchById(churchId: number): Promise<Church> {
    if (isEmpty(churchId)) throw new HttpException(400, "churchId is required");

    const findChurch: Church = await ChurchEntity.findOne({ where: { id: churchId } });
    if (!findChurch) throw new HttpException(409, "Church not found");

    return findChurch;
  }

  public async createChurch(churchData: CreateChurchDto): Promise<Church> {
    if (isEmpty(churchData)) throw new HttpException(400, "churchData is required");

    const findChurch: Church = await ChurchEntity.findOne({ where: { name: churchData.name } });
    if (findChurch) throw new HttpException(409, `${churchData.name} already exists`);

    const createChurchData: Church = await ChurchEntity.create(churchData).save();

    return createChurchData;
  }

  public async updateChurch(churchId: number, churchData: CreateChurchDto): Promise<Church> {
    if (isEmpty(churchData)) throw new HttpException(400, "churchData is required");

    const findChurch: Church = await ChurchEntity.findOne({ where: { id: churchId } });
    if (!findChurch) throw new HttpException(409, "Church not found");

    await ChurchEntity.update(churchId, churchData);

    const updateChurch: Church = await ChurchEntity.findOne({ where: { id: churchId } });
    return updateChurch;
  }

  public async deleteChurch(churchId: number): Promise<Church> {
    if (isEmpty(churchId)) throw new HttpException(400, "churchId is required");

    const findChurch: Church = await ChurchEntity.findOne({ where: { id: churchId } });
    if (!findChurch) throw new HttpException(409, "Church not found");

    await ChurchEntity.delete({ id: churchId });
    return findChurch;
  }
}

export default ChurchService;
