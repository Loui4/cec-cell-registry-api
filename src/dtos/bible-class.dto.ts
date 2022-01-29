import { IsNumber, IsString } from 'class-validator';

export class CreateBibleClassDto {
  @IsString()
  public name: string;

  @IsString()
  public venue: string;

  @IsNumber()
  public churchId: number;
}


