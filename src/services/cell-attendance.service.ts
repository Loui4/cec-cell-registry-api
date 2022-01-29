import { EntityRepository, Repository } from 'typeorm';
import { CreateCellAttendanceDto } from '@dtos/cell-attendance.dto';
import { CellAttendanceEntity } from '@entities/cell-attendance.entity';
import { HttpException } from '@exceptions/HttpException';
import { CellAttendance } from '@interfaces/cell-attendance.interface';
import { isEmpty } from '@utils/util';

@EntityRepository()
class CellAttendanceService extends Repository<CellAttendanceEntity> {
  public async findAllCellAttendance(): Promise<CellAttendance[]> {
    const cellAttendances: CellAttendance[] = await CellAttendanceEntity.find();
    return cellAttendances;
  }

  public async findCellAttendanceById(cellAttendanceId: number): Promise<CellAttendance> {
    if (isEmpty(cellAttendanceId)) throw new HttpException(400, "cellAttendanceId is required");

    const findCellAttendance: CellAttendance = await CellAttendanceEntity.findOne({ where: { id: cellAttendanceId } });
    if (!findCellAttendance) throw new HttpException(409, "CellAttendance not found");

    return findCellAttendance;
  }

  public async createCellAttendance(cellAttendanceData: CreateCellAttendanceDto): Promise<CellAttendance> {
    if (isEmpty(cellAttendanceData)) throw new HttpException(400, "cellAttendanceData is required");

    const createCellAttendanceData: CellAttendance = await CellAttendanceEntity.create(cellAttendanceData).save();

    return createCellAttendanceData;
  }

  public async updateCellAttendance(cellAttendanceId: number, cellAttendanceData: CreateCellAttendanceDto): Promise<CellAttendance> {
    if (isEmpty(cellAttendanceData)) throw new HttpException(400, "cellAttendanceData is required");

    const findCellAttendance: CellAttendance = await CellAttendanceEntity.findOne({ where: { id: cellAttendanceId } });
    if (!findCellAttendance) throw new HttpException(409, "CellAttendance not found");

    await CellAttendanceEntity.update(cellAttendanceId, cellAttendanceData);

    const updateCellAttendance: CellAttendance = await CellAttendanceEntity.findOne({ where: { id: cellAttendanceId } });
    return updateCellAttendance;
  }

  public async deleteCellAttendance(cellAttendanceId: number): Promise<CellAttendance> {
    if (isEmpty(cellAttendanceId)) throw new HttpException(400, "cellAttendanceId is required");

    const findCellAttendance: CellAttendance = await CellAttendanceEntity.findOne({ where: { id: cellAttendanceId } });
    if (!findCellAttendance) throw new HttpException(409, "CellAttendance not found");

    await CellAttendanceEntity.delete({ id: cellAttendanceId });
    return findCellAttendance;
  }
}

export default CellAttendanceService;
