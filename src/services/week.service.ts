import { EntityRepository, Repository } from 'typeorm';
import { CreateWeekDto } from '@dtos/week.dto';
import { WeekEntity } from '@entities/week.entity';
import { HttpException } from '@exceptions/HttpException';
import { Week } from '@interfaces/week.interface';
import { isEmpty } from '@utils/util';

@EntityRepository()
class WeekService extends Repository<WeekEntity> {
  public async findAllWeek(): Promise<Week[]> {
    const Weeks: Week[] = await WeekEntity.find();
    return Weeks;
  }

  public async findWeekById(weekId: number): Promise<Week> {
    if (isEmpty(weekId)) throw new HttpException(400, "weekId is required");

    const findWeek: Week = await WeekEntity.findOne({ where: { id: weekId } });
    if (!findWeek) throw new HttpException(409, "Week not found");

    return findWeek;
  }

  public async createWeek(weekData: CreateWeekDto): Promise<Week> {
    if (isEmpty(weekData)) throw new HttpException(400, "weekData is required");

    const createWeekData: Week = await WeekEntity.create(weekData).save();

    return createWeekData;
  }

  public async updateWeek(weekId: number, weekData: CreateWeekDto): Promise<Week> {
    if (isEmpty(weekData)) throw new HttpException(400, "weekData is required");

    const findWeek: Week = await WeekEntity.findOne({ where: { id: weekId } });
    if (!findWeek) throw new HttpException(409, "Week not found");

    await WeekEntity.update(weekId, weekData);

    const updateWeek: Week = await WeekEntity.findOne({ where: { id: weekId } });
    return updateWeek;
  }

  public async deleteWeek(weekId: number): Promise<Week> {
    if (isEmpty(weekId)) throw new HttpException(400, "weekId is required");

    const findWeek: Week = await WeekEntity.findOne({ where: { id: weekId } });
    if (!findWeek) throw new HttpException(409, "Week not found");

    await WeekEntity.delete({ id: weekId });
    return findWeek;
  }
}

export default WeekService;
