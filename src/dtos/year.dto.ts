import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreateYearDto {
  @IsString()
  public year: string;

  @IsDateString()
  public start: string;

  @IsDateString()
  public to: string;
}


