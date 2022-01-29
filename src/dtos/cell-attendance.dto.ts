import { IsNumber } from 'class-validator';

export class CreateCellAttendanceDto {

  @IsNumber()
  public memberId: number;

  @IsNumber()
  public bibleClassId: number;

  @IsNumber()
  public yearId: number;

  @IsNumber()
  public weekId: number;
}
