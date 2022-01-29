import { IsNumber, IsString } from 'class-validator';

export class CreateWeekDto {
  @IsString()
  public month: string;

  @IsNumber()
  public week: number;
}


