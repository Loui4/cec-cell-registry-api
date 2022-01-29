import { EntityRepository, Repository } from 'typeorm';
import { CreateYearDto } from '@dtos/year.dto';
import { YearEntity } from '@entities/year.entity';
import { HttpException } from '@exceptions/HttpException';
import { Year } from '@interfaces/year.interface';
import { isEmpty } from '@utils/util';

@EntityRepository()
class YearService extends Repository<YearEntity> {
  public async findAllYear(): Promise<Year[]> {
    const Years: Year[] = await YearEntity.find();
    return Years;
  }

  public async findYearById(yearId: number): Promise<Year> {
    if (isEmpty(yearId)) throw new HttpException(400, "yearId is required");

    const findYear: Year = await YearEntity.findOne({ where: { id: yearId } });
    if (!findYear) throw new HttpException(409, "Year not found");

    return findYear;
  }

  public async createYear(yearData: CreateYearDto): Promise<Year> {
    if (isEmpty(yearData)) throw new HttpException(400, "yearData is required");

    const findYear: Year = await YearEntity.findOne({ where: { year: yearData.year } });
    if (findYear) throw new HttpException(409, `${yearData.year} already exists`);

    const createYearData: Year = await YearEntity.create(yearData).save();

    return createYearData;
  }

  public async updateYear(yearId: number, yearData: CreateYearDto): Promise<Year> {
    if (isEmpty(yearData)) throw new HttpException(400, "yearData is required");

    const findYear: Year = await YearEntity.findOne({ where: { id: yearId } });
    if (!findYear) throw new HttpException(409, "Year not found");

    await YearEntity.update(yearId, yearData);

    const updateYear: Year = await YearEntity.findOne({ where: { id: yearId } });
    return updateYear;
  }

  public async deleteYear(yearId: number): Promise<Year> {
    if (isEmpty(yearId)) throw new HttpException(400, "yearId is required");

    const findYear: Year = await YearEntity.findOne({ where: { id: yearId } });
    if (!findYear) throw new HttpException(409, "Year not found");

    await YearEntity.delete({ id: yearId });
    return findYear;
  }
}

export default YearService;
